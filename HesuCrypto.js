const Blockchain = require("./Blockchain");
const Block = require("./block");

let HesuCrypto = new Blockchain();
HesuCrypto.addBlock(new Block(1, "12/16/2021", { amount: 10 }));
HesuCrypto.addBlock(new Block(1, "12/16/2021", { amount: 8 }));

console.log(JSON.stringify(HesuCrypto, null, 4));
// HesuCrypto.chain[1].data = { amount: 100 };
console.log("Is chain valid?", HesuCrypto.isValid());
