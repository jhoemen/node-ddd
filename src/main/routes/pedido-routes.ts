import express from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { adicionarProdutoCarrinhoControllerFactory } from '../factories/adicionarProdutoCarrinhoControllerFactory'
import { listarProdutoCarrinhoControllerFactory } from '../factories/listarProdutoCarrinhoControllerFactory'
import inMemoryRepository from './repository'

const PedidoRouter = express.Router()

const repository = inMemoryRepository

PedidoRouter.post('/adicionarProdutoCarrinho', adaptRoute(adicionarProdutoCarrinhoControllerFactory(
    repository.inMemoryPedidoRepository, 
    repository.inMemoryProdutoRepository,
    repository.inMemoryClienteRepository
)))

PedidoRouter.post('/listarProdutoCarrinho', adaptRoute(listarProdutoCarrinhoControllerFactory(
    repository.inMemoryPedidoRepository,
    repository.inMemoryClienteRepository
)))    

export { PedidoRouter }