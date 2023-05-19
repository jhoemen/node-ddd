import { Controller } from '../../infra/controller'
import { AdicionarProdutoCarrinho } from '../../application/usecases/pedido/adicionarProdutoCarrinho'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../../test/repositories/in-memory/inMemoryProdutoRepository'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'
import { AdicionarProdutoCarrinhoController } from '../../application/usecases/pedido/adicionarProdutoCarrinhoController'

export function adicionarProdutoCarrinhoControllerFactory(
        inMemoryPedidoRepository: InMemoryPedidoRepository,
        inMemoryProdutoRepository: InMemoryProdutoRepository,
        inMemoryClienteRepository: InMemoryClienteRepository
    ): Controller {
    // const inMemoryPedidoRepository = new InMemoryPedidoRepository()
    // const inMemoryProdutoRepository = new InMemoryProdutoRepository()
    // const inMemoryClienteRepository = new InMemoryClienteRepository()
    const adicionarProduto = new AdicionarProdutoCarrinho(inMemoryPedidoRepository, inMemoryProdutoRepository, inMemoryClienteRepository)
    const adicionarProdutoController = new AdicionarProdutoCarrinhoController(adicionarProduto)

    return adicionarProdutoController
}