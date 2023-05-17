import { Controller } from '../../infra/controller'
import {LoginCliente} from '../../application/usecases/cliente/loginCliente'
import {LoginClienteController} from '../../application/usecases/cliente/loginClienteController'
import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'

export function loginClienteControllerFactory(inMemoryClienteRepository: InMemoryClienteRepository): Controller {
    // const inMemoryClienteRepository = new InMemoryClienteRepository()
    const loginCliente = new LoginCliente(inMemoryClienteRepository)
    const loginClienteController = new LoginClienteController(loginCliente)

    return loginClienteController
}