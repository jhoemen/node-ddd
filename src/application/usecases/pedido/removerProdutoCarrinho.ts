import { Produto } from '../../../domain/entities/produto'
import { PedidoRepository } from '../../repositories/pedidoRepository'
import { ProdutoRepository } from '../../repositories/produtoRepository'
import { Pedido } from '../../../domain/entities/pedido'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClienteRepository } from '../../repositories/clienteRepository'

interface RemoverProdutoCarrinhoUseCaseRequest {
    clienteId: UniqueEntityID
    produtoId: UniqueEntityID
}

export class RemoverProdutoCarrinho {
    constructor(
        private pedidoRepository: PedidoRepository,
        private produtoRepository: ProdutoRepository,
        private clienteRepository: ClienteRepository
    ) {}

    async execute({
        clienteId,
        produtoId,
    }: RemoverProdutoCarrinhoUseCaseRequest): Promise<void> {
        const hasProduto = await this.produtoRepository.findById(produtoId)
        const hasCliente = await this.clienteRepository.findById(clienteId)
        const cartPendantId = await this.pedidoRepository.getCartPendant(
            clienteId
        )

        if (!cartPendantId) {
            throw new Error('Pedido não localizado.')
        }

        if (!hasProduto) {
            throw new Error('Produto não localizado.')
        }

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        await this.pedidoRepository.delProductCart(cartPendantId, produtoId)
    }
}
