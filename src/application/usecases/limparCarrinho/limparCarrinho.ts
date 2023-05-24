import { PedidoRepository } from '../../../domain/repositories/pedidoRepository'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

interface LimparCarrinhoUseCaseRequest {
    clienteId: UniqueEntityID
}

export class LimparCarrinho {
    constructor(private pedidoRepository: PedidoRepository, private clienteRepository: ClienteRepository) {}

    async execute({ clienteId }: LimparCarrinhoUseCaseRequest): Promise<void> {
        const hasCliente = await this.clienteRepository.findById(clienteId)
        const cartPendantId = await this.pedidoRepository.getCartPendant(clienteId)

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        if (!cartPendantId) {
            throw new Error('Pedido não localizado.')
        }

        await this.pedidoRepository.clearCartPendant(cartPendantId)
    }
}
