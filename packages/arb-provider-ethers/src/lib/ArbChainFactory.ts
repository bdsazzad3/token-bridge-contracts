/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { ArbChain } from './ArbChain';

export class ArbChainFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbChain {
        return new Contract(address, _abi, signerOrProvider) as ArbChain;
    }
}

const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: 'validator',
                type: 'address',
            },
        ],
        name: 'currentDeposit',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getState',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_players',
                type: 'address[2]',
            },
            {
                name: '_rewards',
                type: 'uint128[2]',
            },
        ],
        name: 'completeChallenge',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_assertPreHash',
                type: 'bytes32',
            },
        ],
        name: 'initiateChallenge',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'vm',
        outputs: [
            {
                name: 'machineHash',
                type: 'bytes32',
            },
            {
                name: 'pendingHash',
                type: 'bytes32',
            },
            {
                name: 'inbox',
                type: 'bytes32',
            },
            {
                name: 'asserter',
                type: 'address',
            },
            {
                name: 'escrowRequired',
                type: 'uint128',
            },
            {
                name: 'deadline',
                type: 'uint64',
            },
            {
                name: 'sequenceNum',
                type: 'uint64',
            },
            {
                name: 'gracePeriod',
                type: 'uint32',
            },
            {
                name: 'maxExecutionSteps',
                type: 'uint32',
            },
            {
                name: 'state',
                type: 'uint8',
            },
            {
                name: 'activeChallengeManager',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'terminateAddress',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'exitAddress',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'challengeLauncher',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'activateVM',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'escrowRequired',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'ownerShutdown',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'globalInbox',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_preconditionHash',
                type: 'bytes32',
            },
            {
                name: '_afterHash',
                type: 'bytes32',
            },
            {
                name: '_numSteps',
                type: 'uint32',
            },
            {
                name: '_messages',
                type: 'bytes',
            },
            {
                name: '_logsAccHash',
                type: 'bytes32',
            },
        ],
        name: 'confirmDisputableAsserted',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_beforeHash',
                type: 'bytes32',
            },
            {
                name: '_beforeInbox',
                type: 'bytes32',
            },
            {
                name: '_afterHash',
                type: 'bytes32',
            },
            {
                name: '_messagesAccHash',
                type: 'bytes32',
            },
            {
                name: '_logsAccHash',
                type: 'bytes32',
            },
            {
                name: '_numSteps',
                type: 'uint32',
            },
            {
                name: '_timeBounds',
                type: 'uint64[2]',
            },
        ],
        name: 'pendingDisputableAssert',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: '_vmState',
                type: 'bytes32',
            },
            {
                name: '_gracePeriod',
                type: 'uint32',
            },
            {
                name: '_maxExecutionSteps',
                type: 'uint32',
            },
            {
                name: '_escrowRequired',
                type: 'uint128',
            },
            {
                name: '_owner',
                type: 'address',
            },
            {
                name: '_challengeLauncherAddress',
                type: 'address',
            },
            {
                name: '_globalInboxAddress',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'fields',
                type: 'bytes32[5]',
            },
            {
                indexed: false,
                name: 'asserter',
                type: 'address',
            },
            {
                indexed: false,
                name: 'timeBounds',
                type: 'uint64[2]',
            },
            {
                indexed: false,
                name: 'numSteps',
                type: 'uint32',
            },
            {
                indexed: false,
                name: 'deadline',
                type: 'uint64',
            },
        ],
        name: 'PendingDisputableAssertion',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'newState',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'logsAccHash',
                type: 'bytes32',
            },
        ],
        name: 'ConfirmedDisputableAssertion',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'challengeContract',
                type: 'address',
            },
            {
                indexed: false,
                name: 'challenger',
                type: 'address',
            },
        ],
        name: 'ChallengeLaunched',
        type: 'event',
    },
    {
        constant: false,
        inputs: [],
        name: 'increaseDeposit',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
];
