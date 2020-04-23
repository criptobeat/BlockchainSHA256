const Block = require('./blockchain/block');
const block = new Block('Andres', 'Valeria', 'Miguel','Mark');
console.log(block.toString());
console.log(Block.genesis().toString());