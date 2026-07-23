// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GMWithNFT is ERC721, Ownable {
    using Strings for uint256;

    uint256 public nextTokenId = 1;
    mapping(address => uint256) public gmCount;
    mapping(address => uint256) public lastGMTime;
    mapping(address => bool) public hasStarterBadge;
    mapping(address => bool) public hasLegendBadge;

    event GM(address indexed user, uint256 points);
    event Mint(address indexed to, uint256 tokenId);
    event BadgeMint(address indexed to, string badgeType, uint256 tokenId);

    constructor() ERC721("GM with NFT", "GMNFT") Ownable(msg.sender) {}

    function gm() external {
        require(block.timestamp >= lastGMTime[msg.sender] + 24 hours, "One GM per day");
        
        lastGMTime[msg.sender] = block.timestamp;
        gmCount[msg.sender]++;

        uint256 points = gmCount[msg.sender] * 50;
        emit GM(msg.sender, points);

        // Mint main NFT on first GM
        if (gmCount[msg.sender] == 1) {
            _safeMint(msg.sender, nextTokenId);
            emit Mint(msg.sender, nextTokenId);
            nextTokenId++;
        }

        // Badges
        if (gmCount[msg.sender] == 3 && !hasStarterBadge[msg.sender]) {
            hasStarterBadge[msg.sender] = true;
            _safeMint(msg.sender, nextTokenId);
            emit BadgeMint(msg.sender, "GM Starter Badge", nextTokenId);
            nextTokenId++;
        }

        if (gmCount[msg.sender] == 5 && !hasLegendBadge[msg.sender]) {
            hasLegendBadge[msg.sender] = true;
            _safeMint(msg.sender, nextTokenId);
            emit BadgeMint(msg.sender, "GM Legend Badge", nextTokenId);
            nextTokenId++;
        }
    }

    function tokenURI(uint256 tokenId) public pure override returns (string memory) {
        return string(abi.encodePacked(
            "https://gm-with-nft.example.com/metadata/", 
            tokenId.toString(), 
            ".json"
        ));
    }
}