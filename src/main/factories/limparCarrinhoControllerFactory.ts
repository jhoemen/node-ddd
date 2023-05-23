import { Controller } from '../../infra/controller'
import { LimparCarrinho } from '../../application/usecases/pedido/limparCarrinho'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'
import { LimparCarrinhoController } from '../../application/usecases/pedido/limparCarrinhoController'

export function limparCarrinhoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const limpar = new LimparCarrinho(inMemoryPedidoRepository, inMemoryClienteRepository)
    const limparController = new LimparCarrinhoController(limpar)

    return limparController
}
