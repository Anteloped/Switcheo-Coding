const { ethers } = require("ethers");
const { expect } = require("chai");

console.log("Running tests for Lock.sol...");


describe("TokenBalanceChecker", function() {
  it("should return an array of balances", async function() {
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

    try {
      const balances = await contract.getBalances(ADDRESS, TOKENS);
      //convert balances to number
      console.log(balances);
      // const tokenBalance = ethers.utils.formatUnits(balances, 18);
      // console.log(tokenBalance);
      
    } catch (error) {
      // Print a more informative error message if the contract reverts
      console.log(`Error: ${error.message}`);
    }
  });
});

// const { ethers } = require("ethers");

// const ADDR = "0xc868053e0a7A7D0e2c0489378d0983567eC6b291"; 
//      // your contract address
// const ABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "wallet",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address[]",
// 				"name": "tokens",
// 				"type": "address[]"
// 			}
// 		],
// 		"name": "getBalances",
// 		"outputs": [
// 			{
// 				"internalType": "address[]",
// 				"name": "tokened",
// 				"type": "address[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "balances",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]    // your contract ABI

// const ADDRESS = "0x936b14f9eF89f263E775241C394583D5d419c2D2"; // some wallet address with token balance
// const TOKENS = [    // token contract addresses
//       "0x7641d1CBE8aD00b90dc8C4cB48300Dfbd48b548E",
//        "0xba39F9ba6b6dac4A83c9B761CDF4DD5eCdD799ab"
//     ];

// // you can use your own RPC provider url (no need to deploy to mainnet)
// const provider = ethers.providers.getDefaultProvider("goerli", ["Wwgxrc-XsMqmjPG92tpL-pqFx7agP3aS"]);

// const test = async () => {
// 	const contract = new ethers.Contract(ADDR, ABI, provider);

//   const balances = await contract.getBalances(ADDRESS, TOKENS);
	
// 	return balances;
// };

// test().then(console.log);