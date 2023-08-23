const fruits = ['🍏', '🍇', '🍌'];
fruits.forEach(function (value) {
  console.log('------------');
  console.log(value);
  // console.log(array);
  // console.log(index);
});

const pizza = { name: '🍉', price: 2 };
const ramen = { name: '🥦', price: 3 };
const sushi = { name: '🥑', price: 1 };
const products = [pizza, ramen, sushi];

const found = products.find((value) => {
  return value.name === '🥑';
});
console.log(found);

console.clear();

const nums = [1, 2, 3, 4, 5];

result = nums.map((item) => item * 2);
console.log(result);

const texts = ['hi', 'acb'];
texts.sort();
console.log(texts);
