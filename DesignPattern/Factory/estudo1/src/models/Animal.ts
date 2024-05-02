import type { Cat, TCat } from "./Cat.js";
import type { Dog, TDog } from "./Dog.js";

// Classe base para animal
export type AnimalsType = Cat | Dog
export type AnimalsNameTypePTBR = TCat | TDog
export class Animal {
    public _type: string;
    public _name: string;

    constructor(type: string) {
        this._type = type;
        this._name = type
    }

    // Emite som do animal
    public makeSound(): void {
        console.log("Nome do animal: som do animal");
    }

    // Retorna o nome do animal
    get name() {
        return this._name
    }

    // Altera o nome do animal
    set name(newValue: string) {
        this._name = newValue
    }
}