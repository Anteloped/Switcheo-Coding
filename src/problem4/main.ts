// TODO: Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

// BSC Block Explorer: [https://bscscan.com/](https://bscscan.com/)

// $SWTH Token Contract: `0xc0ecb8499d8da2771abcbf4091db7f65158f1468`

// Addresses to look up: 

// Output: A list of addresses that hold the token, sorted by the number of tokens held in descending order.

const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/', { name: 'binance', chainId: 56 });

const swthTokenContract = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';

const addresses = ['0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392']

async function getHolders(swthTokenContract: string, addresses: string[]) {
    const abi = [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
        }
        ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const contract = new ethers.Contract(swthTokenContract, abi, provider);

    for (const address of addresses) {
        const balance = await contract.balanceOf(address);
        console.log(`Address: ${address} Quantity: ${balance}`);
    }
}

getHolders(swthTokenContract, addresses);