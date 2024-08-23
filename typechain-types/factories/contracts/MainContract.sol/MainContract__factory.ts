/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MainContract,
  MainContractInterface,
} from "../../../contracts/MainContract.sol/MainContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenErc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenErc721",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "NFTReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "NFTId",
        type: "uint256",
      },
    ],
    name: "depositNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "depositOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "APRIncrement",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accumulatedInterest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastInterestTime",
            type: "uint256",
          },
        ],
        internalType: "struct MainContract.Deposit",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "depositOfNFT",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAPR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getEventInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.DepositTokenInfo",
            name: "depositToken",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "NFTId",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.DepositNFTInfo",
            name: "depositNFT",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.WithdrawERC20Info",
            name: "withdrawERC20",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "NFTId",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.WithdrawNFTInfo",
            name: "withdrawNFT",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.ClaimRewardInfo",
            name: "claimReward",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.TransferERC20Info",
            name: "transferERC20",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "NFTId",
                type: "uint256",
              },
            ],
            internalType: "struct MainContract.TransferNFTInfo",
            name: "transferNFT",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "successful",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct MainContract.EventInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "APR",
        type: "uint8",
      },
    ],
    name: "setAPR",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "updateInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "withdrawNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346100ea57601f6114bd38819003918201601f19168301916001600160401b038311848410176100ef5780849260409485528339810103126100ea57610052602061004b83610105565b9201610105565b906000546040519260018060a01b0391338382167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36001600160a81b0319163360ff60a01b191617600160a31b1760ff60a81b1916600160a91b176000908155600155600280546001600160a01b03199081169484169490941790556003805490931691161790556113a3908161011a8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100ea5756fe6080604081815260048036101561001557600080fd5b600092833560e01c908163023245d714610e5757508063150b7a0214610d785780631d645b1214610b8c57806323e3fbd514610ada5780632e1a7d4d146109a05780636215be77146106f8578063715018a6146106b05780637b3c5da7146105db5780638da5cb5b146105b3578063b88a802f14610443578063bd8d99f414610402578063c89d5b8b146103db578063d7f3387c1461032e578063e91a7ca61461017d5763f2fde38b146100c857600080fd5b34610179576020366003190112610179576100e1611020565b906100ea611071565b6001600160a01b039182169283156101275750506000548260018060a01b03198216176000551660008051602061134e833981519152600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b509034610179576020908160031936011261032a576001805485526006835281852060035491939092918535906001600160a01b031687813b156103275780836101e0938a838951809781958294632142170760e11b845230903390850161123d565b03925af1918261030f575b50506102465761020f92519161020083611195565b3383528201526002830161125f565b6010810160ff19815416905560114291015580549181830180931161023357505580f35b634e487b7160e01b845260119052602483fd5b33875260058252828720805490600160401b8210156102fc578261027783610292938a6102d898979601815561128a565b90919082549060031b600019811b9283911b16911916179055565b60ff885460a81c169333895287835280892060ff6102b48254978289166110ec565b1660ff1980971617905551916102c983611195565b3383528201526002840161125f565b82601083019182541617905560114291015580549181830180931161023357505580f35b634e487b7160e01b895260418852602489fd5b6103189061116c565b6103235787386101eb565b8780fd5b80fd5b8380fd5b82843461032757602090816003193601126103275782906001600160a01b03610355611020565b16815260058352818120908251808584549182815201908194845286842090845b8181106103c7575050508161038c910382611202565b83519485948186019282875251809352850193925b8281106103b057505050500390f35b8351855286955093810193928101926001016103a1565b825484529288019260019283019201610376565b5050346103fe57816003193601126103fe5760ff6020925460a01c169051908152f35b5080fd5b8382346103fe5760203660031901126103fe573560ff811681036103fe57610428611071565b815460ff60a01b191660a09190911b60ff60a01b1617815580f35b50903461017957826003193601126101795733835260209082825260028185200191825491821561055c5760019384548752600683526104a9838389209560018060a01b0360025416898b875180968195829463a9059cbb60e01b8452339084016112b8565b03925af1908161052f575b506104db579061020f9291549051916104cc83611195565b3383528201526008830161125f565b9392916104f39185979697549051916104cc83611195565b601081018260ff1982541617905560114291015580549080820180921161051c57839450555580f35b634e487b7160e01b845260118552602484fd5b61054e90853d8711610555575b6105468183611202565b810190611225565b50386104b4565b503d61053c565b5162461bcd60e51b815280850191909152602b60248201527f416363756d756c6174656420696e746572657374206d7573742062652067726560448201526a061746572207468616e20360ac1b6064820152608490fd5b5050346103fe57816003193601126103fe57905490516001600160a01b039091168152602090f35b509190346103fe5760203660031901126103fe576001600160a01b036105ff611020565b168252826020528120600181015480610616578280f35b8382019182549061062782426110c9565b9262015180938481101561063e575b505050508280f35b600261016d61067989606461067360ff98978961066c8d6106849a049b8c965460a01c16828c5416906110ec565b1690611100565b04611100565b049201918254611113565b905582810292818404149015171561051c576106a292939450611113565b905580388080808080610636565b83346103275780600319360112610327576106c9611071565b600080546001600160a01b0319811682556001600160a01b031660008051602061134e8339815191528280a380f35b509034610179576020908160031936011261032a5782359061071b821515611120565b6001928354865260068152818620928660018060a01b0361075b848483600254168b868a518096819582946323b872dd60e01b845230903390850161123d565b03925af19081610983575b506107ae57505061078892519161077c83611195565b3383528201528261125f565b601081018260ff1982541617905560114291015580549181830180931161023357505580f35b33825287845286858320016107c4848254611113565b9055338252878452426003868420015580600354169085516370a0823160e01b8152338a8201528581602481865afa90811561097957849161094c575b50159081610890575b5061083f575b50506107889233885286835286818920015415610833575b519161077c83611195565b4287828a200155610828565b803b156103fe5781809160248751809481936335313c2160e11b83528d33908401525af180156108865715610810576108779061116c565b610882578638610810565b8680fd5b85513d84823e3d90fd5b91925050338952878452878488878c200154926002541687519283809263313ce56760e01b82525afa8015610942578a90610906575b60ff915016604d81116108f357600a0a90620f424091808302928304036108f3579089929110153861080a565b634e487b7160e01b8a526011895260248afd5b508481813d831161093b575b61091c8183611202565b81010312610937575160ff811681036109375760ff906108c6565b8980fd5b503d610912565b86513d8c823e3d90fd5b90508581813d8311610972575b6109638183611202565b8101031261032a575138610801565b503d610959565b87513d86823e3d90fd5b61099990863d8811610555576105468183611202565b5038610766565b509034610179576020908160031936011261032a5782359133855283815281852090600382015460058101809111610ac5574210610a89576109e3841515611120565b60019384548752600682528387209385610a20848460018060a01b03600254168b8d875180968195829463a9059cbb60e01b8452339084016112b8565b03925af19081610a6c575b50610a4f575061020f93505191610a4183611195565b33835282015284830161125f565b6107889401610a5f8382546110c9565b90555191610a4183611195565b610a8290863d8811610555576105468183611202565b5038610a2b565b8460649184519162461bcd60e51b83528201526017602482015276151bdad95b9cc8185c99481cdd1a5b1b081b1bd8dad959604a1b6044820152fd5b601186634e487b7160e01b6000525260246000fd5b509034610179576020366003190112610179578060a093610af9611020565b8160808451610b07816111cc565b82815282602082015282868201528260608201520152600180871b031681528360205220815191610b37836111cc565b60ff825416938484526001830154602085019081526080600285015492848701938452600386015495606088019687520154950194855282519586525160208601525190840152516060830152516080820152f35b50913461032757602091826003193601126103fe5780805192610bae846111b0565b8151610bb981611195565b60008082528682015284528151610bcf81611195565b600080825286820152848601528151610be781611195565b600080825286820152848301528151610bff81611195565b60008082528682015260608501528151610c1881611195565b6000808252868201526080850152610c2e6112d3565b60a0850152610c3b6112d3565b60c08501528060e0850152806101008095015285358152600685522091815194610c64866111b0565b610c6d846112f2565b8652610c7b600285016112f2565b9486019485528301610c8c906112f2565b85830190815290610c9f600685016112f2565b60608701908152610cb2600886016112f2565b6080880190815290610cc6600a8701611319565b60a0890190815293610cda600d8801611319565b9560c08a01968752601088015460ff169760e08b0198151589526011015498858b01998a528151809b5190610d0e91611036565b51908a01610d1b91611036565b5160808901610d2991611036565b5160c08801610d3791611036565b51908601610d4491611036565b516101408501610d539161104e565b516101a08401610d629161104e565b5115156102008301525161022082015261024090f35b503461017957608036600319011261017957610d92611020565b6001600160a01b039160243583811690819003610e52576001600160401b0391606435919083831161032357366023840112156103235782013592831161088257366024848401011161088257916020968160247f1d823cdc8f0514a95b53538df2d2f3deaf98d1c534c6e750daa593173c27f8f097969460a0968a519889971687528b8701526044358a870152608060608701528260808701520185850137828201840152601f01601f19168101030190a151630a85bd0160e11b8152f35b600080fd5b919290503461032a5760208060031936011261101c578335923386526005825282862080549182861015610fe75750610e90858261128a565b90549060031b1c9460001992838101908111610fd45790610277610eb7610ec5938561128a565b90549060031b1c918461128a565b80548015610fc157820191610eda838361128a565b909182549160031b1b191690555560019283548652600682528286209260018060a01b036003541687813b156103275783610f2e9289838651809681958294632142170760e11b845233903090850161123d565b03925af19081610fae575b50610f5e579061020f92915191610f4f83611195565b3383528201526006830161125f565b60ff875460a81c163388528684528188209081549060ff82160360ff81116108f35760ff1660ff1991821617909155905190926102d89290610f9f83611195565b3383528201526006840161125f565b610fba9098919861116c565b9638610f39565b634e487b7160e01b885260318752602488fd5b634e487b7160e01b895260118852602489fd5b62461bcd60e51b81528681018490526011602482015270092dcecc2d8d2c8409c8ca840d2dcc8caf607b1b6044820152606490fd5b8480fd5b600435906001600160a01b0382168203610e5257565b80516001600160a01b03168252602090810151910152565b6040809160018060a01b0380825116855260208201511660208501520151910152565b6000546001600160a01b0316330361108557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b919082039182116110d657565b634e487b7160e01b600052601160045260246000fd5b9060ff8091169116019060ff82116110d657565b818102929181159184041417156110d657565b919082018092116110d657565b1561112757565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b6001600160401b03811161117f57604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761117f57604052565b61012081019081106001600160401b0382111761117f57604052565b60a081019081106001600160401b0382111761117f57604052565b606081019081106001600160401b0382111761117f57604052565b601f909101601f19168101906001600160401b0382119082101761117f57604052565b90816020910312610e5257518015158103610e525790565b6001600160a01b03918216815291166020820152604081019190915260600190565b815181546001600160a01b0319166001600160a01b0391909116178155602090910151600190910155565b80548210156112a25760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b039091168152602081019190915260400190565b604051906112e0826111e7565b60006040838281528260208201520152565b906040516112ff81611195565b82546001600160a01b031681526001909201546020830152565b90604051611326816111e7565b82546001600160a01b0390811682526001840154166020820152600290920154604083015256fe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220fec62414588a6344bc692d59966218fdbeabe7b064ef12d6eb19a6a48b247a7864736f6c63430008110033";

type MainContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MainContract__factory extends ContractFactory {
  constructor(...args: MainContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    tokenErc20: PromiseOrValue<string>,
    tokenErc721: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MainContract> {
    return super.deploy(
      tokenErc20,
      tokenErc721,
      overrides || {}
    ) as Promise<MainContract>;
  }
  override getDeployTransaction(
    tokenErc20: PromiseOrValue<string>,
    tokenErc721: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenErc20, tokenErc721, overrides || {});
  }
  override attach(address: string): MainContract {
    return super.attach(address) as MainContract;
  }
  override connect(signer: Signer): MainContract__factory {
    return super.connect(signer) as MainContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainContractInterface {
    return new utils.Interface(_abi) as MainContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainContract {
    return new Contract(address, _abi, signerOrProvider) as MainContract;
  }
}
