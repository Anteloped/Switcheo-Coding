// create a transaction form to send crypto to another ETH addresss

function sendCrypto() {
    // get the address and amount from the form
    const address = document.getElementById("address").value;
    const amount = document.getElementById("amount").value;
    // get the current account
    const account = web3.eth.accounts[0];
    // send the transaction
    web3.eth.sendTransaction({
        from: account,
        to: address,
        value: web3.toWei(amount, "ether")
    });
    }

// include OTP authentication
