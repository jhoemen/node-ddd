import { Controller } from '../../infra/controller'
import { CriarCliente } from '../../application/usecases/criarCliente/criarCliente'
import { CriarClienteController } from '../../application/usecases/criarCliente/criarClienteController'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'

export function criarClienteControllerFactory(inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const criarCliente = new CriarCliente(inMemoryClienteRepository)
    const criarClienteController = new CriarClienteController(criarCliente)

    return criarClienteController
}
