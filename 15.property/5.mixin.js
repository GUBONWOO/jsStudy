const play = {
  play: function () {
    console.log(`${this.name}play!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name}Sleep`);
  },
};
function Dog(name) {
  this.name = name;
}
Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('mong');
console.log(dog);
