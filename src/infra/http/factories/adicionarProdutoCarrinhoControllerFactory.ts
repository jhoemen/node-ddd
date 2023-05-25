import { Controller } from '../../controller'
import { AdicionarProdutoCarrinho } from '../../../application/usecases/adicionarProdutoCarrinho/adicionarProdutoCarrinho'
import { InMemoryPedidoRepository } from '../../repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../repositories/in-memory/inMemoryProdutoRepository'
import { InMemoryClienteRepository } from '../../repositories/in-memory/inMemoryclienteRepository'
import { AdicionarProdutoCarrinhoController } from '../../../application/usecases/adicionarProdutoCarrinho/adicionarProdutoCarrinhoController'

export function adicionarProdutoCarrinhoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryProdutoRepository: InMemoryProdutoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const adicionarProduto = new AdicionarProdutoCarrinho(inMemoryPedidoRepository, inMemoryProdutoRepository, inMemoryClienteRepository)
    const adicionarProdutoController = new AdicionarProdutoCarrinhoController(adicionarProduto)

    return adicionarProdutoController
}
