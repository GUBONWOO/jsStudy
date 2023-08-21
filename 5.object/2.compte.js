const obj = {
  name: 'koo',
  age: 20,
};

obj.name;
obj.age;

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'teacher');
console.log(obj);
