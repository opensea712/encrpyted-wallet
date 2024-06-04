const fs = require('fs');
const { ethers } = require('ethers');

const createEncryptedWallet = async () => {
  const wallet = ethers.Wallet.createRandom();
  const password = process.argv[2] ?? 'somestrongpassword';

  // Encrypt the wallet
  const encryptedJson = await wallet.encrypt(password);

  // Save the encrypted wallet to a file
  fs.writeFileSync('encryptedWallet.json', encryptedJson);

  console.log('Encrypted wallet saved to encryptedWallet.json');
};

createEncryptedWallet();
