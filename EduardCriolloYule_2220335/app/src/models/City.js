export class City {
  constructor(name) {
    this.id = `city-${name.toLowerCase()}`;
    this.name = name;
  }
}
