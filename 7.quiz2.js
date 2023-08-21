class Worker {
  constructor(name1, department, hoursPerMonth, payRate) {
    this.name1 = name1;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class Fulltime extends Worker {
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, 10000);
  }
}

class Parttime extends Worker {
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, 8000);
  }
}

const ellie = new Fulltime('ellie', 's/w', 30);
const bob = new Parttime('bob', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
