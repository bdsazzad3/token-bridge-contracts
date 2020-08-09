/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers'
import { Listener, Provider } from 'ethers/providers'
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils'
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from '.'

interface GlobalInboxInterface extends Interface {
  functions: {
    deployL2ContractPair: TypedFunctionDescription<{
      encode([chain, maxGas, gasPriceBid, payment, contractData]: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string
    }>

    depositERC20Message: TypedFunctionDescription<{
      encode([chain, erc20, to, value]: [
        string,
        string,
        string,
        BigNumberish
      ]): string
    }>

    depositERC721Message: TypedFunctionDescription<{
      encode([chain, erc721, to, id]: [
        string,
        string,
        string,
        BigNumberish
      ]): string
    }>

    depositEthMessage: TypedFunctionDescription<{
      encode([chain, to]: [string, string]): string
    }>

    getERC20Balance: TypedFunctionDescription<{
      encode([_tokenContract, _owner]: [string, string]): string
    }>

    getERC721Tokens: TypedFunctionDescription<{
      encode([_erc721, _owner]: [string, string]): string
    }>

    getEthBalance: TypedFunctionDescription<{
      encode([_owner]: [string]): string
    }>

    getInbox: TypedFunctionDescription<{ encode([account]: [string]): string }>

    getPaymentOwner: TypedFunctionDescription<{
      encode([originalOwner, nodeHash, messageIndex]: [
        string,
        Arrayish,
        BigNumberish
      ]): string
    }>

    hasERC721: TypedFunctionDescription<{
      encode([_erc721, _owner, _tokenId]: [
        string,
        string,
        BigNumberish
      ]): string
    }>

    isPairedContract: TypedFunctionDescription<{
      encode([_tokenContract, _chain]: [string, string]): string
    }>

    ownedERC20s: TypedFunctionDescription<{
      encode([_owner]: [string]): string
    }>

    ownedERC721s: TypedFunctionDescription<{
      encode([_owner]: [string]): string
    }>

    sendInitializationMessage: TypedFunctionDescription<{
      encode([messageData]: [Arrayish]): string
    }>

    sendL2Message: TypedFunctionDescription<{
      encode([chain, messageData]: [string, Arrayish]): string
    }>

    sendL2MessageFromOrigin: TypedFunctionDescription<{
      encode([chain, messageData]: [string, Arrayish]): string
    }>

    sendMessages: TypedFunctionDescription<{
      encode([messages, messageCounts, nodeHashes]: [
        Arrayish,
        BigNumberish[],
        Arrayish[]
      ]): string
    }>

    transferPayment: TypedFunctionDescription<{
      encode([originalOwner, newOwner, nodeHash, messageIndex]: [
        string,
        string,
        Arrayish,
        BigNumberish
      ]): string
    }>

    withdrawERC20: TypedFunctionDescription<{
      encode([_tokenContract]: [string]): string
    }>

    withdrawERC721: TypedFunctionDescription<{
      encode([_erc721, _tokenId]: [string, BigNumberish]): string
    }>

    withdrawEth: TypedFunctionDescription<{ encode([]: []): string }>
  }

  events: {
    BuddyContractDeployed: TypedEventDescription<{
      encodeTopics([sender, data]: [string | null, null]): string[]
    }>

    BuddyContractPair: TypedEventDescription<{
      encodeTopics([sender, data]: [string | null, null]): string[]
    }>

    MessageDelivered: TypedEventDescription<{
      encodeTopics([chain, kind, sender, inboxSeqNum, data]: [
        string | null,
        BigNumberish | null,
        string | null,
        null,
        null
      ]): string[]
    }>

    MessageDeliveredFromOrigin: TypedEventDescription<{
      encodeTopics([chain, kind, sender, inboxSeqNum]: [
        string | null,
        BigNumberish | null,
        string | null,
        null
      ]): string[]
    }>

    PaymentTransfer: TypedEventDescription<{
      encodeTopics([
        nodeHash,
        messageIndex,
        originalOwner,
        prevOwner,
        newOwner,
      ]: [null, null, null, null, null]): string[]
    }>
  }
}

export class GlobalInbox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): GlobalInbox
  attach(addressOrName: string): GlobalInbox
  deployed(): Promise<GlobalInbox>

  on(event: EventFilter | string, listener: Listener): GlobalInbox
  once(event: EventFilter | string, listener: Listener): GlobalInbox
  addListener(eventName: EventFilter | string, listener: Listener): GlobalInbox
  removeAllListeners(eventName: EventFilter | string): GlobalInbox
  removeListener(eventName: any, listener: Listener): GlobalInbox

  interface: GlobalInboxInterface

  functions: {
    deployL2ContractPair(
      chain: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      payment: BigNumberish,
      contractData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    depositERC20Message(
      chain: string,
      erc20: string,
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    depositERC721Message(
      chain: string,
      erc721: string,
      to: string,
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    depositEthMessage(
      chain: string,
      to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    getERC20Balance(_tokenContract: string, _owner: string): Promise<BigNumber>

    getERC721Tokens(_erc721: string, _owner: string): Promise<BigNumber[]>

    getEthBalance(_owner: string): Promise<BigNumber>

    getInbox(
      account: string
    ): Promise<{
      0: string
      1: BigNumber
    }>

    getPaymentOwner(
      originalOwner: string,
      nodeHash: Arrayish,
      messageIndex: BigNumberish
    ): Promise<string>

    hasERC721(
      _erc721: string,
      _owner: string,
      _tokenId: BigNumberish
    ): Promise<boolean>

    isPairedContract(_tokenContract: string, _chain: string): Promise<boolean>

    ownedERC20s(_owner: string): Promise<string[]>

    ownedERC721s(_owner: string): Promise<string[]>

    sendInitializationMessage(
      messageData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    sendL2Message(
      chain: string,
      messageData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    sendL2MessageFromOrigin(
      chain: string,
      messageData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    sendMessages(
      messages: Arrayish,
      messageCounts: BigNumberish[],
      nodeHashes: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    transferPayment(
      originalOwner: string,
      newOwner: string,
      nodeHash: Arrayish,
      messageIndex: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawERC20(
      _tokenContract: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawERC721(
      _erc721: string,
      _tokenId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawEth(overrides?: TransactionOverrides): Promise<ContractTransaction>
  }

  deployL2ContractPair(
    chain: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    payment: BigNumberish,
    contractData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  depositERC20Message(
    chain: string,
    erc20: string,
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  depositERC721Message(
    chain: string,
    erc721: string,
    to: string,
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  depositEthMessage(
    chain: string,
    to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  getERC20Balance(_tokenContract: string, _owner: string): Promise<BigNumber>

  getERC721Tokens(_erc721: string, _owner: string): Promise<BigNumber[]>

  getEthBalance(_owner: string): Promise<BigNumber>

  getInbox(
    account: string
  ): Promise<{
    0: string
    1: BigNumber
  }>

  getPaymentOwner(
    originalOwner: string,
    nodeHash: Arrayish,
    messageIndex: BigNumberish
  ): Promise<string>

  hasERC721(
    _erc721: string,
    _owner: string,
    _tokenId: BigNumberish
  ): Promise<boolean>

  isPairedContract(_tokenContract: string, _chain: string): Promise<boolean>

  ownedERC20s(_owner: string): Promise<string[]>

  ownedERC721s(_owner: string): Promise<string[]>

  sendInitializationMessage(
    messageData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  sendL2Message(
    chain: string,
    messageData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  sendL2MessageFromOrigin(
    chain: string,
    messageData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  sendMessages(
    messages: Arrayish,
    messageCounts: BigNumberish[],
    nodeHashes: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  transferPayment(
    originalOwner: string,
    newOwner: string,
    nodeHash: Arrayish,
    messageIndex: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawERC20(
    _tokenContract: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawERC721(
    _erc721: string,
    _tokenId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawEth(overrides?: TransactionOverrides): Promise<ContractTransaction>

  filters: {
    BuddyContractDeployed(sender: string | null, data: null): EventFilter

    BuddyContractPair(sender: string | null, data: null): EventFilter

    MessageDelivered(
      chain: string | null,
      kind: BigNumberish | null,
      sender: string | null,
      inboxSeqNum: null,
      data: null
    ): EventFilter

    MessageDeliveredFromOrigin(
      chain: string | null,
      kind: BigNumberish | null,
      sender: string | null,
      inboxSeqNum: null
    ): EventFilter

    PaymentTransfer(
      nodeHash: null,
      messageIndex: null,
      originalOwner: null,
      prevOwner: null,
      newOwner: null
    ): EventFilter
  }

  estimate: {
    deployL2ContractPair(
      chain: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      payment: BigNumberish,
      contractData: Arrayish
    ): Promise<BigNumber>

    depositERC20Message(
      chain: string,
      erc20: string,
      to: string,
      value: BigNumberish
    ): Promise<BigNumber>

    depositERC721Message(
      chain: string,
      erc721: string,
      to: string,
      id: BigNumberish
    ): Promise<BigNumber>

    depositEthMessage(chain: string, to: string): Promise<BigNumber>

    getERC20Balance(_tokenContract: string, _owner: string): Promise<BigNumber>

    getERC721Tokens(_erc721: string, _owner: string): Promise<BigNumber>

    getEthBalance(_owner: string): Promise<BigNumber>

    getInbox(account: string): Promise<BigNumber>

    getPaymentOwner(
      originalOwner: string,
      nodeHash: Arrayish,
      messageIndex: BigNumberish
    ): Promise<BigNumber>

    hasERC721(
      _erc721: string,
      _owner: string,
      _tokenId: BigNumberish
    ): Promise<BigNumber>

    isPairedContract(_tokenContract: string, _chain: string): Promise<BigNumber>

    ownedERC20s(_owner: string): Promise<BigNumber>

    ownedERC721s(_owner: string): Promise<BigNumber>

    sendInitializationMessage(messageData: Arrayish): Promise<BigNumber>

    sendL2Message(chain: string, messageData: Arrayish): Promise<BigNumber>

    sendL2MessageFromOrigin(
      chain: string,
      messageData: Arrayish
    ): Promise<BigNumber>

    sendMessages(
      messages: Arrayish,
      messageCounts: BigNumberish[],
      nodeHashes: Arrayish[]
    ): Promise<BigNumber>

    transferPayment(
      originalOwner: string,
      newOwner: string,
      nodeHash: Arrayish,
      messageIndex: BigNumberish
    ): Promise<BigNumber>

    withdrawERC20(_tokenContract: string): Promise<BigNumber>

    withdrawERC721(_erc721: string, _tokenId: BigNumberish): Promise<BigNumber>

    withdrawEth(): Promise<BigNumber>
  }
}
