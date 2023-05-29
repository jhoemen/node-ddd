import express from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { listarProdutoControllerFactory } from '../factories/listarProdutoControllerFactory'
import inMemoryRepository from './repository'

const produtoRouter = express.Router()

const repository = inMemoryRepository

produtoRouter.get('/produto', adaptRoute(listarProdutoControllerFactory(repository.inMemoryProdutoRepository)))

export { produtoRouter }
