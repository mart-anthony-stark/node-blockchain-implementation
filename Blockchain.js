const Block = require("./block");
const Transaction = require("./Transaction");

class Blockchain {
  constructor() {
    this.chain = [this.initializeGenesisBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  initializeGenesisBlock() {
    return new Block("12/16/2021", "Genesis Block", "0");
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mine(this.difficulty);

    block.prevHash = this.getLastBlock().hash;

    console.log("Successfully mined..");
    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ];
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      let currentBlock = this.chain[i];
      let prevBlock = this.chain[i - 1];

      // console.log(
      //   JSON.stringify(currentBlock.hash) !==
      //     JSON.stringify(currentBlock.generateHash())
      // );

      // VALIDATING THE HASH
      // if (
      //   JSON.stringify(currentBlock.hash) !==
      //   JSON.stringify(currentBlock.generateHash())
      // )
      //   return false;

      if (currentBlock.prevHash !== prevBlock.hash) return false;
    }
    return true;
  }
}

module.exports = Blockchain;
