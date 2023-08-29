const dog = { name: 'wow', emoji: '🐶' };

console.log(Object.keys(dog));

console.log('name' in dog);

const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
});
