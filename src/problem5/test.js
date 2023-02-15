const { ethers } = require("ethers");

const ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";   // your contract address
const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const ADDRESS = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x2170ed0880ac9a755fd29b2688956bd959f933f8",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);