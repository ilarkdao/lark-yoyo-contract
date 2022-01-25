var HDWalletProvider = require("@truffle/hdwallet-provider");

var key = "5ddcxxx";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      // from: "0x8219b1bec565xxx",
      // gas: 2000000,
      // network_id: 987
      network_id: "*"
    },

    ropsten: {
        provider: new HDWalletProvider(key, "wss://ropsten.infura.io/ws/v3/cxxx"),
        network_id: 3,
        networkCheckTimeout: 10000000,
        gasPrice: 30000000000,
    },
    
    mainnet: {
        provider: new HDWalletProvider(key, "wss://mainnet.infura.io/ws/v3/c9xxx"),
        network_id: 1,
        networkCheckTimeout: 100000000,
        gasPrice: 55000000000,
    },

    polygon: {
      provider: () => new HDWalletProvider(key, `https://polygon-rpc.com`),
      // provider: () => new HDWalletProvider(key, `https://matic-mainnet-full-rpc.bwarelabs.com`), 
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true, 
      networkCheckTimeout: 10000000,
      gasPrice: 350000000000
    },

    mumbai: {
      provider: () => new HDWalletProvider(key, `https://matic-mumbai.chainstacklabs.com`), 
      // provider: () => new HDWalletProvider(key, `https://rpc-mumbai.matic.today`),  
      // provider: () => new HDWalletProvider(key, "https://rpc-mumbai.maticvigil.com"),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 10000000,
      gasPrice: 30000000000
    },

    
  },

  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
