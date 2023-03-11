class Course {
  #price;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }

  get price() {
    return `$${this.#price}`;
  }

  set price(value) {
    if (value <= 0) {
      console.log("price musth be positive");
    }
    this.#price = value;
  }

  calculateValue() {
    return (this.length * 30) / this.#price;
  }

  summary() {
    return `Naziv ovog kursa je ${this.title}, traje ${this.length} meseci, cena mu je ${this.price}`;
  }
}
const course3 = new Course("it-camp3", 4, 500);

course3.price = -100;
console.log(course3.price);

const course1 = new Course("it-camp", 6, -1200);
const course2 = new Course("itcamp2", 12, 2500);

console.log(course1);
console.log(course2);

console.log(course1.calculateValue());
console.log(course2.calculateValue());

console.log(course1.summary());
console.log(course2.summary());
console.log(course1.price);

class PracticalCourse extends Course {
  constructor(naziv, duzina, cena, numOfExercise) {
    super(naziv, duzina, cena);
    this.numOfExercises = numOfExercise;
  }
}
const practical1 = new PracticalCourse("it-camp", 2, 300, 160);
console.log(practical1);
class Theoretical extends Course {
  constructor(naziv, duzina, cena) {
    super(naziv, duzina, cena);
  }
  publish() {
    return `Ovo je teorijski kurs`;
  }
}
const theoretical1 = new Theoretical("it-camp2", 2, 200);
console.log(theoretical1);
console.log(theoretical1.publish());
