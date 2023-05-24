import { Controller } from '../../infra/controller'
import { LimparCarrinho } from '../../application/usecases/limparCarrinho/limparCarrinho'
import { InMemoryPedidoRepository } from '../../infra/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryClienteRepository } from '../../infra/repositories/in-memory/inMemoryclienteRepository'
import { LimparCarrinhoController } from '../../application/usecases/limparCarrinho/limparCarrinhoController'

export function limparCarrinhoControllerFactory(inMemoryPedidoRepository: InMemoryPedidoRepository, inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const limpar = new LimparCarrinho(inMemoryPedidoRepository, inMemoryClienteRepository)
    const limparController = new LimparCarrinhoController(limpar)

    return limparController
}
