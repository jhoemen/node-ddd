import { Controller } from '../../controller'
import { CriarCliente } from '../../../application/usecases/criarCliente/criarCliente'
import { CriarClienteController } from '../../../application/usecases/criarCliente/criarClienteController'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

export function criarClienteControllerFactory(clienteRepository: ClienteRepository): Controller {
    const criarCliente = new CriarCliente(clienteRepository)
    const criarClienteController = new CriarClienteController(criarCliente)

    return criarClienteController
}
