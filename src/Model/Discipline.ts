export class Discipline {
  #id: string;
  #name: string;
  #type: string;

  constructor(id: string, name: string, type: string, semester: number) {
    this.#id = id;
    this.#name = name;
    this.#type = type;

  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

}
