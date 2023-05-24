import { Produto } from '../../../domain/entities/produto/produto'
import { PedidoRepository } from '../../../domain/repositories/pedidoRepository'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { Pedido } from '../../../domain/entities/pedido/pedido'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClienteRepository } from '../../../domain/repositories/clienteRepository'

interface AdicionarProdutoCarrinhoUseCaseRequest {
    clienteId: UniqueEntityID
    produto: Produto[]
}

export class AdicionarProdutoCarrinho {
    constructor(private pedidoRepository: PedidoRepository, private produtoRepository: ProdutoRepository, private clienteRepository: ClienteRepository) {}

    async execute({ clienteId, produto }: AdicionarProdutoCarrinhoUseCaseRequest): Promise<void> {
        const hasProduto = await this.produtoRepository.findById(produto[0].id)
        const hasCliente = await this.clienteRepository.findById(clienteId)
        const cartPendantId = await this.pedidoRepository.getCartPendant(clienteId)

        if (!hasProduto) {
            throw new Error('Produto não localizado.')
        }

        if (!hasCliente) {
            throw new Error('Cliente não localizado.')
        }

        const situacao = 'Pendente'

        if (cartPendantId) {
            await this.pedidoRepository.addProductCart(cartPendantId, produto)
        } else {
            const pedido = Pedido.create(
                {
                    clienteId,
                    produto,
                    situacao,
                },
                cartPendantId
            )

            await this.pedidoRepository.create(pedido)
        }
    }
}
