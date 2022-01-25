var StakedPool = artifacts.require("./subpool/YoyoStakingPool.sol");
var larkToken = "0x4cE8485608F78921Fbc0F96e63c0566B1b176Db0";
var larkPool = "0xD48cA0B1a9C143c8570e34F5C0dE5a9E29ffB3d3";
var stakedPoolToken = "0xf665ce1f5C4eABDF65772Dfee30c0dd668983Bcd";
var genesisBlock = 24109066;


module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(StakedPool, larkToken, larkPool, stakedPoolToken, genesisBlock);
};