const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [this.initializeGenesisBlock()];
  }

  initializeGenesisBlock() {
    return new Block(0, "12/16/2021", "Genesis Block", "0");
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLastBlock().hash;
    newBlock.hash = newBlock.generateHash();
    this.chain.push(newBlock);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      let currentBlock = this.chain[i];
      let prevBlock = this.chain[i - 1];

      // VALIDATING THE HASH
      if (
        JSON.stringify(currentBlock.hash) !==
        JSON.stringify(currentBlock.generateHash())
      )
        return false;

      if (currentBlock.prevHash !== prevBlock.hash) return false;
    }
    return true;
  }
}

module.exports = Blockchain;
