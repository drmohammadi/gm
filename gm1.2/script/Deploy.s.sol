// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../contracts/GMWithNFT.sol";

contract DeployGMWithNFT is Script {
    function run() external {
        vm.startBroadcast();
        
        GMWithNFT nft = new GMWithNFT();
        console.log("GMWithNFT deployed at:", address(nft));

        vm.stopBroadcast();
    }
}