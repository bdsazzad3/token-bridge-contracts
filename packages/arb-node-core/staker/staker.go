package staker

import (
	"context"
	"github.com/ethereum/go-ethereum/core/types"
	"math/big"

	"github.com/offchainlabs/arbitrum/packages/arb-node-core/challenge"
	"github.com/offchainlabs/arbitrum/packages/arb-node-core/ethbridge"
	"github.com/offchainlabs/arbitrum/packages/arb-node-core/ethutils"
	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/offchainlabs/arbitrum/packages/arb-util/core"
)

type Strategy uint8

const (
	MakeNodesStrategy Strategy = iota
	StakeLatestStrategy
	ChallengerTakerStrategy
	WatchtowerStrategy
)

type Staker struct {
	*Validator
	makeNewNodes    bool
	latestValidNode *big.Int
	activeChallenge *challenge.Challenger
	strategy        Strategy
}

func NewStaker(
	ctx context.Context,
	lookup core.ArbCoreLookup,
	client ethutils.EthClient,
	wallet *ethbridge.ValidatorWallet,
	validatorUtilsAddress common.Address,
) (*Staker, error) {
	val, err := NewValidator(ctx, lookup, client, wallet, validatorUtilsAddress)
	if err != nil {
		return nil, err
	}
	latestConfirmed, err := val.rollup.LatestConfirmedNode(ctx)
	if err != nil {
		return nil, err
	}
	return &Staker{
		Validator:       val,
		makeNewNodes:    true,
		latestValidNode: latestConfirmed,
	}, nil
}

func (s *Staker) Act(ctx context.Context) (*types.Transaction, error) {
	info, err := s.rollup.StakerInfo(ctx, s.wallet.Address())
	if err != nil {
		return nil, err
	}

	if info != nil {
		if s.latestValidNode == nil || s.latestValidNode.Cmp(info.LatestStakedNode) < 0 {
			s.latestValidNode = info.LatestStakedNode
		}
	}

	if err := s.resolveNextNode(ctx); err != nil {
		return nil, err
	}

	if info != nil {
		if err := s.handleConflict(ctx, info); err != nil {
			return nil, err
		}
		if err := s.advanceStake(ctx, info); err != nil {
			return nil, err
		}
	}
	return s.wallet.ExecuteTransactions(ctx, s.builder)
}

func (s *Staker) handleConflict(ctx context.Context, info *ethbridge.StakerInfo) error {
	if info.CurrentChallenge == nil {
		s.activeChallenge = nil
		return nil
	}

	if s.activeChallenge != nil || s.activeChallenge.ChallengeAddress() != *info.CurrentChallenge {
		challengeCon, err := ethbridge.NewChallenge(info.CurrentChallenge.ToEthAddress(), s.client, s.builder)
		if err != nil {
			return err
		}

		challengedNode, err := s.rollup.LookupChallengedNode(ctx, *info.CurrentChallenge)
		if err != nil {
			return err
		}

		nodeInfo, err := lookupNode(ctx, s.rollup.RollupWatcher, challengedNode)
		if err != nil {
			return err
		}

		s.activeChallenge = challenge.NewChallenger(challengeCon, s.lookup, nodeInfo, s.wallet.Address())
	}

	return s.activeChallenge.HandleConflict(ctx)
}

func (s *Staker) newStake(ctx context.Context) error {
	info, err := s.rollup.StakerInfo(ctx, s.wallet.Address())
	if err != nil {
		return err
	}
	if info != nil {
		return nil
	}
	stakeAmount, err := s.rollup.CurrentRequiredStake(ctx)
	if err != nil {
		return err
	}
	return s.rollup.NewStake(ctx, stakeAmount)
}

func (s *Staker) advanceStake(ctx context.Context, info *ethbridge.StakerInfo) error {
	action, err := s.generateNodeAction(ctx, info.LatestStakedNode, true)
	if err != nil || action == nil {
		return err
	}

	switch action := action.(type) {
	case *nodeCreationInfo:
		if !s.makeNewNodes {
			return nil
		}
		return s.rollup.StakeOnNewNode(ctx, action.block, action.newNodeID, action.assertion)
	case *nodeMovementInfo:
		return s.rollup.StakeOnExistingNode(ctx, action.block, action.nodeNum)
	default:
		panic("invalid type")
	}
}

func (s *Staker) createConflict(ctx context.Context, info *ethbridge.StakerInfo) error {
	if info.CurrentChallenge != nil {
		return nil
	}

	stakers, err := s.validatorUtils.GetStakers(ctx)
	if err != nil {
		return err
	}
	for _, staker := range stakers {
		conflictType, node1, node2, err := s.validatorUtils.FindStakerConflict(ctx, s.wallet.Address(), staker)
		if err != nil {
			return err
		}
		if conflictType != ethbridge.CONFLICT_TYPE_FOUND {
			continue
		}
		staker1 := s.wallet.Address()
		staker2 := staker
		if node2.Cmp(node1) < 0 {
			staker1, staker2 = staker2, staker1
			node1, node2 = node2, node1
		}

		node1Info, err := lookupNode(ctx, s.rollup.RollupWatcher, node1)
		if err != nil {
			return err
		}
		node2Info, err := lookupNode(ctx, s.rollup.RollupWatcher, node2)
		if err != nil {
			return err
		}
		return s.rollup.CreateChallenge(
			ctx,
			staker1,
			node1Info,
			staker2,
			node2Info,
		)
	}
	// No conflicts exist
	return nil
}
