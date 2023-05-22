import { Controller } from '../../infra/controller'
import { ListarPedido } from '../../application/usecases/pedido/listarPedido'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { ListarPedidoController } from '../../application/usecases/pedido/listarPedidoController'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'

export function listarPedidoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const adicionarProduto = new ListarPedido(inMemoryPedidoRepository, inMemoryClienteRepository)
    const adicionarProdutoController = new ListarPedidoController(adicionarProduto)

    return adicionarProdutoController
}
