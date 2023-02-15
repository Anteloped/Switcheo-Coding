// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenBalanceChecker {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] memory tokens)
        public
        view
        returns (TokenBalance[] memory)
    {
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            uint256 balance = token.balanceOf(wallet);
            balances[i] = TokenBalance(tokens[i], balance);
        }

        return balances;
    }
}

