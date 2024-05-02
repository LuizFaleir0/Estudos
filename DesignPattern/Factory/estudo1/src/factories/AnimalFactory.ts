import inquirer from "inquirer";
import { Cat } from "../models/Cat.js";
import { Dog } from "../models/Dog.js";
import { QAnimalName, QAnimalType } from "../questions/QAnimal.js";
import { AnimalsNameTypePTBR, AnimalsType } from "../models/Animal.js";
export class AnimalFactory {
    static async createAnimal(): Promise<AnimalsType> {
        // Abre questionamente para adicionar Animal
        const { animalName, animalType } = await inquirer.prompt([QAnimalType,QAnimalName]) as { animalName: string, animalType: AnimalsNameTypePTBR }
        
        // Verifica se o animal escolhido e válido
        if (!animalType) {
            throw new Error("Não foi escolhido nenhum animal!")
    
        } else if (animalType === "Gato") {
            return new Cat(animalName)

        } else if (animalType === "Cachorro") {
            return new Dog(animalName)

        } else {
            throw new Error("Tipo de animal não suportado!")

        }
    }
}