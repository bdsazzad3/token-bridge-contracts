/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { TestCustomTokenL1 } from '../TestCustomTokenL1'

export class TestCustomTokenL1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(_bridge: string, overrides?: Overrides): Promise<TestCustomTokenL1> {
    return super.deploy(_bridge, overrides || {}) as Promise<TestCustomTokenL1>
  }
  getDeployTransaction(
    _bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bridge, overrides || {})
  }
  attach(address: string): TestCustomTokenL1 {
    return super.attach(address) as TestCustomTokenL1
  }
  connect(signer: Signer): TestCustomTokenL1__factory {
    return super.connect(signer) as TestCustomTokenL1__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCustomTokenL1 {
    return new Contract(address, _abi, signerOrProvider) as TestCustomTokenL1
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approveAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'approveAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract EthERC20Bridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l2CustomTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'refundAddress',
        type: 'address',
      },
    ],
    name: 'registerTokenOnL2',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'transferFromAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFromAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162002d9838038062002d98833981810160405260208110156200003757600080fd5b505160fe80546001600160a01b0319166001600160a01b038316179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b83820152620000ad9290601290620000b4811b6200098d17901c565b50620009bb565b600054610100900460ff1680620000d95750620000d96001600160e01b03620001ba16565b80620000e8575060005460ff16155b620001255760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff1615801562000151576000805460ff1961ff0019909116610100171660011790555b62000165846001600160e01b03620001d916565b6200017a84846001600160e01b03620002df16565b6200018d6001600160e01b03620003bc16565b620001a1826001600160e01b036200048216565b8015620001b4576000805461ff00191690555b50505050565b6000620001d2306200049860201b62000fb31760201c565b1590505b90565b600054610100900460ff1680620001fe5750620001fe6001600160e01b03620001ba16565b806200020d575060005460ff16155b6200024a5760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff1615801562000276576000805460ff1961ff0019909116610100171660011790555b620002896001600160e01b036200049e16565b620002b482604051806040016040528060018152602001603160f81b8152506200054f60201b60201c565b620002c8826001600160e01b036200062016565b8015620002db576000805461ff00191690555b5050565b600054610100900460ff1680620003045750620003046001600160e01b03620001ba16565b8062000313575060005460ff16155b620003505760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff161580156200037c576000805460ff1961ff0019909116610100171660011790555b6200038f6001600160e01b036200049e16565b620003a483836001600160e01b03620006ef16565b8015620003b7576000805461ff00191690555b505050565b600054610100900460ff1680620003e15750620003e16001600160e01b03620001ba16565b80620003f0575060005460ff16155b6200042d5760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff1615801562000459576000805460ff1961ff0019909116610100171660011790555b6200046c6001600160e01b03620007dc16565b80156200047f576000805461ff00191690555b50565b6038805460ff191660ff92909216919091179055565b3b151590565b600054610100900460ff1680620004c35750620004c36001600160e01b03620001ba16565b80620004d2575060005460ff16155b6200050f5760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff161580156200046c576000805460ff1961ff00199091166101001716600117905580156200047f576000805461ff001916905550565b600054610100900460ff1680620005745750620005746001600160e01b03620001ba16565b8062000583575060005460ff16155b620005c05760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff16158015620005ec576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015620003b7576000805461ff0019169055505050565b600054610100900460ff1680620006455750620006456001600160e01b03620001ba16565b8062000654575060005460ff16155b620006915760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff16158015620006bd576000805460ff1961ff0019909116610100171660011790555b60405180605262002d188239604051908190036052019020609a55508015620002db576000805461ff00191690555050565b600054610100900460ff1680620007145750620007146001600160e01b03620001ba16565b8062000723575060005460ff16155b620007605760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff161580156200078c576000805460ff1961ff0019909116610100171660011790555b8251620007a190603690602086019062000919565b508151620007b790603790602085019062000919565b506038805460ff191660121790558015620003b7576000805461ff0019169055505050565b600054610100900460ff1680620008015750620008016001600160e01b03620001ba16565b8062000810575060005460ff16155b6200084d5760405162461bcd60e51b815260040180806020018281038252602e81526020018062002d6a602e913960400191505060405180910390fd5b600054610100900460ff1615801562000879576000805460ff1961ff0019909116610100171660011790555b6200046c6301ffc9a760e01b6001600160e01b036200089416565b6001600160e01b03198082161415620008f4576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b031916600090815260cc60205260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200095c57805160ff19168380011785556200098c565b828001600101855582156200098c579182015b828111156200098c5782518255916020019190600101906200096f565b506200099a9291506200099e565b5090565b620001d691905b808211156200099a5760008155600101620009a5565b61234d80620009cb6000396000f3fe608060405234801561001057600080fd5b50600436106101635760003560e01c80634000aea0116100ce578063c1d34b8911610087578063c1d34b89146105e3578063cae9ca51146106a7578063d505accf14610760578063d8fbe994146107b1578063dd62ed3e146107e7578063e78cea9214610815578063f8aece8d1461083957610163565b80634000aea01461047e57806370a08231146105375780637ecebe001461055d57806395d89b4114610583578063a457c2d71461058b578063a9059cbb146105b757610163565b806318160ddd1161012057806318160ddd146103b057806323b872dd146103ca578063313ce567146104005780633177029f1461041e5780633644e5151461044a578063395093511461045257610163565b806301ffc9a71461016857806306fdde03146101a3578063095ea7b3146102205780631249c58b1461024c5780631296ee62146102565780631624f6c614610282575b600080fd5b61018f6004803603602081101561017e57600080fd5b50356001600160e01b03191661087b565b604080519115158252519081900360200190f35b6101ab6108a6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e55781810151838201526020016101cd565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018f6004803603604081101561023657600080fd5b506001600160a01b03813516906020013561093d565b61025461095a565b005b61018f6004803603604081101561026c57600080fd5b506001600160a01b03813516906020013561096a565b6102546004803603606081101561029857600080fd5b810190602081018135600160201b8111156102b257600080fd5b8201836020820111156102c457600080fd5b803590602001918460018302840111600160201b831117156102e557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561033757600080fd5b82018360208201111561034957600080fd5b803590602001918460018302840111600160201b8311171561036a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff16915061098d9050565b6103b8610a56565b60408051918252519081900360200190f35b61018f600480360360608110156103e057600080fd5b506001600160a01b03813581169160208101359091169060400135610a5c565b610408610a71565b6040805160ff9092168252519081900360200190f35b61018f6004803603604081101561043457600080fd5b506001600160a01b038135169060200135610a7a565b6103b8610a96565b61018f6004803603604081101561046857600080fd5b506001600160a01b038135169060200135610aa5565b61018f6004803603606081101561049457600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104c357600080fd5b8201836020820111156104d557600080fd5b803590602001918460018302840111600160201b831117156104f657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610afe945050505050565b6103b86004803603602081101561054d57600080fd5b50356001600160a01b0316610b63565b6103b86004803603602081101561057357600080fd5b50356001600160a01b0316610b6e565b6101ab610b8f565b61018f600480360360408110156105a157600080fd5b506001600160a01b038135169060200135610bf0565b61018f600480360360408110156105cd57600080fd5b506001600160a01b038135169060200135610c5e565b61018f600480360360808110156105f957600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561063357600080fd5b82018360208201111561064557600080fd5b803590602001918460018302840111600160201b8311171561066657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c72945050505050565b61018f600480360360608110156106bd57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156106ec57600080fd5b8201836020820111156106fe57600080fd5b803590602001918460018302840111600160201b8311171561071f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610cd2945050505050565b610254600480360360e081101561077657600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610d25565b61018f600480360360608110156107c757600080fd5b506001600160a01b03813581169160208101359091169060400135610ebd565b6103b8600480360360408110156107fd57600080fd5b506001600160a01b0381358116916020013516610eda565b61081d610f05565b604080516001600160a01b039092168252519081900360200190f35b610254600480360360a081101561084f57600080fd5b506001600160a01b03813581169160208101359160408201359160608101359160809091013516610f14565b60006001600160e01b0319821663b0202a1160e01b14806108a057506108a082610fb9565b92915050565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b505050505090505b90565b600061095161094a610fd8565b8484610fdc565b50600192915050565b610968336302faf0806110c8565b565b6000610986838360405180602001604052806000815250610afe565b9392505050565b600054610100900460ff16806109a657506109a66111c6565b806109b4575060005460ff16155b6109ef5760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff16158015610a1a576000805460ff1961ff0019909116610100171660011790555b610a23846111d7565b610a2d84846112ae565b610a35611364565b610a3e8261140e565b8015610a50576000805461ff00191690555b50505050565b60355490565b6000610a69848484611424565b949350505050565b60385460ff1690565b6000610986838360405180602001604052806000815250610cd2565b6000610aa06114a2565b905090565b6000610951610ab2610fd8565b84610af98560346000610ac3610fd8565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6114d516565b610fdc565b6000610b0a8484610c5e565b50610b1e610b16610fd8565b85858561152f565b610b595760405162461bcd60e51b81526004018080602001828103825260268152602001806121ba6026913960400191505060405180910390fd5b5060019392505050565b60006108a082611686565b6001600160a01b03811660009081526099602052604081206108a0906116a1565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109325780601f1061090757610100808354040283529160200191610932565b6000610951610bfd610fd8565b84610af9856040518060600160405280602581526020016122f36025913960346000610c27610fd8565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6116a516565b6000610951610c6b610fd8565b848461173c565b6000610c7f858585610a5c565b50610c8c8585858561152f565b610cc75760405162461bcd60e51b81526004018080602001828103825260268152602001806121ba6026913960400191505060405180910390fd5b506001949350505050565b6000610cde848461093d565b50610cea8484846118a5565b610b595760405162461bcd60e51b81526004018080602001828103825260258152602001806120fb6025913960400191505060405180910390fd5b83421115610d7a576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610daf609960008e6001600160a01b03166001600160a01b031681526020019081526020016000206116a1565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e0909101909152805191012090506000610e0d826119e1565b90506000610e1d82878787611a2d565b9050896001600160a01b0316816001600160a01b031614610e85576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610ea690611b98565b610eb18a8a8a610fdc565b50505050505050505050565b6000610a6984848460405180602001604052806000815250610c72565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60fe546001600160a01b031681565b60fe5460408051630d3a1e5b60e11b81526001600160a01b038881166004830152602482018890526044820187905260648201869052848116608483015291519190921691631a743cb69160a48083019260209291908290030181600087803b158015610f8057600080fd5b505af1158015610f94573d6000803e3d6000fd5b505050506040513d6020811015610faa57600080fd5b50505050505050565b3b151590565b6001600160e01b031916600090815260cc602052604090205460ff1690565b3390565b6001600160a01b0383166110215760405162461bcd60e51b81526004018080602001828103825260248152602001806122cf6024913960400191505060405180910390fd5b6001600160a01b0382166110665760405162461bcd60e51b81526004018080602001828103825260228152602001806120d96022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038216611123576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61112f6000838361135f565b603554611142908263ffffffff6114d516565b6035556001600160a01b03821660009081526033602052604090205461116e908263ffffffff6114d516565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60006111d130610fb3565b15905090565b600054610100900460ff16806111f057506111f06111c6565b806111fe575060005460ff16155b6112395760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611264576000805460ff1961ff0019909116610100171660011790555b61126c611ba1565b61128f82604051806040016040528060018152602001603160f81b815250611c41565b61129882611d01565b80156112aa576000805461ff00191690555b5050565b600054610100900460ff16806112c757506112c76111c6565b806112d5575060005460ff16155b6113105760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff1615801561133b576000805460ff1961ff0019909116610100171660011790555b611343611ba1565b61134d8383611dbe565b801561135f576000805461ff00191690555b505050565b600054610100900460ff168061137d575061137d6111c6565b8061138b575060005460ff16155b6113c65760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff161580156113f1576000805460ff1961ff0019909116610100171660011790555b6113f9611e96565b801561140b576000805461ff00191690555b50565b6038805460ff191660ff92909216919091179055565b600061143184848461173c565b610b598461143d610fd8565b610af985604051806060016040528060288152602001612282602891396001600160a01b038a1660009081526034602052604081209061147b610fd8565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6116a516565b6000610aa0604051808061223060529139605201905060405180910390206114c8611f33565b6114d0611f39565b611f3f565b600082820183811015610986576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000611543846001600160a01b0316610fb3565b61154f57506000610a69565b6000846001600160a01b03166388a7ca5c611568610fd8565b8887876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156115ed5781810151838201526020016115d5565b50505050905090810190601f16801561161a5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561163c57600080fd5b505af1158015611650573d6000803e3d6000fd5b505050506040513d602081101561166657600080fd5b50516001600160e01b031916632229f29760e21b14915050949350505050565b6001600160a01b031660009081526033602052604090205490565b5490565b600081848411156117345760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116f95781810151838201526020016116e1565b50505050905090810190601f1680156117265780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0383166117815760405162461bcd60e51b81526004018080602001828103825260258152602001806122aa6025913960400191505060405180910390fd5b6001600160a01b0382166117c65760405162461bcd60e51b81526004018080602001828103825260238152602001806120b66023913960400191505060405180910390fd5b6117d183838361135f565b61181481604051806060016040528060268152602001612120602691396001600160a01b038616600090815260336020526040902054919063ffffffff6116a516565b6001600160a01b038085166000908152603360205260408082209390935590841681522054611849908263ffffffff6114d516565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60006118b9846001600160a01b0316610fb3565b6118c557506000610986565b6000846001600160a01b0316637b04a2d06118de610fd8565b86866040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561194a578181015183820152602001611932565b50505050905090810190601f1680156119775780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561199857600080fd5b505af11580156119ac573d6000803e3d6000fd5b505050506040513d60208110156119c257600080fd5b50516001600160e01b0319166307b04a2d60e41b149150509392505050565b60006119eb6114a2565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b03821115611a845760405162461bcd60e51b81526004018080602001828103825260228152602001806121466022913960400191505060405180910390fd5b8360ff16601b1480611a9957508360ff16601c145b611ad45760405162461bcd60e51b815260040180806020018281038252602281526020018061220e6022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015611b2c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611b8f576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600054610100900460ff1680611bba5750611bba6111c6565b80611bc8575060005460ff16155b611c035760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff161580156113f9576000805460ff1961ff001990911661010017166001179055801561140b576000805461ff001916905550565b600054610100900460ff1680611c5a5750611c5a6111c6565b80611c68575060005460ff16155b611ca35760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611cce576000805460ff1961ff0019909116610100171660011790555b8251602080850191909120835191840191909120606591909155606655801561135f576000805461ff0019169055505050565b600054610100900460ff1680611d1a5750611d1a6111c6565b80611d28575060005460ff16155b611d635760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611d8e576000805460ff1961ff0019909116610100171660011790555b6040518060526121688239604051908190036052019020609a555080156112aa576000805461ff00191690555050565b600054610100900460ff1680611dd75750611dd76111c6565b80611de5575060005460ff16155b611e205760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611e4b576000805460ff1961ff0019909116610100171660011790555b8251611e5e90603690602086019061201d565b508151611e7290603790602085019061201d565b506038805460ff19166012179055801561135f576000805461ff0019169055505050565b600054610100900460ff1680611eaf5750611eaf6111c6565b80611ebd575060005460ff16155b611ef85760405162461bcd60e51b815260040180806020018281038252602e8152602001806121e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611f23576000805460ff1961ff0019909116610100171660011790555b6113f96301ffc9a760e01b611f95565b60655490565b60665490565b6000838383611f4c612019565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b6001600160e01b03198082161415611ff4576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b031916600090815260cc60205260409020805460ff19166001179055565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061205e57805160ff191683800117855561208b565b8280016001018555821561208b579182015b8281111561208b578251825591602001919060010190612070565b5061209792915061209b565b5090565b61093a91905b8082111561209757600081556001016120a156fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373455243313336333a205f636865636b416e6443616c6c417070726f7665207265766572747345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529455243313336333a205f636865636b416e6443616c6c5472616e736665722072657665727473496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220355536cc69fcde515caff7457db2b074b99f4f3b3be0e685ecd4cd396531ab8464736f6c634300060b00335065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564'
