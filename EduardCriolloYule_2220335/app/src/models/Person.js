export class Person {
  constructor(name, age, city) {
    this.id   = `person-${name.toLowerCase()}`;
    this.name = name;
    this.age  = age;
    this.city = city;         
  }
}
