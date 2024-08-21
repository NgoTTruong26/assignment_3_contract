// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ITokenERC20 is IERC20 {
    function mint(address to, uint256 amount) external;
    function decimals() external view returns (uint8);
}

contract MainContract is ERC721, Ownable {

    string private _name;
    string private _symbol;

    uint32 private constant _LOCK_TIME = 5 minutes;
    
    uint public constant _THRESHOLD = 1000000;
    uint private _NFTIdCounter;
    uint private _APR = 8;
    uint private _BaseAPRIncrement = 2;
    uint private _APRIncrement = 0;

    ITokenERC20 private _tokenErc20; 

    struct NFTInfo {
        string name;
        string symbol;
        uint256 balance;
    }
    
    struct Deposit {
        uint amount;
        uint accumulatedInterest;
        uint depositTime;
        uint lastInterestTime;
    }

    mapping (address => Deposit) userDeposits;
    mapping (address => uint[]) userDepositNFTs;

    event Deposited(address indexed user, uint amount);
    event NFTDeposited(address indexed user, uint indexed NFTId);
    event Withdrew(address indexed user, uint amount);
    event NFTWithdrew(address indexed user, uint indexed NFTId);
    event Claimed(address indexed user, uint reward);


    constructor(address tokenErc20, string memory name, string memory symbol) ERC721(_name, _symbol) {
        _tokenErc20 = ITokenERC20(tokenErc20);
        _name = name;
        _symbol = symbol;
    }

    modifier updateInterest(address user) {
        Deposit storage userDeposit = userDeposits[user];
        
        if (userDeposit.amount > 0) {
            uint timeSinceLastInterest = block.timestamp - userDeposit.lastInterestTime;

            if (timeSinceLastInterest >= 1 days) {
                uint daysElapsed = timeSinceLastInterest / 1 days;

                uint dailyInterest = (userDeposit.amount * (_APR + _APRIncrement) / 100) * daysElapsed / 365;

                userDeposit.accumulatedInterest += dailyInterest;

                userDeposit.lastInterestTime += daysElapsed * 1 days;
            }
        }

        _;
    }

    function depositToken(uint amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(_tokenErc20.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        userDeposits[msg.sender].amount += amount;
        userDeposits[msg.sender].depositTime = block.timestamp;

        if (balanceOf(msg.sender)==0 && userDeposits[msg.sender].amount >= _THRESHOLD * 10 ** _tokenErc20.decimals()) {
            _mintNFT(msg.sender);
        }

        if (userDeposits[msg.sender].lastInterestTime == 0) {
            userDeposits[msg.sender].lastInterestTime = block.timestamp;
        }

        emit Deposited(msg.sender, amount);
    }

    function depositNFT(uint NFTId) external {
        safeTransferFrom(msg.sender, address(this), NFTId);
        
        userDepositNFTs[msg.sender].push(NFTId);
        _APRIncreasePerNFT(userDepositNFTs[msg.sender].length);

        emit NFTDeposited(msg.sender, NFTId);
    }

    function withdraw(uint amount) external {
        Deposit storage userDeposit = userDeposits[msg.sender];
        require(block.timestamp >= userDeposit.depositTime + _LOCK_TIME, "Tokens are still locked");
        require(amount > 0, "Amount must be greater than 0");
        require(_tokenErc20.transfer(msg.sender, amount), "Transfer failed");

        userDeposit.amount -= amount;

        emit Withdrew(msg.sender, amount);
    }

    function withdrawNFT(uint index) external {
        require(index < userDepositNFTs[msg.sender].length, "Invalid NFT index");

        uint256 NFTId = userDepositNFTs[msg.sender][index];

        userDepositNFTs[msg.sender][index] = userDepositNFTs[msg.sender][userDepositNFTs[msg.sender].length - 1];
        userDepositNFTs[msg.sender].pop();

        safeTransferFrom(address(this), msg.sender, NFTId);

        _APRIncreasePerNFT(userDepositNFTs[msg.sender].length);

        emit NFTWithdrew(msg.sender, NFTId);
    }


    function claimReward() external {
        Deposit storage userDeposit = userDeposits[msg.sender];
        require(userDeposit.accumulatedInterest > 0, "Accumulated interest must be greater than 0");
        require(_tokenErc20.transfer(msg.sender, userDeposit.accumulatedInterest), "Transfer failed");

        userDeposit.accumulatedInterest = 0;

        emit Claimed(msg.sender, userDeposit.accumulatedInterest);
    }

    function _mintNFT(address to) internal {
        _NFTIdCounter += 1;
        _safeMint(to, _NFTIdCounter);
        emit NFTDeposited(to, _NFTIdCounter);
    }

    function _APRIncreasePerNFT(uint NFTCount) private {
        _APRIncrement = _BaseAPRIncrement * NFTCount;
    }

    function setAPR(uint APR) external onlyOwner() {
        _APR = APR;
    }

    function depositOf(address account) external view returns (Deposit memory) {
        return userDeposits[account];
    }

    function getBalance(address owner) external view returns (NFTInfo memory) {
        return NFTInfo({
            name: _name,
            symbol: _symbol,
            balance: balanceOf(owner)
        });
    }

    function getAPRIncreasePerNFT() external view returns (uint) {
        return _APRIncrement;
    }
    
    function getAPR() external view returns (uint) {
        return _APR;
    }
}
