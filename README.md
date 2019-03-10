# CoffeeChain (Authentic Coffee )

This is an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system.


## Libraries Used

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

## Atchitecture

### Activity Diagram
![Activity Diagram](uml/CoffeeChain-activity-diagram.png)
### Sequence Diagram
![Sequence Diagram](uml/CoffeeChainSequenceDiagram.png)
### State Diagram
![State Diagram](uml/CoffeeChain-State-Diagram.png)
### Class Diagram
![Class Diagram](uml/CoffeChain-ClassDiagram.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've installed following packages.
1. Install ganache-cli
`npm install -g ganache-cli`
2. Install Truffle v4
`npm install -g truffle@4`
3. Enable MetaMask extension in browser

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/faisal-hameed/AuthenticSupplyChain.git
```

Change directory to ```coffeechain``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd coffeechain
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```


# VisualStudio Code setting
1. Install solium linter
`npm install -g ethlint` 
and configure settings.json in VSCode editor
```
{
    "files.autoSave": "off",
    "solidity.compileUsingRemoteVersion" : "v0.4.24+commit.e67f0147",
    "solidity.enabledAsYouTypeCompilationErrorCheck": true,
    "solidity.validationDelay": 1500,
    "solidity.linter": "solium",
    "solidity.soliumRules": {
        "quotes": ["error", "double"],
        "indentation": ["error", 2]
    }
}
```

# UI
The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)