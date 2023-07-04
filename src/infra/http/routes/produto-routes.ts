import express from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { carregarProdutoControllerFactory } from '../factories/carregarProdutoControllerFactory'
import { listarProdutoControllerFactory } from '../factories/listarProdutoControllerFactory'
import inMemoryRepository from './repository'

const produtoRouter = express.Router()

const repository = inMemoryRepository

produtoRouter.get('/produtos', adaptRoute(listarProdutoControllerFactory(repository.ProdutoRepository)))

produtoRouter.get('/produtos/:id', adaptRoute(carregarProdutoControllerFactory(repository.ProdutoRepository)))

export { produtoRouter }
