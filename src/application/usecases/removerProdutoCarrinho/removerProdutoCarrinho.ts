import { PedidoRepository } from '../../../domain/repositories/pedidoRepository'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

interface RemoverProdutoCarrinhoUseCaseRequest {
    clienteId: UniqueEntityID
    produtoId: UniqueEntityID
}

export class RemoverProdutoCarrinho {
    constructor(private pedidoRepository: PedidoRepository, private produtoRepository: ProdutoRepository, private clienteRepository: ClienteRepository) {}

    async execute({ clienteId, produtoId }: RemoverProdutoCarrinhoUseCaseRequest): Promise<void> {
        const hasProduto = await this.produtoRepository.findById(produtoId)
        const hasCliente = await this.clienteRepository.findById(clienteId)
        const cartPendantId = await this.pedidoRepository.getCartPendant(clienteId)

        if (!hasProduto) {
            throw new Error('Produto não localizado.')
        }

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        if (!cartPendantId) {
            throw new Error('Pedido não localizado.')
        }

        await this.pedidoRepository.delProductCart(cartPendantId, produtoId)
    }
}
