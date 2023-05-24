import { Controller } from '../../infra/controller'
import { RemoverProdutoCarrinho } from '../../application/usecases/removerProdutoCarrinho/removerProdutoCarrinho'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../../test/repositories/in-memory/inMemoryProdutoRepository'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'
import { RemoverProdutoCarrinhoController } from '../../application/usecases/removerProdutoCarrinho/removerProdutoCarrinhoController'

export function removerProdutoCarrinhoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryProdutoRepository: InMemoryProdutoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const removerProduto = new RemoverProdutoCarrinho(inMemoryPedidoRepository, inMemoryProdutoRepository, inMemoryClienteRepository)
    const removerProdutoController = new RemoverProdutoCarrinhoController(removerProduto)

    return removerProdutoController
}
