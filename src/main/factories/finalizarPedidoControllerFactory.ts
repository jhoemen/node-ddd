import { Controller } from '../../infra/controller'
import { FinalizarPedido } from '../../application/usecases/pedido/finalizarPedido'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'
import { FinalizarPedidoController } from '../../application/usecases/pedido/finalizarPedidoController'

export function finalizarPedidoControllerFactory(
    inMemoryPedidoRepository: InMemoryPedidoRepository,
    inMemoryClienteRepository: InMemoryClienteRepository
): Controller {
    // const inMemoryPedidoRepository = new InMemoryPedidoRepository()
    // const inMemoryProdutoRepository = new InMemoryProdutoRepository()
    // const inMemoryClienteRepository = new InMemoryClienteRepository()
    const finalizarPedido = new FinalizarPedido(
        inMemoryPedidoRepository,
        inMemoryClienteRepository
    )
    const finalizarPedidoController = new FinalizarPedidoController(
        finalizarPedido
    )

    return finalizarPedidoController
}
