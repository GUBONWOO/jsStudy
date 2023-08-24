const map = new Map();
// const key1 = 'key';
// const key2 = 'key2';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'hello');
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
