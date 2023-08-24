const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);
console.log(set.has(2));
console.log(set.has(3));
set.forEach((item) => console.log(item));

set.add(6);
console.log(set);
