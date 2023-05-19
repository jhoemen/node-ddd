import express from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { adicionarProdutoCarrinhoControllerFactory } from '../factories/adicionarProdutoCarrinhoControllerFactory'
import inMemoryRepository from './repository'

const PedidoRouter = express.Router()

const repository = inMemoryRepository

PedidoRouter.post('/adicionarProdutoCarrinho', adaptRoute(adicionarProdutoCarrinhoControllerFactory(
    repository.inMemoryPedidoRepository, 
    repository.inMemoryProdutoRepository,
    repository.inMemoryClienteRepository
    )))

export { PedidoRouter }