import { Controller } from '../../controller'
import { ListarPedido } from '../../../application/usecases/listarPedido/listarPedido'
import { InMemoryPedidoRepository } from '../../repositories/in-memory/inMemoryPedidoRepository'
import { ListarPedidoController } from '../../../application/usecases/listarPedido/listarPedidoController'
import { InMemoryClienteRepository } from '../../repositories/in-memory/inMemoryclienteRepository'

export function listarPedidoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const adicionarProduto = new ListarPedido(inMemoryPedidoRepository, inMemoryClienteRepository)
    const adicionarProdutoController = new ListarPedidoController(adicionarProduto)

    return adicionarProdutoController
}
