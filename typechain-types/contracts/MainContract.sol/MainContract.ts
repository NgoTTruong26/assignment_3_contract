/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace MainContract {
  export type DepositStruct = {
    APRIncrement: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    accumulatedInterest: PromiseOrValue<BigNumberish>;
    depositTime: PromiseOrValue<BigNumberish>;
    lastInterestTime: PromiseOrValue<BigNumberish>;
  };

  export type DepositStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    APRIncrement: number;
    amount: BigNumber;
    accumulatedInterest: BigNumber;
    depositTime: BigNumber;
    lastInterestTime: BigNumber;
  };

  export type DepositTokenInfoStruct = {
    user: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type DepositTokenInfoStructOutput = [string, BigNumber] & {
    user: string;
    amount: BigNumber;
  };

  export type DepositNFTInfoStruct = {
    user: PromiseOrValue<string>;
    NFTId: PromiseOrValue<BigNumberish>;
  };

  export type DepositNFTInfoStructOutput = [string, BigNumber] & {
    user: string;
    NFTId: BigNumber;
  };

  export type WithdrawERC20InfoStruct = {
    user: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type WithdrawERC20InfoStructOutput = [string, BigNumber] & {
    user: string;
    amount: BigNumber;
  };

  export type WithdrawNFTInfoStruct = {
    user: PromiseOrValue<string>;
    NFTId: PromiseOrValue<BigNumberish>;
  };

  export type WithdrawNFTInfoStructOutput = [string, BigNumber] & {
    user: string;
    NFTId: BigNumber;
  };

  export type ClaimRewardInfoStruct = {
    user: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type ClaimRewardInfoStructOutput = [string, BigNumber] & {
    user: string;
    amount: BigNumber;
  };

  export type TransferERC20InfoStruct = {
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type TransferERC20InfoStructOutput = [string, string, BigNumber] & {
    from: string;
    to: string;
    amount: BigNumber;
  };

  export type TransferNFTInfoStruct = {
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    NFTId: PromiseOrValue<BigNumberish>;
  };

  export type TransferNFTInfoStructOutput = [string, string, BigNumber] & {
    from: string;
    to: string;
    NFTId: BigNumber;
  };

  export type EventInfoStruct = {
    depositToken: MainContract.DepositTokenInfoStruct;
    depositNFT: MainContract.DepositNFTInfoStruct;
    withdrawERC20: MainContract.WithdrawERC20InfoStruct;
    withdrawNFT: MainContract.WithdrawNFTInfoStruct;
    claimReward: MainContract.ClaimRewardInfoStruct;
    transferERC20: MainContract.TransferERC20InfoStruct;
    transferNFT: MainContract.TransferNFTInfoStruct;
    successful: PromiseOrValue<boolean>;
    timestamp: PromiseOrValue<BigNumberish>;
  };

  export type EventInfoStructOutput = [
    MainContract.DepositTokenInfoStructOutput,
    MainContract.DepositNFTInfoStructOutput,
    MainContract.WithdrawERC20InfoStructOutput,
    MainContract.WithdrawNFTInfoStructOutput,
    MainContract.ClaimRewardInfoStructOutput,
    MainContract.TransferERC20InfoStructOutput,
    MainContract.TransferNFTInfoStructOutput,
    boolean,
    BigNumber
  ] & {
    depositToken: MainContract.DepositTokenInfoStructOutput;
    depositNFT: MainContract.DepositNFTInfoStructOutput;
    withdrawERC20: MainContract.WithdrawERC20InfoStructOutput;
    withdrawNFT: MainContract.WithdrawNFTInfoStructOutput;
    claimReward: MainContract.ClaimRewardInfoStructOutput;
    transferERC20: MainContract.TransferERC20InfoStructOutput;
    transferNFT: MainContract.TransferNFTInfoStructOutput;
    successful: boolean;
    timestamp: BigNumber;
  };
}

export interface MainContractInterface extends utils.Interface {
  functions: {
    "claimReward()": FunctionFragment;
    "depositNFT(uint256)": FunctionFragment;
    "depositOf(address)": FunctionFragment;
    "depositOfNFT(address)": FunctionFragment;
    "depositToken(uint256)": FunctionFragment;
    "getAPR()": FunctionFragment;
    "getEventInfo(uint256)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAPR(uint8)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateInterest(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawNFT(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimReward"
      | "depositNFT"
      | "depositOf"
      | "depositOfNFT"
      | "depositToken"
      | "getAPR"
      | "getEventInfo"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "setAPR"
      | "transferOwnership"
      | "updateInterest"
      | "withdraw"
      | "withdrawNFT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositOfNFT",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getAPR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getEventInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAPR",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInterest",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositOfNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAPR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEventInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAPR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNFT",
    data: BytesLike
  ): Result;

  events: {
    "NFTReceived(address,address,uint256,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NFTReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NFTReceivedEventObject {
  operator: string;
  from: string;
  tokenId: BigNumber;
  data: string;
}
export type NFTReceivedEvent = TypedEvent<
  [string, string, BigNumber, string],
  NFTReceivedEventObject
>;

export type NFTReceivedEventFilter = TypedEventFilter<NFTReceivedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MainContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MainContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositNFT(
      NFTId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[MainContract.DepositStructOutput]>;

    depositOfNFT(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    depositToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAPR(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEventInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[MainContract.EventInfoStructOutput]>;

    onERC721Received(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAPR(
      APR: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInterest(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawNFT(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claimReward(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositNFT(
    NFTId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<MainContract.DepositStructOutput>;

  depositOfNFT(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  depositToken(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAPR(overrides?: CallOverrides): Promise<BigNumber>;

  getEventInfo(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MainContract.EventInfoStructOutput>;

  onERC721Received(
    operator: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAPR(
    APR: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInterest(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawNFT(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimReward(overrides?: CallOverrides): Promise<void>;

    depositNFT(
      NFTId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<MainContract.DepositStructOutput>;

    depositOfNFT(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    depositToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAPR(overrides?: CallOverrides): Promise<BigNumber>;

    getEventInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MainContract.EventInfoStructOutput>;

    onERC721Received(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAPR(
      APR: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateInterest(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawNFT(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NFTReceived(address,address,uint256,bytes)"(
      operator?: null,
      from?: null,
      tokenId?: null,
      data?: null
    ): NFTReceivedEventFilter;
    NFTReceived(
      operator?: null,
      from?: null,
      tokenId?: null,
      data?: null
    ): NFTReceivedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    claimReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositNFT(
      NFTId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositOfNFT(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAPR(overrides?: CallOverrides): Promise<BigNumber>;

    getEventInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAPR(
      APR: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInterest(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawNFT(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositNFT(
      NFTId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositOfNFT(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAPR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEventInfo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAPR(
      APR: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInterest(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawNFT(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
