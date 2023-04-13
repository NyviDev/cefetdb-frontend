export class Discipline {
    constructor(private id: string, private name: string, private type: string) {}

    getName() {
        return this.name;
    }
}