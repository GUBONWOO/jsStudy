function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}
function log(num) {
  console.log(num);
}
iterate(3, log);
