const { ethers } = require("ethers");

const ADDR = "0xf0046e53d11c6e7a6badb4c9e849fcc26509dc16"; 
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
]  // your contract ABI

const ADDRESS = "0x936b14f9eF89f263E775241C394583D5d419c2D2"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
  "0x9db4cd952C8F4eBEa1748503dc875B3982CCE312",
  "0x49868fB282e4A93489527BDD515ECcCB358a13D9",
  "0xFfb99f4A02712C909d8F7cC44e67C87Ea1E71E83"
  ];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("goerli", ["Wwgxrc-XsMqmjPG92tpL-pqFx7agP3aS"]);

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

	const balances = await contract.getBalances(ADDRESS, TOKENS);

	console.log(balances);
	
	return balances;
};

test().then(console.log);