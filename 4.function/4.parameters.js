function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

add(1, 2);

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5);
