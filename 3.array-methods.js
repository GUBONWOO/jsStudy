const fruits = ['🍏', '🍇', '🍌'];

console.log(Array.isArray(fruits));

fruits.push('s');
console.log(fruits);

fruits.unshift('2');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

const arr1 = [6, 7, 8];
const arr2 = newArr.concat(arr1);
console.log(arr2);
