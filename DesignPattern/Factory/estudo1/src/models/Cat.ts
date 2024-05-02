import { Animal } from "./Animal.js";

export type TCat = "Gato"
// Classe específica para gato
export class Cat extends Animal {
    public _type: string = "Cat";
    private _sound: string = "Miau!"
    constructor(name?: string) {
        super(Cat.prototype._type)

        // Altera o nome do animal
        if (name) {
            this.name = name
        }
    }

    // Emite som do animal
    public makeSound(): void {
        console.log('\x1b[32m%s\x1b[0m', `${this._name}: ${this._sound}`)
    }
}
