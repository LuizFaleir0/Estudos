import { Router } from "express";
import { BookRoutes } from "./BookRoutes.js";

const router = Router()

// Organizando rotas
router.use(BookRoutes)

export {
    router
}