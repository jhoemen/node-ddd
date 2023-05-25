import { Controller } from '../../controller'
import { LoginCliente } from '../../../application/usecases/loginCliente/loginCliente'
import { LoginClienteController } from '../../../application/usecases/loginCliente/loginClienteController'
import { InMemoryClienteRepository } from '../../repositories/in-memory/inMemoryclienteRepository'

export function loginClienteControllerFactory(inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    const loginCliente = new LoginCliente(inMemoryClienteRepository)
    const loginClienteController = new LoginClienteController(loginCliente)

    return loginClienteController
}
