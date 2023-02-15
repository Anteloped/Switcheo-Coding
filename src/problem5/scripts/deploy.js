
const { ethers } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("TokenBalanceChecker");
  const myContract = await MyContract.deploy();
  console.log("TokenBalanceChecker deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
