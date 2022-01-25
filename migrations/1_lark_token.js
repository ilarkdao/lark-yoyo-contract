var LarkToken = artifacts.require("./LarkToken.sol");


module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(LarkToken);
};