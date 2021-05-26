class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (typeof firstName === "string") {
      this._firstName = firstName;
    } else {
      throw new Error("firstName is not string");
    }
  }

  get lastName() {
    this._lastName;
  }
  set name(lastName) {
    if (typeof lastName === "string") {
      this._lastName = lastName;
    } else {
      throw new Error("lastName is not string");
    }
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    if (gender === "Male" || gender === "Female") {
      this._gender = gender;
    } else {
      throw new Error("Not vaild gender");
    }
  }

  get age() {
    return this._age;
  }
  set age(age) {
    if (age > 0 && typeof age === "number") {
      this._age = age;
    } else {
      throw new Error("Not vaild age");
    }
  }

  toString() {
    return `${this._firstName} ${this._lastName} | age - ${this._age} | gender - ${this._gender}`;
  }
}

class Student extends Person {
  constructor(year, fee, program, ...args) {
    super(...args);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }

  get year() {
    return this._year;
  }
  set year(year) {
    if (year > 0 && typeof year === "number") {
      this._year = year;
    } else {
      throw new Error("Not vaild year");
    }
  }

  get fee() {
    return this._fee;
  }
  set fee(fee) {
    if (fee > 0 && typeof fee === "number") {
      this._fee = fee;
    } else {
      throw new Error("Not vaild fee");
    }
  }

  get program() {
    return this._program;
  }

  set program(program) {
    return (this._program = program);
  }

  passExam(programNamePass, gradePass) {
    this._program.forEach((item) => {
      if (item.programName === programNamePass) {
        item.grade = gradePass;
      }
    });
  }

  isAllPassed() {
    let examIsFall = false;
    this._program.forEach((item) => {
      console.log(item.grade);
      if (item.grade < 50 || item.grade === undefined) {
        examIsFall = true;
      }
    });
    if (examIsFall === false) {
      this._year--;
      return `you must lear ${this._year} year`;
    } else {
      return `exam is failed`;
    }
  }
}
let person = new Person("Bob", "Kevin", "Male", 15);
let student = new Student(
  3,
  500000,
  [
    { programName: "math", grade: 60 },
    { programName: "english", grade: undefined },
  ],
  "Bob",
  "Kevin",
  "Male",
  15
);

student.passExam("english", 50);
console.log(student.isAllPassed());
