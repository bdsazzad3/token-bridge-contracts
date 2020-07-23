package web3

import (
	"context"
	"errors"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/rlp"
	"github.com/ethereum/go-ethereum/rpc"
	goarbitrum "github.com/offchainlabs/arbitrum/packages/arb-provider-go"
	"github.com/offchainlabs/arbitrum/packages/arb-tx-aggregator/aggregator"
	"github.com/offchainlabs/arbitrum/packages/arb-util/arbos"
	arbcommon "github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/offchainlabs/arbitrum/packages/arb-validator-core/arboscontracts"
	"log"
	"math/big"
	"net/http"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
)

type Server struct {
	srv  *aggregator.Server
	conn *goarbitrum.ArbConnection
	info *arboscontracts.ArbInfo
	sys  *arboscontracts.ArbSys
}

func NewServer(
	ctx context.Context,
	srv *aggregator.Server,
) (*Server, error) {
	chainAddress, err := srv.GetChainAddress(ctx)
	if err != nil {
		return nil, err
	}
	conn := goarbitrum.NewArbConnection(srv, nil, arbcommon.NewAddressFromEth(chainAddress))
	info, err := arboscontracts.NewArbInfo(arbos.ARB_INFO_ADDRESS, conn)
	if err != nil {
		return nil, err
	}
	sys, err := arboscontracts.NewArbSys(arbos.ARB_SYS_ADDRESS, conn)
	if err != nil {
		return nil, err
	}
	return &Server{srv: srv, conn: conn, info: info, sys: sys}, nil
}

func (s *Server) BlockNumber(r *http.Request, args *BlockNumberArgs, reply *string) error {
	block, err := s.srv.GetBlockCount(r.Context())
	if err != nil {
		return err
	}
	*reply = "0x" + new(big.Int).SetUint64(block).Text(16)
	return nil
}

func (s *Server) GetBalance(r *http.Request, args *AccountInfoArgs, reply *string) error {
	balance, err := s.info.GetBalance(
		&bind.CallOpts{
			Pending:     false,
			From:        common.Address{},
			BlockNumber: big.NewInt(args.BlockNum.Int64()),
			Context:     r.Context(),
		},
		*args.Address,
	)
	if err != nil {
		return err
	}
	*reply = "0x" + balance.Text(16)
	return nil
}

func makeCallOpts(ctx context.Context, num rpc.BlockNumber, from common.Address) *bind.CallOpts {
	pending := false
	var blockNum *big.Int
	if num == rpc.PendingBlockNumber {
		pending = true
	} else if num != rpc.LatestBlockNumber {
		blockNum = big.NewInt(num.Int64())
	}
	return &bind.CallOpts{
		Pending:     pending,
		From:        from,
		BlockNumber: blockNum,
		Context:     ctx,
	}
}

func (s *Server) GetTransactionCount(r *http.Request, args *AccountInfoArgs, reply *string) error {
	txCount, err := s.sys.GetTransactionCount(
		makeCallOpts(r.Context(), args.BlockNum, common.Address{}),
		*args.Address,
	)
	if err != nil {
		return err
	}
	*reply = "0x" + txCount.Text(16)
	return nil
}

func (s *Server) GetCode(r *http.Request, args *AccountInfoArgs, reply *string) error {
	height, err := s.blockNum(r.Context(), &args.BlockNum)
	if err != nil {
		return err
	}
	code, err := s.conn.CodeAt(r.Context(), *args.Address, new(big.Int).SetUint64(height))
	if err != nil {
		return err
	}
	*reply = hexutil.Encode(code)
	return nil
}

func (eth *Server) blockNum(ctx context.Context, block *rpc.BlockNumber) (uint64, error) {
	if *block == rpc.LatestBlockNumber {
		return eth.srv.GetBlockCount(ctx)
	} else if *block >= 0 {
		return uint64(*block), nil
	} else {
		return 0, errors.New("unsupported block num")
	}
}

func (eth *Server) GetBlockByNumber(r *http.Request, args *GetBlockByNumberArgs, reply *GetBlockResult) error {
	height, err := eth.blockNum(r.Context(), args.BlockNum)
	if err != nil {
		return err
	}
	if args.IncludeTxData {
		log.Println("GetBlockByNumber with block data")
		block, err := eth.srv.GetBlock(r.Context(), height)
		if err != nil {
			return err
		}
		reply.Header = *block.Header()
	} else {
		header, err := eth.srv.GetBlockHeader(r.Context(), height)
		if err != nil {
			return err
		}
		reply.Header = *header
	}
	return nil
}

func buildCallMsg(args *CallTxArgs) ethereum.CallMsg {
	var from common.Address
	if args.From != nil {
		from = *args.From
	}
	gas := uint64(0)
	if args.Gas != nil {
		gas = uint64(*args.Gas)
	}
	gasPrice := big.NewInt(0)
	if args.GasPrice != nil {
		gasPrice = args.GasPrice.ToInt()
	}
	value := big.NewInt(0)
	if args.Value != nil {
		value = args.Value.ToInt()
	}
	var data []byte
	if args.Data != nil {
		data = *args.Data
	}
	return ethereum.CallMsg{
		From:     from,
		To:       args.To,
		Gas:      gas,
		GasPrice: gasPrice,
		Value:    value,
		Data:     data,
	}
}

func (s *Server) Call(r *http.Request, args *CallArgs, reply *string) error {
	ret, err := s.conn.CallContract(
		r.Context(),
		buildCallMsg(args.CallArgs),
		big.NewInt(args.BlockNum.Int64()),
	)
	if err != nil {
		return err
	}
	*reply = hexutil.Encode(ret)
	return nil
}

func (s *Server) EstimateGas(r *http.Request, args *CallTxArgs, reply *string) error {
	ret, err := s.conn.EstimateGas(
		r.Context(),
		buildCallMsg(args),
	)
	if err != nil {
		return err
	}
	*reply = hexutil.EncodeUint64(ret)
	return nil
}

func (s *Server) GasPrice(r *http.Request, _ *EmptyArgs, reply *string) error {
	*reply = "0x" + big.NewInt(0).Text(16)
	return nil
}
func (s *Server) SendRawTransaction(r *http.Request, args *SendTransactionArgs, reply *string) error {
	tx := new(types.Transaction)
	if err := rlp.DecodeBytes(*args.Data, tx); err != nil {
		return err
	}
	txHash, err := s.srv.SendTransaction(r.Context(), tx)
	if err != nil {
		return err
	}
	*reply = txHash.String()
	return nil
}

func (s *Server) GetTransactionReceipt(r *http.Request, args *GetTransactionReceiptArgs, reply **types.Receipt) error {
	var requestId common.Hash
	copy(requestId[:], *args.Data)
	receipt, err := s.conn.TransactionReceipt(r.Context(), requestId)
	if err == ethereum.NotFound {
		*reply = nil
		return nil
	}
	if err != nil {
		return err
	}
	*reply = receipt
	return nil
}

func (s *Server) GetTransactionByHash(r *http.Request, args *GetTransactionReceiptArgs, reply **types.Transaction) error {
	var requestId common.Hash
	copy(requestId[:], *args.Data)

	tx, err := s.srv.GetTransaction(r.Context(), requestId)
	if err != nil {
		return err
	}
	*reply = tx
	return nil
}
