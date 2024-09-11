// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

import './TokenERC20.sol';
import './TokenERC721.sol';

contract MainContract is Ownable, IERC721Receiver {
    uint8 private _APR = 8;
    uint8 private _BaseAPRIncrement = 2;

    uint32 private constant _LOCK_TIME = 1 minutes;

    uint private constant _THRESHOLD = 1000000;
    uint private _EventCounter = 0;
    uint private _NFTIdCounter;

    TokenERC20 private _tokenErc20;
    TokenERC721 private _tokenErc721;

    address public deployer;

    struct Deposit {
        uint8 APRIncrement;
        uint amount;
        uint accumulatedInterest;
        uint lastInterestTime;
        uint depositTime;
        uint depositNFTTime;
        uint lockTime;
        bool isReceivedNFT;
    }

    mapping(address => Deposit) userDeposits;
    mapping(address => uint[]) userDepositNFTs;

    event FaucetERC20(address indexed from, address indexed to, uint amount);
    event MintNFT(address indexed from, address indexed to, uint indexed NFTId);
    event DepositToken(address indexed from, address indexed to, uint amount);
    event DepositNFT(
        address indexed from,
        address indexed to,
        uint indexed NFTId
    );
    event WithdrawERC20(address indexed from, address indexed to, uint amount);
    event WithdrawNFT(
        address indexed from,
        address indexed to,
        uint indexed NFTId
    );
    event ClaimReward(address indexed from, address indexed to, uint amount);
    event TransferERC20(address indexed from, address indexed to, uint amount);
    event TransferNFT(
        address indexed from,
        address indexed to,
        uint indexed NFTId
    );
    event NFTReceived(
        address indexed operator,
        address indexed from,
        uint indexed tokenId,
        bytes data
    );
    event SetAPR(address indexed from, uint8 APR);

    constructor(address tokenErc20, address tokenErc721) {
        deployer = msg.sender;
        _tokenErc20 = TokenERC20(tokenErc20);
        _tokenErc721 = TokenERC721(tokenErc721);
    }

    function onERC721Received(
        address operator,
        address from,
        uint tokenId,
        bytes calldata data
    ) external override returns (bytes4) {
        emit NFTReceived(operator, from, tokenId, data);

        return this.onERC721Received.selector;
    }

    function getAccumulatedInterest(address user) public view returns (uint) {
        Deposit storage userDeposit = userDeposits[user];
        uint extraInterest = getInterest(user);
        return userDeposit.accumulatedInterest + extraInterest;
    }

    function getInterest(address user) public view returns (uint) {
        Deposit memory userDeposit = userDeposits[user];

        if (userDeposit.amount > 0) {
            uint timeSinceLastInterest = block.timestamp -
                userDeposit.lastInterestTime;

            uint extraInterest = (userDeposit.amount *
                (_APR + userDeposit.APRIncrement) *
                timeSinceLastInterest) / (100 * 365 days);

            return extraInterest;
        }

        return 0;
    }

    function updateInterest(address user) public {
        Deposit storage userDeposit = userDeposits[user];

        uint extraInterest = getInterest(user);

        userDeposit.accumulatedInterest += extraInterest;
        userDeposit.lastInterestTime = block.timestamp;
    }

    function depositToken(uint amount) external {
        updateInterest(msg.sender);

        require(amount > 0, 'Amount must be greater than 0');
        require(
            _tokenErc20.allowance(msg.sender, address(this)) >= amount,
            'Insufficient allowance'
        );
        require(
            _tokenErc20.transferFrom(msg.sender, address(this), amount),
            'Transfer failed'
        );

        userDeposits[msg.sender].amount += amount;
        userDeposits[msg.sender].depositTime = block.timestamp;
        userDeposits[msg.sender].lockTime =
            userDeposits[msg.sender].depositTime +
            _LOCK_TIME;

        if (
            !userDeposits[msg.sender].isReceivedNFT &&
            userDeposits[msg.sender].amount >=
            _THRESHOLD * 10 ** _tokenErc20.decimals()
        ) {
            _tokenErc721.mint(msg.sender, _NFTIdCounter);
            userDeposits[msg.sender].isReceivedNFT = true;

            emit MintNFT(address(0), msg.sender, _NFTIdCounter);

            _NFTIdCounter += 1;
        }

        if (userDeposits[msg.sender].lastInterestTime == 0) {
            userDeposits[msg.sender].lastInterestTime = block.timestamp;
        }

        emit DepositToken(msg.sender, address(this), amount);
    }

    function depositNFT(uint[] calldata tokenIds) external {
        updateInterest(msg.sender);

        require(tokenIds.length > 0, 'Amount must be greater than 0');
        require(
            _tokenErc721.isApprovedForAll(msg.sender, address(this)),
            'Contract is not approved for all NFTs'
        );

        for (uint i = 0; i < tokenIds.length; i++) {
            uint tokenId = tokenIds[i];

            require(
                _tokenErc721.ownerOf(tokenId) == msg.sender,
                "You don't own this NFT"
            );
            _tokenErc721.safeTransferFrom(msg.sender, address(this), tokenId);
            userDepositNFTs[msg.sender].push(tokenId);
            userDeposits[msg.sender].APRIncrement += _BaseAPRIncrement;
            userDeposits[msg.sender].depositNFTTime = block.timestamp;

            emit DepositNFT(msg.sender, address(this), tokenId);
        }
    }

    function withdraw(uint amount) external {
        updateInterest(msg.sender);

        Deposit storage userDeposit = userDeposits[msg.sender];
        require(
            block.timestamp >= userDeposit.lockTime,
            'Tokens are still locked'
        );
        require(amount > 0, 'Amount must be greater than 0');
        require(
            userDeposits[msg.sender].amount >= amount,
            'Insufficient balance to withdraw'
        );
        require(_tokenErc20.transfer(msg.sender, amount), 'Tranfer failed');
        userDeposit.amount -= amount;

        emit WithdrawERC20(address(this), msg.sender, amount);
    }

    function _removeNFTFromUser(address user, uint tokenId) internal {
        uint[] storage NFTs = userDepositNFTs[user];
        for (uint i = 0; i < NFTs.length; i++) {
            if (NFTs[i] == tokenId) {
                NFTs[i] = NFTs[NFTs.length - 1];
                NFTs.pop();
                break;
            }
        }
    }

    function withdrawNFT(uint[] calldata tokenIds) external {
        updateInterest(msg.sender);

        require(
            userDepositNFTs[msg.sender].length > 0,
            "You don't have any NFTs"
        );
        require(tokenIds.length > 0, 'Amount must be greater than 0');
        require(
            tokenIds.length <= userDepositNFTs[msg.sender].length,
            'Invalid number of NFTs to withdraw'
        );

        for (uint i = 0; i < tokenIds.length; i++) {
            uint tokenId = tokenIds[i];
            _tokenErc721.safeTransferFrom(address(this), msg.sender, tokenId);

            _removeNFTFromUser(msg.sender, tokenId);
            userDeposits[msg.sender].APRIncrement -= _BaseAPRIncrement;

            emit WithdrawNFT(address(this), msg.sender, tokenId);
        }
    }

    function claimReward() external {
        updateInterest(msg.sender);

        Deposit storage userDeposit = userDeposits[msg.sender];
        require(
            userDeposit.accumulatedInterest > 0,
            'Accumulated interest must be greater than 0'
        );
        require(
            _tokenErc20.transfer(msg.sender, userDeposit.accumulatedInterest),
            'Transfer failed'
        );

        emit ClaimReward(
            address(this),
            msg.sender,
            userDeposit.accumulatedInterest
        );

        userDeposit.accumulatedInterest = 0;
    }

    function transferERC20(address to, uint amount) external {
        updateInterest(msg.sender);

        require(amount > 0, 'Amount must be greater than 0');
        require(
            _tokenErc20.transferFrom(msg.sender, to, amount),
            'Transfer failed'
        );

        emit TransferERC20(msg.sender, to, amount);
    }

    function transferNFT(address to, uint[] calldata tokenIds) external {
        updateInterest(msg.sender);

        require(tokenIds.length > 0, 'Amount must be greater than 0');
        require(
            _tokenErc721.isApprovedForAll(msg.sender, address(this)),
            'Contract is not approved for all NFTs'
        );

        for (uint i = 0; i < tokenIds.length; i++) {
            uint tokenId = tokenIds[i];

            require(
                _tokenErc721.ownerOf(tokenId) == msg.sender,
                "You don't own this NFT"
            );
            _tokenErc721.safeTransferFrom(msg.sender, to, tokenId);

            emit TransferNFT(msg.sender, to, tokenId);
        }
    }

    function setAPR(uint8 APR) external onlyOwner {
        _APR = APR;
        emit SetAPR(msg.sender, APR);
    }

    function getAPR() external view returns (uint) {
        return _APR;
    }

    function depositOf(address account) external view returns (Deposit memory) {
        return userDeposits[account];
    }

    function depositOfNFT(
        address account
    ) external view returns (uint[] memory) {
        return userDepositNFTs[account];
    }

    function getCurrentTime() external view returns (uint) {
        return block.timestamp;
    }

    function getDeployer() external view returns (address) {
        return deployer;
    }
}
