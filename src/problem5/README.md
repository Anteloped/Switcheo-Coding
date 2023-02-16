# getBalances

Deployed Contract using hardhat on the Goerli testnet, using the alchemy API, run the following functions to deploy and test if the Contract is working

```
npm i package.json
npx hardhat run scripts/deploy.js --network goerli
```

# Test

Run 

```
npx hardhat test
```
to perform the tests

Hardcoded test address on the Goerli testnet
Contract ADD = 0x68c924E44CCAE9fAC2Aa6F948eeC79eEe694af61
Wallet ADD = 0xf0046e53d11c6e7a6badb4c9e849fcc26509dc16
Tokens ADD to check = [
    "0x9db4cd952C8F4eBEa1748503dc875B3982CCE312",
    "0x49868fB282e4A93489527BDD515ECcCB358a13D9",
    "0xFfb99f4A02712C909d8F7cC44e67C87Ea1E71E83"
    ]

Expected Result in the 
```
[
    [token1,result1],
    [token2,result2],
    . . .
]
```
format


The expected result from the above addresses and tokens as documented below. 
```
[
  [
    '0x9db4cd952C8F4eBEa1748503dc875B3982CCE312',
    BigNumber { _hex: '0x1bc16d674ec80000', _isBigNumber: true },
    token: '0x9db4cd952C8F4eBEa1748503dc875B3982CCE312',
    balance: BigNumber { _hex: '0x1bc16d674ec80000', _isBigNumber: true }
  ],
  [
    '0x49868fB282e4A93489527BDD515ECcCB358a13D9',
    BigNumber { _hex: '0x02540be400', _isBigNumber: true },
    token: '0x49868fB282e4A93489527BDD515ECcCB358a13D9',
    balance: BigNumber { _hex: '0x02540be400', _isBigNumber: true }
  ],
  [
    '0xFfb99f4A02712C909d8F7cC44e67C87Ea1E71E83',
    BigNumber { _hex: '0x00', _isBigNumber: true },
    token: '0xFfb99f4A02712C909d8F7cC44e67C87Ea1E71E83',
    balance: BigNumber { _hex: '0x00', _isBigNumber: true }
  ]
]
```

