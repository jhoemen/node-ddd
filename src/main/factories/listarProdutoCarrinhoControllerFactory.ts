import { Controller } from '../../infra/controller'
import { ListarProdutoCarrinho } from '../../application/usecases/pedido/listarProdutoCarrinho'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { ListarProdutoCarrinhoController } from '../../application/usecases/pedido/listarProdutoCarrinhoController'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'

export function listarProdutoCarrinhoControllerFactory(
        inMemoryPedidoRepository: InMemoryPedidoRepository,
        inMemoryClienteRepository: InMemoryClienteRepository
    ): Controller {
    // const inMemoryPedidoRepository = new InMemoryPedidoRepository()
    // const inMemoryClienteRepository = new InMemoryClienteRepository()
    const adicionarProduto = new ListarProdutoCarrinho(inMemoryPedidoRepository, inMemoryClienteRepository)
    const adicionarProdutoController = new ListarProdutoCarrinhoController(adicionarProduto)

    return adicionarProdutoController
}