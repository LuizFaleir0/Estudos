import { v4 } from "uuid";

/**
 * Cria um novo livro
 * @class
 */
export class Book {
    public readonly id!: string;
    public name!: string;
    public author!: string;
    public year!: number;
    public price!: number;

    constructor(props: Omit<Book, 'id'>, id?: string) {
        // Passa as propriedades
        Object.assign(this, props)

        // Verifica se o livro tem id
        if (!id) {
            this.id = v4()
        }
    }
}