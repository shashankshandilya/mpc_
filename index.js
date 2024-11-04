const { ethers } = require('ethers');
const secrets = require('secrets.js-grempe');
require("dotenv").config();
const { combineShares } = require('./combine')
async function signTransaction(recombinedKey, toAddress, valueInEther) {
    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`)
    // Get write access as an account by getting the signer
    const signer = new ethers.Wallet(recombinedKey, provider);
    const tx = {
        to: toAddress,
        value: ethers.parseUnits(valueInEther, 'ether'),
    };
    // Submit the transaction to the blockchain
    const data = await signer.sendTransaction(tx)
    console.log(data)
}

// Step 4: Run the MPC demo
(async () => {
    // // Use some shares to recombine the private key (MPC-style)
    const recombinedKey = combineShares([process.env.KEY_SHARE_1, process.env.KEY_SHARE_3]); // Only use 2 of the shares
    // Sign and send a transaction using the recombined key
    const transactionData = await signTransaction(recombinedKey, '0x7A207fdA748Cd357C0f77fD27CCCE8ed351d579e', '0.0001');
    console.log("transactionData ==", transactionData)
})();
