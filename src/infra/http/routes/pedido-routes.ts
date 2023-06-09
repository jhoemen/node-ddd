import express from 'express'
import { middlewareAuthentication } from '../middlewares/express-middleware-adapter'
import { adaptRoute } from '../adapters/express-router-adapter'
import { adicionarProdutoCarrinhoControllerFactory } from '../factories/adicionarProdutoCarrinhoControllerFactory'
import { removerProdutoCarrinhoControllerFactory } from '../factories/removerProdutoCarrinhoControllerFactory'
import { listarProdutoCarrinhoControllerFactory } from '../factories/listarProdutoCarrinhoControllerFactory'
import inMemoryRepository from './repository'
import { finalizarPedidoControllerFactory } from '../factories/finalizarPedidoControllerFactory'
import { listarPedidoControllerFactory } from '../factories/listarPedidoControllerFactory'
import { limparCarrinhoControllerFactory } from '../factories/limparCarrinhoControllerFactory'

const PedidoRouter = express.Router()

const repository = inMemoryRepository

PedidoRouter.post('/adicionarProdutoCarrinho', middlewareAuthentication(), adaptRoute(adicionarProdutoCarrinhoControllerFactory(repository.inMemoryPedidoRepository, repository.inMemoryProdutoRepository, repository.inMemoryClienteRepository)))

PedidoRouter.post('/removerProdutoCarrinho', middlewareAuthentication(), adaptRoute(removerProdutoCarrinhoControllerFactory(repository.inMemoryPedidoRepository, repository.inMemoryProdutoRepository, repository.inMemoryClienteRepository)))

PedidoRouter.post('/limparCarrinho', middlewareAuthentication(), adaptRoute(limparCarrinhoControllerFactory(repository.inMemoryPedidoRepository, repository.inMemoryClienteRepository)))

PedidoRouter.get('/listarProdutoCarrinho', middlewareAuthentication(), adaptRoute(listarProdutoCarrinhoControllerFactory(repository.inMemoryPedidoRepository, repository.inMemoryClienteRepository)))

PedidoRouter.get('/listarPedido', middlewareAuthentication(), adaptRoute(listarPedidoControllerFactory(repository.inMemoryPedidoRepository, repository.inMemoryClienteRepository)))

PedidoRouter.post('/finalizarPedido', middlewareAuthentication(), adaptRoute(finalizarPedidoControllerFactory(repository.inMemoryPedidoRepository, repository.inMemoryClienteRepository)))

export { PedidoRouter }
