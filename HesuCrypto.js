const Blockchain = require("./Blockchain");
const Block = require("./block");

let HesuCrypto = new Blockchain();

console.log("Mining....");
HesuCrypto.addBlock(new Block(1, "12/16/2021", { amount: 10 }));

console.log("Mining Block...");
HesuCrypto.addBlock(new Block(2, "12/16/2021", { amount: 8 }));

console.log("Mining....");
HesuCrypto.addBlock(new Block(3, "12/16/2021", { amount: 10 }));

console.log("Mining Block...");
HesuCrypto.addBlock(new Block(4, "12/16/2021", { amount: 8 }));

console.log(JSON.stringify(HesuCrypto, null, 4));
// console.log("Is blockchain valid?", HesuCrypto.isValid());
