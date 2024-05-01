var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import { Cat } from "../models/Cat.js";
import { Dog } from "../models/Dog.js";
import { QAnimalName, QAnimalType } from "../questions/QAnimal.js";
export class AnimalFactory {
    static createAnimal() {
        return __awaiter(this, void 0, void 0, function* () {
            const { animalName, animalType } = yield inquirer.prompt([QAnimalType, QAnimalName]);
            if (animalType === "Gato") {
                return new Cat(animalName);
            }
            if (animalType === "Cachorro") {
                return new Dog(animalName);
            }
            throw new Error("Tipo de animal não suportado!");
        });
    }
}
