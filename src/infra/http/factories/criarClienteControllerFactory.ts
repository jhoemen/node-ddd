import { Controller } from '../../controller'
import { CriarCliente } from '../../../application/usecases/criarCliente/criarCliente'
import { CriarClienteController } from '../../../application/usecases/criarCliente/criarClienteController'
import { InMemoryClienteRepository } from '../../repositories/in-memory/inMemoryclienteRepository'

export function criarClienteControllerFactory(inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const criarCliente = new CriarCliente(inMemoryClienteRepository)
    const criarClienteController = new CriarClienteController(criarCliente)

    return criarClienteController
}
