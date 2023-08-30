const x = 0;
module.exports.x = x;

console.log(this);
console.log(globalThis);

console.clear();

function fun() {
  console.log(this);
}
fun();

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('NNN');
const cat2 = new Cat('OOO');
cat1.printName();
cat2.printName();
