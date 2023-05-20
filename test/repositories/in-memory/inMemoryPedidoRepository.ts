import { PedidoRepository } from '../../../src/application/repositories/pedidoRepository'
import { UniqueEntityID } from '../../../src/core/entities/unique-entity-id'
import { Pedido } from '../../../src/domain/entities/pedido'
import { Produto } from '../../../src/domain/entities/produto'

export class InMemoryPedidoRepository implements PedidoRepository {
    public items: Pedido[] = []

    async findBySituationPendant(
        clienteId: UniqueEntityID
    ): Promise<Pedido[] | []> {
        const pedido = this.items.filter(
            (pedido) =>
                pedido &&
                pedido.situacao == 'Pendente' &&
                pedido.clienteId === clienteId
        )

        if (!pedido) {
            return []
        }

        return pedido
    }

    async getCartPendant(
        clienteId: UniqueEntityID
    ): Promise<UniqueEntityID | undefined> {
        const pedido = this.items.find(
            (pedido) =>
                pedido &&
                pedido.situacao == 'Pendente' &&
                pedido.clienteId === clienteId
        )

        if (!pedido) {
            return undefined
        }

        return pedido.id
    }

    async clearCartPendant(clienteId: UniqueEntityID): Promise<void> {
        const pedido = this.items.filter(
            (pedido) =>
                pedido &&
                pedido.situacao !== 'Pendente' &&
                pedido.clienteId === clienteId
        )
        this.items = pedido
    }

    async addProductCart(
        pedidoId: UniqueEntityID,
        produto: Produto[]
    ): Promise<void> {
        const pedidoIndex = this.items.findIndex(
            (pedido) =>
                pedido &&
                pedido.situacao == 'Pendente' &&
                pedido.id === pedidoId
        )

        this.items[pedidoIndex].produto.push(produto[0])
    }

    async delProductCart(
        pedidoId: UniqueEntityID,
        produtoId: UniqueEntityID
    ): Promise<void> {
        const pedidoIndex = this.items.findIndex(
            (pedido) =>
                pedido &&
                pedido.situacao == 'Pendente' &&
                pedido.id === pedidoId
        )
        const produtos = this.items[pedidoIndex].produto.filter(
            (produto) => produto && produto.id !== produtoId
        )

        this.items[pedidoIndex].produto = produtos
    }

    async checkoutCart(pedidoId: UniqueEntityID): Promise<void> {
        const pedidoIndex = this.items.findIndex(
            (pedido) =>
                pedido &&
                pedido.situacao == 'Pendente' &&
                pedido.id === pedidoId
        )

        this.items[pedidoIndex].situacao = 'Concluido'
    }

    async create(pedido: Pedido) {
        this.items.push(pedido)
    }
}
