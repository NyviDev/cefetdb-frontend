export class Discipline {
  #id: string;
  #name: string;
  #type: string;

  constructor(id: string, name: string, type: string) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
  }

  get name() {
    return this.#name;
  }
}
