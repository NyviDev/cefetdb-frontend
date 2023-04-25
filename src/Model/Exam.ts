export class Exam {
  #id: string;
  #name: string;

  constructor(id: string, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
}
