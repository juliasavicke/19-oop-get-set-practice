class Person {
  constructor(birthDate, name) {
    this.name = name;
    this.born = birthDate;
  }
  get age() {
    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - this.born;
    console.log("currentAge ===", currentAge);
    return currentAge;
  }
  sayHi() {
    console.log(`Hello I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(university, name, birthDate) {
    // pries naudojant this turime iskviesti tevines klases konstruktoriu su super()
    super(birthDate, name);
    this.uni = university;
  }
  // metodo override
  sayHi() {
    console.log(`Hello I am ${this.name} and I study in ${this.uni}`);
  }
}

const p1 = new Person(1986, "Julia");

p1.age;

const st1 = new Student("KTU", "Mike", 1980);
console.log("st1 ===", st1);
st1.age;
st1.sayHi();
