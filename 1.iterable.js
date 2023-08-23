const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const iterator = array.values();
for (const item of iterator) {
  console.log(item);
}

const iterator = array.values();
iterator.next();
