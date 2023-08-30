function makeCount() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCount();

class Counter {
  #count = 0;
  increase() {
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
