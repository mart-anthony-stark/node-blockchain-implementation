const Blockchain = require("./Blockchain");
const Block = require("./block");
const Transaction = require("./Transaction");

let HesuCrypto = new Blockchain();

HesuCrypto.createTransaction(new Transaction("add1", "add2", 100));
HesuCrypto.createTransaction(new Transaction("add2", "add1", 50));

console.log("\nStarting the miner(1)...");

HesuCrypto.minePendingTransactions("mart-address");
console.log("Balance: " + HesuCrypto.getBalanceOfAddress("mart-address"));

console.log("\nStarting the miner(2)...");

HesuCrypto.minePendingTransactions("mart-address");
console.log("Balance: " + HesuCrypto.getBalanceOfAddress("mart-address"));

console.log(HesuCrypto);

console.log("Is blockchain valid? ", HesuCrypto.isValid());
