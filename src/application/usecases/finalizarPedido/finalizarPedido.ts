import { PedidoRepository } from '../../../domain/repositories/pedidoRepository'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

interface FinalizarPedidoUseCaseRequest {
    clienteId: UniqueEntityID
}

export class FinalizarPedido {
    constructor(private pedidoRepository: PedidoRepository, private clienteRepository: ClienteRepository) {}

    async execute({ clienteId }: FinalizarPedidoUseCaseRequest): Promise<void> {
        const hasCliente = await this.clienteRepository.findById(clienteId)
        const cartPendantId = await this.pedidoRepository.getCartPendant(clienteId)

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        if (!cartPendantId) {
            throw new Error('Pedido não localizado.')
        }

        await this.pedidoRepository.checkoutCart(cartPendantId)
    }
}
