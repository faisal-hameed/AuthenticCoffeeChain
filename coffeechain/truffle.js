const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
    ,
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://rinkeby.infura.io/v3/f342ad1be78745b0aae9ac0afb51c5d7")
      },
      network_id: '4',
      //gas: 4500000,
      //gasPrice: 10000000000
      from: "0x018C2daBef4904ECbd7118350A0c54DbeaE3549A"
    }
  }
  ,
  compilers: {
    solc: {
      version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};