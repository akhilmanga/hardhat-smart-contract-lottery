const { ethers } = require("hardhat");

const networkConfig = {
    1115111: {
        name: "sepolia",
        vrfCoordinatorV2: "0x8103b0a8a00be2ddc778e6e7eaa21791cd364625",
        entranceFee: ethers.utils.parseEther(),
        gasLane: "",
        subscriptionId: "1666",
        callbackGasLimit: "50000",
        interval: "30"
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "",
        subscriptionId: "1666",
        callbackGasLimit: "50000",
        interval: "30"
    },
}

module.exports = {
    networkConfig,
    developmentChains,
}