const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

const json = JSON.stringify(ellie);
console.log(ellie);
console.log(JSON);
const obj = JSON.parse(json);
console.log(obj);
