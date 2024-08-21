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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "NFTId",
        type: "uint256",
      },
    ],
    name: "NFTDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "NFTId",
        type: "uint256",
      },
    ],
    name: "NFTWithdrew",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrew",
    type: "event",
  },
  {
    inputs: [],
    name: "_THRESHOLD",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "getAPRIncreasePerNFT",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct MainContract.NFTInfo",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "APR",
        type: "uint256",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60808060405234620006bc576200245a8038038091620000208285620006c1565b83398101606082820312620006bc5781516001600160a01b03929083811690819003620006bc576020828101516001600160401b039390848111620006bc57856200006d918301620006e5565b946040820151858111620006bc57620000879201620006e5565b906040519260009560079182549786620000a18a6200075c565b9182825260019a878c821691826000146200069d57505060011462000659575b620000cf92500387620006c1565b60405198600099898160089c8d5489620000e9826200075c565b8085529482169182156200063a575050600114620005f6575b6200011092500382620006c1565b87518981116200036f5780620001286000546200075c565b99601f9a8b8111620005a0575b5088908b83116001146200052e5760009262000522575b5050600019600383901b1c1916908b1b176000555b8051908982116200036f5781906200017a8c546200075c565b8a8111620004cc575b5087908a83116001146200045b576000926200044f575b5050600019600383901b1c1916908a1b1789555b600680546001600160a01b03198082163390811790935592167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a389600a556002600b556000600c55600d541617600d558051908682116200036f5781906200021b84546200075c565b878111620003f9575b508490878311600114620003915760009262000385575b5050600019600383901b1c191690871b1790555b81519384116200036f576200026586546200075c565b83811162000324575b5080928411600114620002b95750928293918392600094620002ad575b50501b916000199060031b1c19161790555b604051611cc090816200079a8239f35b0151925038806200028b565b919083601f1981168760005284600020946000905b88838310620003095750505010620002ef575b505050811b0190556200029d565b015160001960f88460031b161c19169055388080620002e1565b858701518855909601959485019487935090810190620002ce565b86600052816000208480870160051c82019284881062000365575b0160051c019086905b828110620003585750506200026e565b6000815501869062000348565b925081926200033f565b634e487b7160e01b600052604160045260246000fd5b0151905038806200023b565b90899350601f1983169185600052866000209260005b88828210620003e25750508411620003c8575b505050811b0190556200024f565b015160001960f88460031b161c19169055388080620003ba565b8385015186558d97909501949384019301620003a7565b90915083600052846000208780850160051c82019287861062000445575b918b91869594930160051c01915b8281106200043557505062000224565b600081558594508b910162000425565b9250819262000417565b0151905038806200019a565b908c9350601f1983169184600052896000209260005b8b828210620004ac575050841162000492575b505050811b018955620001ae565b015160001960f88460031b161c1916905538808062000484565b91929395968291958786015181550195019301908e959493929162000471565b9091508b600052876000208a80850160051c8201928a861062000518575b918e91869594930160051c01915b8281106200050857505062000183565b600081558594508e9101620004f8565b92508192620004ea565b0151905038806200014c565b908d9350601f19831691600080528a6000209260005b8c82821062000580575050841162000566575b505050811b0160005562000161565b015160001960f88460031b161c1916905538808062000557565b91929395968291958786015181550195019301908f959493929162000544565b90915060008052886000208b80850160051c8201928b8610620005ec575b918f91869594930160051c01915b828110620005dc57505062000135565b600081558594508f9101620005cc565b92508192620005be565b50508b6000528187806000208d6000915b8583106200062057505062000110935082010162000102565b80919294505483858801015201910188908d859362000607565b60ff1916848201526200011094151560051b8401019150620001029050565b5050836000528685806000208b6000915b85831062000683575050620000cf9350820101620000c1565b80919294505483858d01015201910186908b8a936200066a565b60ff191684820152620000cf94151560051b8401019150620000c19050565b600080fd5b601f909101601f19168101906001600160401b038211908210176200036f57604052565b919080601f84011215620006bc578251906001600160401b0382116200036f576040519160209162000721601f8301601f1916840185620006c1565b818452828287010111620006bc5760005b8181106200074857508260009394955001015290565b858101830151848201840152820162000732565b90600182811c921680156200078e575b60208310146200077857565b634e487b7160e01b600052602260045260246000fd5b91607f16916200076c56fe60806040908082526004918236101561001757600080fd5b600091823560e01c90816301ffc9a7146112f657508063023245d71461119a57806306fdde03146110ed578063081812fc146110cd578063095ea7b314610f5f5780631bec0ad314610f4157806323b872dd14610f1c57806323e3fbd514610e825780632e1a7d4d14610d4957806342842e0e14610d315780635bb9226714610d145780636215be7714610a275780636352211e146109f657806370a08231146109ca578063715018a61461097f578063854303cf1461095d5780638da5cb5b1461093557806395d89b411461083d578063a22cb46514610771578063b88a802f1461063d578063b88d4fde14610586578063c87b56dd1461052e578063c89d5b8b14610510578063e91a7ca614610464578063e985e9c514610417578063f2fde38b146103635763f8b2cb4f1461014e57600080fd5b3461035f576020908160031936011261035b5761018a61016c6113a2565b8483805161017981611439565b606081526060878201520152611505565b9181519361019785611439565b8251958196600754600198818a1c918a81168015610351575b878410811461033e57838552849291889082156103215750506001146102e3575b6101dd9250038261146f565b86528351968260085480831c938382169081156102d9575b87861082146102c65750848b529081156102a4575060011461026d575b5050509161024f869261022c60609861026296038561146f565b808701938452828701958652825197889782895251918801526080870190611362565b915190601f198684030190860152611362565b905160608301520390f35b9250600883528383205b828410610291575050508501810161024f8261022c610212565b8054898501860152928401928101610277565b60ff19168a870152505050151560051b86018201905061024f8261022c610212565b634e487b7160e01b845260229052602483fd5b94607f16946101f5565b50506007845281858086208b87915b8583106103085750506101dd93508201016101d1565b80919294505483858801015201910186908b85936102f2565b60ff1916848201526101dd94151560051b84010191506101d19050565b634e487b7160e01b875260228652602487fd5b92607f16926101b0565b8280fd5b5080fd5b50823461035b57602036600319011261035b5761037e6113a2565b906103876114ad565b6001600160a01b039182169283156103c5575050600680546001600160a01b03198116841790915516600080516020611c2b8339815191528380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b503461035f578060031936011261035f5760ff816020936104366113a2565b61043e6113bd565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b503461035f57602036600319011261035f57823590610484823033611672565b338352600f602052808320805490600160401b8210156104fd57836104b6836104d19360016104e49796018155611b76565b90919082549060031b600019811b9283911b16911916179055565b338452600f602052832054600b54611b4d565b600c5533600080516020611c6b8339815191528380a380f35b634e487b7160e01b855260418652602485fd5b503461035f578160031936011261035f57602090600a549051908152f35b503461035f57602036600319011261035f5761055561055061058294356118e7565b61157c565b81815161056181611454565b5280519161056e83611454565b825251918291602083526020830190611362565b0390f35b5082903461035b57608036600319011261035b576105a26113a2565b906105ab6113bd565b6064359360443591906001600160401b038611610639573660238701121561063957850135936105e66105dd86611492565b9451948561146f565b8484528636602487890101116106365760208661062e9760246106339a01838901378601015261061e6106198433611723565b611610565b6106298383836117eb565b611a20565b6116ff565b80f35b80fd5b8680fd5b503461035f578160031936011261035f57338252602090600e8252600181842001805494851561071a5790838596610698969360018060a01b03600d541690858751809a8195829463a9059cbb60e01b845233908401611ba4565b03925af1948515610710577fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a94956106d79184916106e3575b50611b0f565b5551918383523392a280f35b6107039150873d8911610709575b6106fb818361146f565b810190611af7565b386106d1565b503d6106f1565b83513d84823e3d90fd5b825162461bcd60e51b8152908101849052602b60248201527f416363756d756c6174656420696e746572657374206d7573742062652067726560448201526a061746572207468616e20360ac1b6064820152608490fd5b5082903461035b578060031936011261035b5761078c6113a2565b9060243591821515809303610839576001600160a01b0316923384146107fb5750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152fd5b8480fd5b5090346106365780600319360112610636578151918160019283549384811c9181861695861561092b575b6020968785108114610918578899509688969785829a5291826000146108f15750506001146108b4575b50505061058292916108a591038561146f565b51928284938452830190611362565b91908693508083528383205b8284106108d957505050820101816108a5610582610892565b8054848a0186015288955087949093019281016108c0565b60ff19168782015293151560051b860190930193508492506108a591506105829050610892565b634e487b7160e01b835260228a52602483fd5b92607f1692610868565b503461035f578160031936011261035f5760065490516001600160a01b039091168152602090f35b82843461035f57602036600319011261035f576109786114ad565b35600a5580f35b82346106365780600319360112610636576109986114ad565b600680546001600160a01b0319811690915581906001600160a01b0316600080516020611c2b8339815191528280a380f35b503461035f57602036600319011261035f576020906109ef6109ea6113a2565b611505565b9051908152f35b5090346106365760203660031901126106365750610a16602092356115c3565b90516001600160a01b039091168152f35b5082903461035b5760209081600319360112610d1057823592610a4b841515611aab565b60018060a01b039081600d54169183516323b872dd60e01b8152338382015285816064818b602498308a8401528c60448401525af1908115610cd75790610a98918991610cf35750611b0f565b338752600e8552838720805490878201809211610ce15755338752600e85524260028589200155610ac833611505565b159081610c2d575b50610b14575b505090600080516020611c0b83398151915291338552600e82526003818620015415610b07575b519283523392a280f35b4260038287200155610afd565b6009549060018201809211610c1b5781600955835192610b3384611454565b8784523315610bda57505061062e600080516020611c0b83398151915294939282610b69610b63610bbc956118e7565b15611bbf565b610b75610b63826118e7565b33808a5260038752858a2080546001019055818a5260028752858a2080546001600160a01b0319168217905581908a600080516020611c4b8339815191528180a433611904565b60095433600080516020611c6b8339815191528780a3909185610ad6565b845162461bcd60e51b815291820186905281018590527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606490fd5b634e487b7160e01b8752601190528186fd5b9050338752600e855281858589205492600d541686519283809263313ce56760e01b82525afa8015610cd7578890610c9b575b60ff915016604d8111610c8957600a0a90620f42409180830292830403610c8957101587610ad0565b634e487b7160e01b8852601183528388fd5b508581813d8311610cd0575b610cb1818361146f565b81010312610ccc575160ff81168103610ccc5760ff90610c60565b8780fd5b503d610ca7565b85513d8a823e3d90fd5b634e487b7160e01b8952601184528489fd5b610d0a9150873d8911610709576106fb818361146f565b896106d1565b8380fd5b503461035f578160031936011261035f5760209051620f42408152f35b823461063657610633610d43366113d3565b91611672565b503461035f5760208060031936011261035b57833591338452600e8252808420600281015461012c8101809111610e11574210610e4557610d8b841515611aab565b610db8838560018060a01b03600d54168989875180968195829463a9059cbb60e01b845233908401611ba4565b03925af1908115610e3b5790610dd4918791610e245750611b0f565b805490848203918211610e11577fb244b9a17ad633c6e83b7983ee04320484956a68ddbe96a0b70dfca1cf19d7239495965055519283523392a280f35b634e487b7160e01b865260118752602486fd5b6107039150853d8711610709576106fb818361146f565b83513d88823e3d90fd5b815162461bcd60e51b81528087018490526017602482015276151bdad95b9cc8185c99481cdd1a5b1b081b1bd8dad959604a1b6044820152606490fd5b503461035f57602036600319011261035f5780608092610ea06113a2565b8160608451610eae81611408565b8281528260208201528286820152015260018060a01b03168152600e6020522090805190610edb82611408565b825492838352600181015460208401908152606060036002840154938587019485520154940193845282519485525160208501525190830152516060820152f35b823461063657610633610f2e366113d3565b91610f3c6106198433611723565b6117eb565b503461035f578160031936011261035f57602090600c549051908152f35b50823461035b578160031936011261035b57610f796113a2565b6024359290916001600160a01b0391908280610f94876115c3565b1694169380851461108057803314908115611061575b5015610ff957848652602052842080546001600160a01b03191683179055610fd1836115c3565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600560205281862033875260205260ff828720541687610faa565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b5090346106365760203660031901126106365750610a16602092356115e9565b50903461063657806003193601126106365781519181825492600184811c91818616958615611190575b6020968785108114610918578899509688969785829a5291826000146108f15750506001146111535750505061058292916108a591038561146f565b91908693508280528383205b82841061117857505050820101816108a5610582610892565b8054848a01860152889550879490930192810161115f565b92607f1692611117565b503461035f576020908160031936011261035b57833591338452600f90818152828520548410156112c0573385528181526111d784848720611b76565b90549060031b1c933386528282528386209084872054600019928382019182116112ad5761120c61122293926104b692611b76565b90549060031b1c91338a52868652878a20611b76565b3386528282528386208054801561129a5761126f969798508201916112478383611b76565b909182549160031b1b1916905555611260853330611672565b33865252832054600b54611b4d565b600c55337f97796debe953e6f9a6426076616f02b5316ef5ac439732a57e248313869e591c8380a380f35b634e487b7160e01b885260318952602488fd5b634e487b7160e01b895260118a52602489fd5b8560649184519162461bcd60e51b83528201526011602482015270092dcecc2d8d2c8409c8ca840d2dcc8caf607b1b6044820152fd5b8390853461035b57602036600319011261035b573563ffffffff60e01b811680910361035b57602092506380ac58cd60e01b8114908115611351575b8115611340575b5015158152f35b6301ffc9a760e01b14905083611339565b635b5e139f60e01b81149150611332565b919082519283825260005b84811061138e575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161136d565b600435906001600160a01b03821682036113b857565b600080fd5b602435906001600160a01b03821682036113b857565b60609060031901126113b8576001600160a01b039060043582811681036113b8579160243590811681036113b8579060443590565b608081019081106001600160401b0382111761142357604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761142357604052565b602081019081106001600160401b0382111761142357604052565b601f909101601f19168101906001600160401b0382119082101761142357604052565b6001600160401b03811161142357601f01601f191660200190565b6006546001600160a01b031633036114c157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160a01b0316801561152557600052600360205260406000205490565b60405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608490fd5b1561158357565b60405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606490fd5b6000908152600260205260409020546001600160a01b03166115e681151561157c565b90565b6115f5610550826118e7565b6000908152600460205260409020546001600160a01b031690565b1561161757565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b604051909260208201926001600160401b03841183851017611423576116aa9461062e946040526000845261061e6106198433611723565b565b60809060208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60608201520190565b1561170657565b60405162461bcd60e51b81528061171f600482016116ac565b0390fd5b906001600160a01b038080611737846115c3565b1693169183831493841561176a575b508315611754575b50505090565b611760919293506115e9565b161438808061174e565b909350600052600560205260406000208260005260205260ff604060002054169238611746565b1561179857565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b90611813916117f9846115c3565b6001600160a01b0393918416928492909183168414611791565b16918215611896578161183091611829866115c3565b1614611791565b600080516020611c4b833981519152600084815260046020526040812060018060a01b03199081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b6000908152600260205260409020546001600160a01b0316151590565b9192600092909190803b15611a1657611952946040518092630a85bd0160e11b9485835233600484015287602484015260448301526080606483015281878160209a8b966084830190611362565b03926001600160a01b03165af18491816119d6575b506119c5575050503d6000146119bd573d61198181611492565b9061198f604051928361146f565b81528091833d92013e5b805191826119ba5760405162461bcd60e51b81528061171f600482016116ac565b01fd5b506060611999565b6001600160e01b0319161492509050565b9091508581813d8311611a0f575b6119ee818361146f565b8101031261083957516001600160e01b031981168103610839579038611967565b503d6119e4565b5050915050600190565b9293600093909291803b15611aa057948491611a7a9660405180948193630a85bd0160e11b9788845233600485015260018060a01b0380921660248501526044840152608060648401528260209b8c976084830190611362565b0393165af18491816119d657506119c5575050503d6000146119bd573d61198181611492565b505050915050600190565b15611ab257565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b908160209103126113b8575180151581036113b85790565b15611b1657565b60405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606490fd5b81810292918115918404141715611b6057565b634e487b7160e01b600052601160045260246000fd5b8054821015611b8e5760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b039091168152602081019190915260400190565b15611bc657565b60405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606490fdfe2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c48be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef1c4b8380f61aea3d5d98cbadaf2e6b2e4f3d8ca8c0fce1290b26ac267158745fa2646970667358221220785a559c61a735ce910653abfd6225c10d8f8d029199e5ef7b834df86d357f0064736f6c63430008110033";

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
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MainContract> {
    return super.deploy(
      tokenErc20,
      name,
      symbol,
      overrides || {}
    ) as Promise<MainContract>;
  }
  override getDeployTransaction(
    tokenErc20: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenErc20,
      name,
      symbol,
      overrides || {}
    );
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
