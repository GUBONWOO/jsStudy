const fruits = ['a', 'b', 'c', 'a', 'b', 'f'];
const quiz = new Set(fruits);
console.log(quiz);

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function find(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}
console.log(find(set1, set2));
