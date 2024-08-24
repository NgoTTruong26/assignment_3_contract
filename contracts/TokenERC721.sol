// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenERC721 is ERC721, Ownable {

    uint private _NFTIdCounter;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mint(address to) public {
        _safeMint(to, _NFTIdCounter);
        _NFTIdCounter += 1;
    }

}