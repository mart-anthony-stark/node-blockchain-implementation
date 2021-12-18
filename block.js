const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, transactions, prevHash) {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.prevHash = prevHash;
    this.hash = this.generateHash();
    this.nonce = 0;
  }

  generateHash() {
    return SHA256(
      this.prevHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nonce
    ).toString();
  }

  mine(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.generateHash();
    }

    console.log("Block mined: " + this.hash);
  }
}

module.exports = Block;
