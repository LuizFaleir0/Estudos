import { Router } from "express";
import { BookController } from "../controllers/BookController.js";

const bookController = new BookController()
const BookRoutes = Router()

// Definindo rotas de Livros
BookRoutes.post("/books", bookController.save)

BookRoutes.get("/books", bookController.findAll)

BookRoutes.get("/books/book", bookController.findById)

BookRoutes.delete("/books/book", bookController.delete)

export {
    BookRoutes
}