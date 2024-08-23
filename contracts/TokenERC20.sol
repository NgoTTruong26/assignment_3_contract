// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenERC20 is ERC20, Ownable {

    uint private _MINTDEFAULT = 1000000000;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        mint(msg.sender, _MINTDEFAULT * 10 ** decimals());
    }

    function mint(address to, uint amount) public onlyOwner() {
        _mint(to, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 18;
    }
}