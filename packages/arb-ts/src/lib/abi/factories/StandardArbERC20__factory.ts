/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StandardArbERC20 } from '../StandardArbERC20'

export class StandardArbERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<StandardArbERC20> {
    return super.deploy(overrides || {}) as Promise<StandardArbERC20>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): StandardArbERC20 {
    return super.attach(address) as StandardArbERC20
  }
  connect(signer: Signer): StandardArbERC20__factory {
    return super.connect(signer) as StandardArbERC20__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardArbERC20 {
    return new Contract(address, _abi, signerOrProvider) as StandardArbERC20
  }
}

const _abi = [
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
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
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
        internalType: 'contract ArbTokenBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'bridgeInit',
    outputs: [],
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
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'isMaster',
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
    name: 'l1Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'migrate',
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
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060cc805460ff191660011790556125058061002d6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a9059cbb1161007c578063a9059cbb1461062e578063ad68ebf71461065a578063c2eeeebd14610686578063d505accf146106aa578063dd62ed3e146106fb578063e78cea92146107295761014d565b806370a082311461055657806374f4f5471461057c5780637ecebe00146105a85780638c2a993e146105ce57806395d89b41146105fa578063a457c2d7146106025761014d565b806323b872dd1161011557806323b872dd1461040d578063313ce567146104435780633644e5151461046157806339509351146104695780634000aea0146104955780636f791d291461054e5761014d565b806306fdde0314610152578063095ea7b3146101cf5780631624f6c61461020f57806318160ddd1461033f578063189db7d214610359575b600080fd5b61015a610731565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019457818101518382015260200161017c565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fb600480360360408110156101e557600080fd5b506001600160a01b0381351690602001356107c8565b604080519115158252519081900360200190f35b61033d6004803603606081101561022557600080fd5b810190602081018135600160201b81111561023f57600080fd5b82018360208201111561025157600080fd5b803590602001918460018302840111600160201b8311171561027257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156102c457600080fd5b8201836020820111156102d657600080fd5b803590602001918460018302840111600160201b831117156102f757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff1691506107e69050565b005b6103476108a7565b60408051918252519081900360200190f35b61033d6004803603604081101561036f57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561039957600080fd5b8201836020820111156103ab57600080fd5b803590602001918460018302840111600160201b831117156103cc57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108ad945050505050565b6101fb6004803603606081101561042357600080fd5b506001600160a01b03813581169160208101359091169060400135610b9d565b61044b610c2a565b6040805160ff9092168252519081900360200190f35b610347610c33565b6101fb6004803603604081101561047f57600080fd5b506001600160a01b038135169060200135610c42565b6101fb600480360360608110156104ab57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104da57600080fd5b8201836020820111156104ec57600080fd5b803590602001918460018302840111600160201b8311171561050d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c96945050505050565b6101fb610d71565b6103476004803603602081101561056c57600080fd5b50356001600160a01b0316610d7a565b61033d6004803603604081101561059257600080fd5b506001600160a01b038135169060200135610d99565b610347600480360360208110156105be57600080fd5b50356001600160a01b0316610df9565b61033d600480360360408110156105e457600080fd5b506001600160a01b038135169060200135610e1a565b61015a610e76565b6101fb6004803603604081101561061857600080fd5b506001600160a01b038135169060200135610ed7565b6101fb6004803603604081101561064457600080fd5b506001600160a01b038135169060200135610f45565b61033d6004803603604081101561067057600080fd5b506001600160a01b038135169060200135610f59565b61068e610fe1565b604080516001600160a01b039092168252519081900360200190f35b61033d600480360360e08110156106c057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610ff0565b6103476004803603604081101561071157600080fd5b506001600160a01b0381358116916020013516611188565b61068e6111b3565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107bd5780601f10610792576101008083540402835291602001916107bd565b820191906000526020600020905b8154815290600101906020018083116107a057829003601f168201915b505050505090505b90565b60006107dc6107d56111c7565b84846111cb565b5060015b92915050565b600054610100900460ff16806107ff57506107ff6112b7565b8061080d575060005460ff16155b6108485760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff16158015610873576000805460ff1961ff0019909116610100171660011790555b61087c846112c8565b610886848461139e565b61088f82611454565b80156108a1576000805461ff00191690555b50505050565b60355490565b60cd546001600160a01b0316156108fc576040805162461bcd60e51b815260206004820152600e60248201526d105b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b60cc8054610100600160a81b031916336101000217905560cd80546001600160a01b0319166001600160a01b03841617905580516060908190819060208501908281101561094957600080fd5b8101908080516040519392919084600160201b82111561096857600080fd5b90830190602082018581111561097d57600080fd5b8251600160201b81118282018810171561099657600080fd5b82525081516020918201929091019080838360005b838110156109c35781810151838201526020016109ab565b50505050905090810190601f1680156109f05780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b821115610a1257600080fd5b908301906020820185811115610a2757600080fd5b8251600160201b811182820188101715610a4057600080fd5b82525081516020918201929091019080838360005b83811015610a6d578181015183820152602001610a55565b50505050905090810190601f168015610a9a5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b821115610abc57600080fd5b908301906020820185811115610ad157600080fd5b8251600160201b811182820188101715610aea57600080fd5b82525081516020918201929091019080838360005b83811015610b17578181015183820152602001610aff565b50505050905090810190601f168015610b445780820380516001836020036101000a031916815260200191505b50604052505050925092509250610b96610b6d846040518060200160405280600081525061146a565b610b86846040518060200160405280600081525061146a565b610b91846012611571565b6107e6565b5050505050565b6000610baa8484846115a2565b610c2084610bb66111c7565b610c1b856040518060600160405280602881526020016123f9602891396001600160a01b038a16600090815260346020526040812090610bf46111c7565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6116f916565b6111cb565b5060019392505050565b60385460ff1690565b6000610c3d611790565b905090565b60006107dc610c4f6111c7565b84610c1b8560346000610c606111c7565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6117c316565b6000610ca28484610f45565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d1d578181015183820152602001610d05565b50505050905090810190601f168015610d4a5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3610d6184611824565b15610c2057610c2084848461182a565b60cc5460ff1690565b6001600160a01b0381166000908152603360205260409020545b919050565b60cc5461010090046001600160a01b03163314610deb576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b610df58282611904565b5050565b6001600160a01b03811660009081526099602052604081206107e0906119fa565b60cc5461010090046001600160a01b03163314610e6c576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b610df582826119fe565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107bd5780601f10610792576101008083540402835291602001916107bd565b60006107dc610ee46111c7565b84610c1b856040518060600160405280602581526020016124ab6025913960346000610f0e6111c7565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6116f916565b60006107dc610f526111c7565b84846115a2565b60cc5460cd5460408051630d3f3fc360e21b81526001600160a01b0392831660048201523360248201528583166044820152606481018590529051610100909304909116916334fcff0c9160848082019260009290919082900301818387803b158015610fc557600080fd5b505af1158015610fd9573d6000803e3d6000fd5b505050505050565b60cd546001600160a01b031681565b83421115611045576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a5488888861107a609960008e6001600160a01b03166001600160a01b031681526020019081526020016000206119fa565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e09091019091528051910120905060006110d882611aea565b905060006110e882878787611b36565b9050896001600160a01b0316816001600160a01b031614611150576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a16600090815260996020526040902061117190611ca1565b61117c8a8a8a6111cb565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60cc5461010090046001600160a01b031681565b3390565b6001600160a01b0383166112105760405162461bcd60e51b81526004018080602001828103825260248152602001806124876024913960400191505060405180910390fd5b6001600160a01b0382166112555760405162461bcd60e51b815260040180806020018281038252602281526020018061229b6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006112c230611824565b15905090565b600054610100900460ff16806112e157506112e16112b7565b806112ef575060005460ff16155b61132a5760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff16158015611355576000805460ff1961ff0019909116610100171660011790555b61135d611caa565b61138082604051806040016040528060018152602001603160f81b815250611d4c565b61138982611e0c565b8015610df5576000805461ff00191690555050565b600054610100900460ff16806113b757506113b76112b7565b806113c5575060005460ff16155b6114005760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff1615801561142b576000805460ff1961ff0019909116610100171660011790555b611433611caa565b61143d8383611ec9565b801561144f576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b606082516000141561147d5750806107e0565b8251602014156114a7576114a061149b84600063ffffffff611fa116565b611ffa565b90506107e0565b8280602001905160208110156114bc57600080fd5b8101908080516040519392919084600160201b8211156114db57600080fd5b9083019060208201858111156114f057600080fd5b8251600160201b81118282018810171561150957600080fd5b82525081516020918201929091019080838360005b8381101561153657818101518382015260200161151e565b50505050905090810190601f1680156115635780820380516001836020036101000a031916815260200191505b5060405250505090506107e0565b60008251600014156115845750806107e0565b82806020019051602081101561159957600080fd5b505190506107e0565b6001600160a01b0383166115e75760405162461bcd60e51b81526004018080602001828103825260258152602001806124626025913960400191505060405180910390fd5b6001600160a01b03821661162c5760405162461bcd60e51b81526004018080602001828103825260238152602001806122566023913960400191505060405180910390fd5b61163783838361144f565b61167a816040518060600160405280602681526020016122bd602691396001600160a01b038616600090815260336020526040902054919063ffffffff6116f916565b6001600160a01b0380851660009081526033602052604080822093909355908416815220546116af908263ffffffff6117c316565b6001600160a01b03808416600081815260336020908152604091829020949094558051858152905191939287169260008051602061242183398151915292918290030190a3505050565b600081848411156117885760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561174d578181015183820152602001611735565b50505050905090810190601f16801561177a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610c3d60405180806123a760529139605201905060405180910390206117b66120c9565b6117be6120cf565b6120d5565b60008282018381101561181d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3b151590565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b83811015611898578181015183820152602001611880565b50505050905090810190601f1680156118c55780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156118e657600080fd5b505af11580156118fa573d6000803e3d6000fd5b5050505050505050565b6001600160a01b0382166119495760405162461bcd60e51b81526004018080602001828103825260218152602001806124416021913960400191505060405180910390fd5b6119558260008361144f565b61199881604051806060016040528060228152602001612279602291396001600160a01b038516600090815260336020526040902054919063ffffffff6116f916565b6001600160a01b0383166000908152603360205260409020556035546119c4908263ffffffff61212b16565b6035556040805182815290516000916001600160a01b038516916000805160206124218339815191529181900360200190a35050565b5490565b6001600160a01b038216611a59576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611a656000838361144f565b603554611a78908263ffffffff6117c316565b6035556001600160a01b038216600090815260336020526040902054611aa4908263ffffffff6117c316565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391926000805160206124218339815191529281900390910190a35050565b6000611af4611790565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b03821115611b8d5760405162461bcd60e51b81526004018080602001828103825260228152602001806122e36022913960400191505060405180910390fd5b8360ff16601b1480611ba257508360ff16601c145b611bdd5760405162461bcd60e51b81526004018080602001828103825260228152602001806123856022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015611c35573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c98576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600054610100900460ff1680611cc35750611cc36112b7565b80611cd1575060005460ff16155b611d0c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff16158015611d37576000805460ff1961ff0019909116610100171660011790555b8015611d49576000805461ff00191690555b50565b600054610100900460ff1680611d655750611d656112b7565b80611d73575060005460ff16155b611dae5760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff16158015611dd9576000805460ff1961ff0019909116610100171660011790555b8251602080850191909120835191840191909120606591909155606655801561144f576000805461ff0019169055505050565b600054610100900460ff1680611e255750611e256112b7565b80611e33575060005460ff16155b611e6e5760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff16158015611e99576000805460ff1961ff0019909116610100171660011790555b6040518060526123058239604051908190036052019020609a55508015610df5576000805461ff00191690555050565b600054610100900460ff1680611ee25750611ee26112b7565b80611ef0575060005460ff16155b611f2b5760405162461bcd60e51b815260040180806020018281038252602e815260200180612357602e913960400191505060405180910390fd5b600054610100900460ff16158015611f56576000805460ff1961ff0019909116610100171660011790555b8251611f699060369060208601906121bd565b508151611f7d9060379060208501906121bd565b506038805460ff19166012179055801561144f576000805461ff0019169055505050565b60008160200183511015611ff1576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b60408051818152606081810183529182919060208201818036833701905050905060005b60208110156120c257600084826020811061203557fe5b1a60f881811b9250601080830480831b9360ff9091169091029003901b61205b82612188565b85856002028151811061206a57fe5b60200101906001600160f81b031916908160001a90535061208a81612188565b85856002026001018151811061209c57fe5b60200101906001600160f81b031916908160001a905350506001909201915061201e9050565b5092915050565b60655490565b60665490565b60008383836120e26121b9565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b600082821115612182576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000600a60f883901c10156121a8578160f81c60300160f81b9050610d94565b8160f81c60570160f81b9050610d94565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121fe57805160ff191683800117855561222b565b8280016001018555821561222b579182015b8281111561222b578251825591602001919060010190612210565b5061223792915061223b565b5090565b6107c591905b80821115612237576000815560010161224156fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122097fc82f34a796cddb8396ff663369113945c4bf99a6089240e3066320bdd0dc464736f6c634300060b0033'
