import { PedidoRepository } from '../../../domain/repositories/pedidoRepository'
import { Pedido } from '../../../domain/entities/pedido/pedido'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

interface ListarPedidoUseCaseRequest {
    clienteId: UniqueEntityID
}

interface ListarPedidoUseCaseResponse {
    pedido: Pedido[] | []
}

export class ListarPedido {
    constructor(private pedidoRepository: PedidoRepository, private clienteRepository: ClienteRepository) {}

    async execute({ clienteId }: ListarPedidoUseCaseRequest): Promise<ListarPedidoUseCaseResponse> {
        const hasCliente = await this.clienteRepository.findById(clienteId)

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        const pedido = await this.pedidoRepository.listOrderConcluded(clienteId)

        return {
            pedido,
        }
    }
}
