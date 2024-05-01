var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AnimalFactory } from "./factories/AnimalFactory.js";
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Abre questinamente para adicionar Animal
            const animal = yield AnimalFactory.createAnimal();
            console.log('\x1b[33m%s\x1b[0m', `Animal escolhido: ${animal.type}`);
            console.log('\x1b[33m%s\x1b[0m', `O nome dele é: ${animal.name}`);
            // Animal faz som
            animal.makeSound();
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
start();
