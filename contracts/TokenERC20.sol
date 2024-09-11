// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract TokenERC20 is ERC20, Ownable {
    uint32 private constant _MAX_FAUCET_AMOUNT = 1000000;

    uint private constant _MINTDEFAULT = 1000000000;

    mapping(address => uint) private _faucetBalances;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(address(this), _MINTDEFAULT * 10 ** decimals());
    }

    function faucet(uint amount) external {
        require(amount > 0, 'Amount must be greater than 0');
        require(
            amount <= 1000000 * 10 ** decimals(),
            'Amount must be less than 1.000.000'
        );

        uint currentBalance = _faucetBalances[msg.sender];

        require(
            currentBalance + amount <= _MAX_FAUCET_AMOUNT * 10 ** decimals(),
            'Faucet failed: user has already reached the maximum limit'
        );
        require(
            balanceOf(address(this)) >= amount,
            'Faucet failed: not enough tokens in the contract'
        );

        _transfer(address(this), msg.sender, amount);
        _faucetBalances[msg.sender] += amount;
    }

    function getFaucetBalance(address user) external view returns (uint) {
        return _faucetBalances[user];
    }

    function getContractBalance() external view returns (uint) {
        return balanceOf(address(this));
    }

    function decimals() public pure override returns (uint8) {
        return 18;
    }
}
