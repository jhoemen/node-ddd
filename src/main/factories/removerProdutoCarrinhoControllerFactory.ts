import { Controller } from '../../infra/controller'
import { RemoverProdutoCarrinho } from '../../application/usecases/removerProdutoCarrinho/removerProdutoCarrinho'
import { InMemoryPedidoRepository } from '../../infra/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../infra/repositories/in-memory/inMemoryProdutoRepository'
import { InMemoryClienteRepository } from '../../infra/repositories/in-memory/inMemoryclienteRepository'
import { RemoverProdutoCarrinhoController } from '../../application/usecases/removerProdutoCarrinho/removerProdutoCarrinhoController'

export function removerProdutoCarrinhoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryProdutoRepository: InMemoryProdutoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const removerProduto = new RemoverProdutoCarrinho(inMemoryPedidoRepository, inMemoryProdutoRepository, inMemoryClienteRepository)
    const removerProdutoController = new RemoverProdutoCarrinhoController(removerProduto)

    return removerProdutoController
}
