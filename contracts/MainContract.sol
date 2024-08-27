// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ITokenERC20 is IERC20 {
    function mint(address to, uint amount) external;
    function decimals() external view returns (uint8);
}
interface ITokenERC721 is IERC721 {
    function mint(address to) external;
}

contract MainContract is Ownable, IERC721Receiver {

    uint8 private _APR = 8;
    uint8 private _BaseAPRIncrement = 2;

    uint32 private constant _LOCK_TIME = 5 seconds;
    
    uint private constant _THRESHOLD = 1000000;
    uint private _EventCounter = 0;

    ITokenERC20 private _tokenErc20; 
    ITokenERC721 private _tokenErc721;
    
    struct Deposit {
        uint8 APRIncrement;
        uint amount;
        uint accumulatedInterest;
        uint depositTime;
        uint lastInterestTime;
    }

    struct DepositTokenInfo {
        address user;        
        uint amount;      
    }
    struct DepositNFTInfo {
        address user;        
        uint NFTId;   
    }
    struct WithdrawERC20Info {
        address user;        
        uint amount;    
    }
    struct WithdrawNFTInfo {
        address user;        
        uint NFTId;           
    }

    struct ClaimRewardInfo {
        address user;        
        uint amount;      
    }
    struct TransferERC20Info {
        address from;        
        address to;          
        uint amount;      
    }
    struct TransferNFTInfo {
        address from;        
        address to;         
        uint NFTId;     
    }

    struct EventInfo {

        DepositTokenInfo depositToken;
        DepositNFTInfo depositNFT;
        WithdrawERC20Info withdrawERC20;
        WithdrawNFTInfo withdrawNFT;
        ClaimRewardInfo claimReward;
        TransferERC20Info transferERC20;
        TransferNFTInfo transferNFT;

        bool successful;
        uint timestamp;
    }

    mapping (address => Deposit) userDeposits;
    mapping (address => uint[]) userDepositNFTs;
    mapping (uint => EventInfo) eventsInfo;

    event NFTReceived(address operator, address from, uint tokenId, bytes data);


    constructor(address tokenErc20, address tokenErc721) {
        _tokenErc20 = ITokenERC20(tokenErc20);
        _tokenErc721 = ITokenERC721(tokenErc721);
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

    function updateInterest(address user) public {
        Deposit storage userDeposit = userDeposits[user];
        
        if (userDeposit.amount > 0) {
            uint timeSinceLastInterest = block.timestamp - userDeposit.lastInterestTime;

            if (timeSinceLastInterest >= 1 minutes) {
                uint daysElapsed = timeSinceLastInterest / 1 minutes;

                uint dailyInterest = (userDeposit.amount * (_APR + userDeposit.APRIncrement) / 100) * daysElapsed / 5;

                userDeposit.accumulatedInterest += dailyInterest;

                userDeposit.lastInterestTime += daysElapsed * 1 minutes;
            }
        }
    }

    function depositToken(uint amount) external {
        updateInterest(msg.sender);

        require(amount > 0, "Amount must be greater than 0");
        require(_tokenErc20.allowance(msg.sender, address(this)) >= amount, "Insufficient allowance");


        
        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc20.transferFrom(msg.sender, address(this), amount) {

            userDeposits[msg.sender].amount += amount;
            userDeposits[msg.sender].depositTime = block.timestamp;

            if (_tokenErc721.balanceOf(msg.sender)==0 && userDeposits[msg.sender].amount >= _THRESHOLD * 10 ** _tokenErc20.decimals()) {
                _tokenErc721.mint(msg.sender);
            }

            if (userDeposits[msg.sender].lastInterestTime == 0) {
                userDeposits[msg.sender].lastInterestTime = block.timestamp;
            }
            
            eventInfo.depositToken = DepositTokenInfo(msg.sender, amount);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
            
        } catch  {
            eventInfo.depositToken = DepositTokenInfo(msg.sender, amount);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        }

    }

    function depositNFT(uint NFTId) external {
        updateInterest(msg.sender);
        
        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc721.safeTransferFrom(msg.sender, address(this), NFTId) {

            uint[] storage userDepositNFT = userDepositNFTs[msg.sender];
        
            userDepositNFT.push(NFTId);
            userDeposits[msg.sender].APRIncrement += _BaseAPRIncrement;

            eventInfo.depositNFT = DepositNFTInfo(msg.sender, NFTId);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        } catch  {
            eventInfo.depositNFT = DepositNFTInfo(msg.sender, NFTId);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        } 
    }

    function withdraw(uint amount) external {
        updateInterest(msg.sender);
        
        Deposit storage userDeposit = userDeposits[msg.sender];
        require(block.timestamp >= userDeposit.depositTime + _LOCK_TIME, "Tokens are still locked");
        require(amount > 0, "Amount must be greater than 0");
        require(userDeposits[msg.sender].amount >= amount, "Amount must be greater than 0");

        
        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc20.transfer(msg.sender, amount) {
            userDeposit.amount -= amount;

            eventInfo.withdrawERC20 = WithdrawERC20Info(msg.sender, amount);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        } catch  {
            eventInfo.withdrawERC20 = WithdrawERC20Info(msg.sender, amount);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        }
    }

    function withdrawNFT(uint index) external {
        updateInterest(msg.sender);

        uint[] storage userDepositNFT = userDepositNFTs[msg.sender];

        require(index < userDepositNFT.length, "Invalid NFT index");

        uint NFTId = userDepositNFT[index];

        userDepositNFT[index] = userDepositNFT[userDepositNFT.length - 1];
        userDepositNFT.pop();

        
        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc721.safeTransferFrom(address(this), msg.sender, NFTId) {
            userDeposits[msg.sender].APRIncrement -= _BaseAPRIncrement;
            
            eventInfo.withdrawNFT = WithdrawNFTInfo(msg.sender, NFTId);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        } catch  {
            eventInfo.withdrawNFT = WithdrawNFTInfo(msg.sender, NFTId);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        }
        
    }

    function claimReward() external {
        updateInterest(msg.sender);

        Deposit storage userDeposit = userDeposits[msg.sender];
        require(userDeposit.accumulatedInterest > 0, "Accumulated interest must be greater than 0");

        
        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc20.transfer(msg.sender, userDeposit.accumulatedInterest) {

            eventInfo.claimReward = ClaimRewardInfo(msg.sender, userDeposit.accumulatedInterest);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;

            userDeposit.accumulatedInterest = 0;
        } catch  {
            eventInfo.claimReward = ClaimRewardInfo(msg.sender, userDeposit.accumulatedInterest);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        }

       
    }

    function transferERC20(address to, uint amount) external {
        updateInterest(msg.sender);

        require(amount > 0, "Amount must be greater than 0");

        
        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc20.transferFrom(msg.sender, to, amount) {
            eventInfo.transferERC20 = TransferERC20Info(msg.sender, to, amount);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        } catch  {
            eventInfo.transferERC20 = TransferERC20Info(msg.sender, to, amount);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        }
    }

    function transferNFT(address to, uint NFTId) external {
        updateInterest(msg.sender);

        EventInfo storage eventInfo = eventsInfo[_EventCounter];

        try _tokenErc721.safeTransferFrom(msg.sender, to, NFTId) {
            eventInfo.transferNFT = TransferNFTInfo(msg.sender, to, NFTId);
            eventInfo.successful = true;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        } catch  {
            eventInfo.transferNFT = TransferNFTInfo(msg.sender, to, NFTId);
            eventInfo.successful = false;
            eventInfo.timestamp = block.timestamp;
            _EventCounter += 1;
        }
    }

    function setAPR(uint8 APR) external onlyOwner() {
        _APR = APR;
    }

    function getAPR() external view returns (uint) {
        return _APR;
    }

    function getEventInfo(uint index) external view returns (EventInfo memory) {
        return eventsInfo[index];
    }

    function depositOf(address account) external view returns (Deposit memory) {
        return userDeposits[account];
    }

    function depositOfNFT(address account) external view returns (uint[] memory) {
        return userDepositNFTs[account];
    }
    

}
