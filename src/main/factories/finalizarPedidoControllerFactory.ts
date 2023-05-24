import { Controller } from '../../infra/controller'
import { FinalizarPedido } from '../../application/usecases/finalizarPedido/finalizarPedido'
import { InMemoryPedidoRepository } from '../../infra/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryClienteRepository } from '../../infra/repositories/in-memory/inMemoryclienteRepository'
import { FinalizarPedidoController } from '../../application/usecases/finalizarPedido/finalizarPedidoController'

export function finalizarPedidoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const finalizarPedido = new FinalizarPedido(inMemoryPedidoRepository, inMemoryClienteRepository)
    const finalizarPedidoController = new FinalizarPedidoController(finalizarPedido)

    return finalizarPedidoController
}
