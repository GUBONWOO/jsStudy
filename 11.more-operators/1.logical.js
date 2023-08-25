const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'koo' };

if (obj1 && obj2) {
  console.log('true');
}
let result = obj1 && obj2;
console.log(result);

let item = { price: 1 };
const price = item.price;
