const fruits = ['🍎', '🍊', '🍌', '🍇'];
const [first, second, ...others] = fruits;
console.log(fruits[0]);

const point = [1, 2];
const [x, y] = point;

function creatEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = creatEmoji();
