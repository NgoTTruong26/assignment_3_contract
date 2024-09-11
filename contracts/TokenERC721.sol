// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract TokenERC721 is ERC721, Ownable {
    mapping(address => uint256[]) private _ownedTokens;

    struct NFTInfo {
        string name;
        string symbol;
        uint256 balance;
    }

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}

    function mint(address to, uint NFTId) public {
        _safeMint(to, NFTId);
        _ownedTokens[to].push(NFTId);
    }

    function _removeTokenFromOwnerEnumeration(
        address from,
        uint256 NFTId
    ) private {
        uint256[] storage tokens = _ownedTokens[from];
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == NFTId) {
                tokens[i] = tokens[tokens.length - 1];
                tokens.pop();
                break;
            }
        }
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 NFTId
    ) public virtual override {
        safeTransferFrom(from, to, NFTId, '');
        _removeTokenFromOwnerEnumeration(from, NFTId);
        _ownedTokens[to].push(NFTId);
    }

    function getBalanceNFT(
        address owner
    ) external view returns (NFTInfo memory) {
        return
            NFTInfo({
                name: name(),
                symbol: symbol(),
                balance: balanceOf(owner)
            });
    }

    function getOwnedTokens(
        address owner
    ) external view returns (uint256[] memory) {
        return _ownedTokens[owner];
    }
}
