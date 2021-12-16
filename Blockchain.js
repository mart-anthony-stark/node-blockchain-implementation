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
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
