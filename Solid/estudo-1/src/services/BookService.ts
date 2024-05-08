import { Book } from "../models/Book.js";
import { FakeRepository, IBookRepository } from "../repositories/FakeRepository.js";


/**
 * Definindo interface para o Service de livros
 * @interface
 */
export interface IBookService {
    save(book: Book): Promise<void>;
    findAll(): Promise<Book[]>;
    findById(id: string): Promise<Book | undefined>;
    delete(id: string): Promise<boolean>;
    checkIfBookExists(title: string, author: string) : Promise<boolean>
}

// Instanciando o repositório de livros
const fakeRepository = new FakeRepository()

/**
 * Serve o gerencimanto de livro
 * @class
 */
export class BookService implements IBookService {
    private bookRepository: IBookRepository;

    constructor() {
        this.bookRepository = fakeRepository
    }
    /**
     * @param book Livro a ser salvo no repositório
     * @returns 
     */
    async save(book: Book): Promise<void> {
        return await this.bookRepository.save(book)
    }
    /**
     * @returns Uma promesa que retorna todos os Livros
     */
    async findAll(): Promise<Book[]> {
        return await this.bookRepository.findAll()
    }
    /**
     * Busca um livro do repositório
     * @param id Id para consultar um livro específico
     * @returns Uma promesa que retorna um livro
     */
    async findById(id: string): Promise<Book | undefined> {
        return await this.bookRepository.findById(id)
    }
    /**
     * Deleta um livro do repositório
     * @param id Id para deleter um livro específico 
     * @returns Um boolean respondendo se foi ou não deletado
     */
    async delete(id: string): Promise<boolean> {
        return await this.bookRepository.delete(id)
    }
    /**
     * Verifica se já existe esse livro no repositório
     * @param name O título do livro a ser verificado
     * @param author O author do livro a ser verificado
     * @returns Um boolean respondendo se foi ou não encontrado
     */
    async checkIfBookExists(name: string, author: string): Promise<boolean> {
        const book = await this.bookRepository.findByTitleAndAuthor(name, author)

        return book ? true : false
    }
}