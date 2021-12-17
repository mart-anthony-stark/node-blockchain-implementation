const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, prevHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
  }

  generateHash() {
    return SHA256(
      this.index +
        this.prevHash +
        this.timestamp +
        JSON.stringify(this.data).toString()
    );
  }
}

module.exports = Block;
