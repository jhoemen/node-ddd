import { Controller } from '../../infra/controller'
import { CriarCliente } from '../../application/usecases/cliente/criarCliente'
import { CriarClienteController } from '../../application/usecases/cliente/criarClienteController'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'

export function criarClienteControllerFactory(): Controller {
    const inMemoryClienteRepository = new InMemoryClienteRepository()
    const criarCliente = new CriarCliente(inMemoryClienteRepository)
    const criarClienteController = new CriarClienteController(criarCliente)

    return criarClienteController
}