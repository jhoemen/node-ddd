import express from 'express'
import { middlewareAuthentication } from '../adapters/express-middleware-adapter'
import { adaptRoute } from '../adapters/express-router-adapter'
import { adicionarProdutoCarrinhoControllerFactory } from '../factories/adicionarProdutoCarrinhoControllerFactory'
import { removerProdutoCarrinhoControllerFactory } from '../factories/removerProdutoCarrinhoControllerFactory'
import { listarProdutoCarrinhoControllerFactory } from '../factories/listarProdutoCarrinhoControllerFactory'
import inMemoryRepository from './repository'
import { finalizarPedidoControllerFactory } from '../factories/finalizarPedidoControllerFactory'

const PedidoRouter = express.Router()

const repository = inMemoryRepository

PedidoRouter.post(
    '/adicionarProdutoCarrinho',
    middlewareAuthentication(),
    adaptRoute(
        adicionarProdutoCarrinhoControllerFactory(
            repository.inMemoryPedidoRepository,
            repository.inMemoryProdutoRepository,
            repository.inMemoryClienteRepository
        )
    )
)

PedidoRouter.post(
    '/removerProdutoCarrinho',
    middlewareAuthentication(),
    adaptRoute(
        removerProdutoCarrinhoControllerFactory(
            repository.inMemoryPedidoRepository,
            repository.inMemoryProdutoRepository,
            repository.inMemoryClienteRepository
        )
    )
)

PedidoRouter.post(
    '/listarProdutoCarrinho',
    middlewareAuthentication(),
    adaptRoute(
        listarProdutoCarrinhoControllerFactory(
            repository.inMemoryPedidoRepository,
            repository.inMemoryClienteRepository
        )
    )
)

PedidoRouter.post(
    '/finalizarPedido',
    middlewareAuthentication(),
    adaptRoute(
        finalizarPedidoControllerFactory(
            repository.inMemoryPedidoRepository,
            repository.inMemoryClienteRepository
        )
    )
)

export { PedidoRouter }
