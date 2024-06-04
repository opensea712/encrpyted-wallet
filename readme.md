# EVM Wallet Creation Script

This repository contains a Node.js script to create an Ethereum Virtual Machine (EVM) wallet programmatically using the `ethers.js` library. The script generates a new wallet and save the encrypted wallet to a file.

## Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) installed.

## Installation

1. Clone this repository or download the script.

2. Install the `ethers` library by running:

   ```bash
   npm install ethers
   ```

3. Run the script using Node.js:
   ```bash
   node index.js strongpassword
   ```

4. The script will save the encrypted wallet to a file named `encryptedWallet.json`.

5. Import this JSON file in MetaMask (browser extension only). You should input the password used in script (not MetaMask password)

## License
This project is licensed under the MIT License.
