const secrets = require('secrets.js-grempe');
// Step 1: Split the private key into shares
// Define the number of shares and threshold for recombination
const totalShares = 3;
const threshold = 2;
function splitPrivateKey(privateKey) {
    const hexPrivateKey = secrets.str2hex(privateKey); // Convert to hex
    const shares = secrets.share(hexPrivateKey, totalShares, threshold);
    console.log("Private key shares:", shares);
    return shares;
}
module.exports = {splitPrivateKey}
/*
// Generate a random private key (for demo purposes)
    // const privateKey = process.env.PRIVATE_KEY;
    // // console.log("Original Private Key:", privateKey);
    // // // Split the private key into shares (simulating MPC)
    // const shares = splitPrivateKey(privateKey);
    // console.log("shares ===", shares)
*/