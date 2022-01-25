var LarkPool = artifacts.require("./LarkPool.sol");
var larkToken = "0xaA61b68301278Da4e001d2cF7F8b2202aed6347c";
var genesisBlock = 24172984;


module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(LarkPool, larkToken, genesisBlock);
};