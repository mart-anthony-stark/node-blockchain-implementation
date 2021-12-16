const Blockchain = require("./Blockchain");
const Block = require("./block");

let HesuCrypto = new Blockchain();
HesuCrypto.addBlock(new Block(1, "12/16/2021", { amount: 10 }));
HesuCrypto.addBlock(new Block(1, "12/16/2021", { amount: 8 }));

console.log(JSON.stringify(HesuCrypto, null, 4));
