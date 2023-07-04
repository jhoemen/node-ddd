import { Controller } from '../../controller'
import { LoginCliente } from '../../../application/usecases/loginCliente/loginCliente'
import { LoginClienteController } from '../../../application/usecases/loginCliente/loginClienteController'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

export function loginClienteControllerFactory(clienteRepository: ClienteRepository): Controller {
    const loginCliente = new LoginCliente(clienteRepository)
    const loginClienteController = new LoginClienteController(loginCliente)

    return loginClienteController
}
