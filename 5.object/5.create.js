// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}:🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}:🍊`);
//   },
// };

// console.log(apple);
// console.log(orange);

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji} `);
  };
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
