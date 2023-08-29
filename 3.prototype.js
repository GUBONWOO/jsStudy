function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}
Dog.prototype.printName = function () {
  console.log(`${this.name}${this.emoji}`);
};
const dog1 = new Dog('mong', '🐶');
const dog2 = new Dog('Bong', '🐱');

dog1.printName = function () {
  console.log('Hi');
};
