const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, prevHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.generateHash();
    this.nonce = 0;
  }

  generateHash() {
    return SHA256(
      this.index +
        this.prevHash +
        this.timestamp +
        JSON.stringify(this.data) +
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
