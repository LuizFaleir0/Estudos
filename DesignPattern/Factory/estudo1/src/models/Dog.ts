import { Animal } from "./Animal.js";

export type TDog = "Cachorro"

// Classe específica para cachorro
export class Dog extends Animal {
    public _type: string = "Dog";
    private _sound: string = "Au au!"
    constructor(name?: string) {
        super(Dog.prototype._type)

        // Altera o nome do animal
        if (name) {
            this.name = name
        }
    }

    // Emite som do animal
    makeSound(): void {
        console.log('\x1b[32m%s\x1b[0m', `${this._name}: ${this._sound}`)
    }
}