function Animal(name1, emoji) {
  this.name1 = name1;
  this.emoji = emoji;
}
Animal.prototype.printName = function () {
  console.log(`${this.name1}${this.emoji}`);
};

function Dog(name1, emoji, owenr) {}
Dog.prototype = Object.create(Animal.prototype);
Animal.call(this, name1, emoji);
this.owenr = owenr;

Dog.prototype.play = function () {
  console.log('play');
};

const dog1 = new Dog('mong', '🐶', 'koo');
dog1.play();
dog1.printName();
