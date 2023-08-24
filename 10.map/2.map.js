const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍊'],
]);
console.log(map);

console.log(map.size);
map.forEach((value, key) => console.log(key, value));
console.log(map.get('key1'));
map.set('key3', '🍇');
console.log(map);
console.clear();

const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: 'goodMilk' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([key, milk]);
console.log(map2);
