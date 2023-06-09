import { PedidoRepository } from '../../../domain/repositories/pedidoRepository'
import { Pedido } from '../../../domain/entities/pedido/pedido'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

interface ListarProdutoCarrinhoUseCaseRequest {
    clienteId: UniqueEntityID
}

interface ListarProdutoCarrinhoUseCaseResponse {
    pedido: Pedido[] | []
}

export class ListarProdutoCarrinho {
    constructor(private pedidoRepository: PedidoRepository, private clienteRepository: ClienteRepository) {}

    async execute({ clienteId }: ListarProdutoCarrinhoUseCaseRequest): Promise<ListarProdutoCarrinhoUseCaseResponse> {
        const hasCliente = await this.clienteRepository.findById(clienteId)

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        const pedido = await this.pedidoRepository.findBySituationPendant(clienteId)

        return {
            pedido,
        }
    }
}
