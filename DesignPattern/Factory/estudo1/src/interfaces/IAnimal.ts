import { QuestionCollection } from "inquirer";

// Interface de Animal
export interface IAnimal {
    type: string;
    name: string;
    makeSound(): void;
}

// Tipos de animais
export type AnimalsType = "Cachorro" | "Gato"

export type QuestionAnimalType = QuestionCollection & {
    choices: AnimalsType[]
}

export type QAnimal = {
    animalType: AnimalsType,
    animalName: string,
}