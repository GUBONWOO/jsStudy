const ellie = { name: ellie };
const dog = { name: 'wow', emoji: '🍌', owenr: ellie };
Object.freeze(dog);

const cat = {};
Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
