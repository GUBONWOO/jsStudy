// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat');
//   }
//   sleep() {
//     console.log('sleep');
//   }
// }
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat');
//   }
//   sleep() {
//     console.log('sleep');
//   }
//   play() {
//     console.log('play');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat');
  }
  sleep() {
    console.log('sleep');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('y');
console.log(tiger);
