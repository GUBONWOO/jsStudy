class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}}`;
  }
}
const student = new Student('suzi', 'kim');
console.log(student);
console.log(student.fullName);
