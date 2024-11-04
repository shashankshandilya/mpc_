// Step 2: Combine the shares (to simulate MPC recombination)
const secrets = require('secrets.js-grempe');

function combineShares(shares) {
    const combinedHexKey = secrets.combine(shares);
    const combinedKey = secrets.hex2str(combinedHexKey); // Convert back to string
    return combinedKey;
}

module.exports = { combineShares }