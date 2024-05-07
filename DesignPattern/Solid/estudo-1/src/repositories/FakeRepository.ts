import { Book } from "../models/Book.js";

/**
 * Interface para um repositório de livros.
 * @interface
 */
export interface IBookRepository {
    save(book: Book): Promise<void>;
    findAll(): Promise<Book[]>;
    findById(id: string): Promise<Book | undefined>;
    findByTitleAndAuthor(title: string, author: string): Promise<Book | undefined>
    delete(id: string): Promise<boolean>;
}

/**
 * Gerencia livros
 * @class
 */
export class FakeRepository implements IBookRepository {
    /**
     * Array de livros
     * @prop
     */
    private books: Book[] = []

    /**
     * Salva um livro
     * @param book O livro a ser salvo
     */
    async save(book: Book): Promise<void> {
        this.books.push(book)
    }

    /**
     * Busca todos os Livros
     * @returns Retorna todos os livros
     */
    async findAll(): Promise<Book[]> {
        return this.books
    }

    /**
     * Busca um livro usando o ID
     * @param id ID usado para buscar o livro
     * @returns Retorna um livro caso seja encontrado
     */
    async findById(id: string): Promise<Book | undefined> {
        return this.books.find(item => item.id === id)
    }

    /**
     * Deleta um livro usando o ID
     * @param id ID usado para deletar o livro
     * @returns Retorna com boolean, respondendo se foi ou não deletado
     */
    async delete(id: string): Promise<boolean> {
        // busca o index de um livro pelo ID
        const index = this.books.findIndex(item => item.id === id)

        // Verifica se o livro foi ou não encontrado
        if (index === -1) {
            return false
        }

        // Deleta o livro
        this.books.splice(index, 1)
        return true
    }

    /**
     * Busca um livro pelo nome do author e pelo nome do livro
     * @param name O título do livro a ser buscado
     * @param author O Author do livro a ser buscado
     * @returns Retorna um livro, caso seja encontrado
     */
    async findByTitleAndAuthor(name: string, author: string): Promise<Book | undefined> {
        return this.books.find(item => item.name === name && item.author === author)
    }
}