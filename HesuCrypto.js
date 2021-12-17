const Blockchain = require("./Blockchain");
const Block = require("./block");

let HesuCrypto = new Blockchain();
HesuCrypto.addBlock(new Block(1, "12/16/2021", { amount: 10 }));
HesuCrypto.addBlock(new Block(2, "12/16/2021", { amount: 8 }));

console.log(JSON.stringify(HesuCrypto, null, 4));
// HesuCrypto.chain[1].data = { amount: 100 };
// HesuCrypto.chain[1].hash = HesuCrypto.chain[1].generateHash();
console.log("Is blockchain valid?", HesuCrypto.isValid());
