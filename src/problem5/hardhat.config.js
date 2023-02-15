require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "Wwgxrc-XsMqmjPG92tpL-pqFx7agP3aS";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "51dc42dc4b5972efaefd37a6fedf1bb48b564e0d29b1b1909127392e9e6b2860";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
        url: "https://eth-goerli.g.alchemy.com/v2/Wwgxrc-XsMqmjPG92tpL-pqFx7agP3aS",
        accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    }
  }
};