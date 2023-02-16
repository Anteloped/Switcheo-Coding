const { ethers } = require("ethers");
const { expect } = require("chai");

console.log("Running tests for Lock.sol...");


describe("TokenBalanceChecker", function() {
  it("should return an array of tokens and the respective balance", async function() {
    const ADDR = "0x68c924E44CCAE9fAC2Aa6F948eeC79eEe694af61"; 
     // your contract address
    const ABI = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "tokens",
            "type": "address[]"
          }
        ],
        "name": "getBalances",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              }
            ],
            "internalType": "struct TokenBalanceChecker.TokenBalance[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]    // your contract ABI

    const ADDRESS = "0xf0046e53d11c6e7a6badb4c9e849fcc26509dc16"; // wallet address with token balance
    const TOKENS = [    // token contract addresses
      "0x9db4cd952C8F4eBEa1748503dc875B3982CCE312",
      "0x49868fB282e4A93489527BDD515ECcCB358a13D9",
      "0xFfb99f4A02712C909d8F7cC44e67C87Ea1E71E83"
    ];

    const provider = ethers.providers.getDefaultProvider("goerli", ["Wwgxrc-XsMqmjPG92tpL-pqFx7agP3aS"]); 
    const contract = new ethers.Contract(ADDR, ABI, provider);
    const balances = await contract.getBalances(ADDRESS, TOKENS);
      //convert balances to number
    console.log(balances);
      // const tokenBalance = ethers.utils.formatUnits(balances, 18);
      // console.log(tokenBalance);
    expect(balances).to.be.an("array");
    expect(balances[0]).to.be.an("Array");
    expect(balances[0][0]).to.be.a("string");
    // expect(balances[0][1]).to.be.bignumber;
  });
});

