import express from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { atualizarProdutoControllerFactory } from '../factories/atualizarProdutoControllerFactory'
import { carregarProdutoControllerFactory } from '../factories/carregarProdutoControllerFactory'
import { criarProdutoControllerFactory } from '../factories/criarProdutoControllerFactory'
import { listarProdutoControllerFactory } from '../factories/listarProdutoControllerFactory'
import inMemoryRepository from './repository'

const produtoRouter = express.Router()

const repository = inMemoryRepository

produtoRouter.get('/produtos', adaptRoute(listarProdutoControllerFactory(repository.ProdutoRepository)))
produtoRouter.get('/produtos/:id', adaptRoute(carregarProdutoControllerFactory(repository.ProdutoRepository)))
produtoRouter.post('/produtos', adaptRoute(criarProdutoControllerFactory(repository.ProdutoRepository)))
produtoRouter.put('/produtos/:id', adaptRoute(atualizarProdutoControllerFactory(repository.ProdutoRepository)))

export { produtoRouter }
