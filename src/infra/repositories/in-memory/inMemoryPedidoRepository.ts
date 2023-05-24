import { Pedido } from '../../../domain/entities/pedido/pedido'
import { PedidoRepository } from '../../../application/repositories/pedidoRepository'
import { Produto } from '../../../domain/entities/produto/produto'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'

export class InMemoryPedidoRepository implements PedidoRepository {
    public items: Pedido[] = []

    async findBySituationPendant(clienteId: UniqueEntityID): Promise<Pedido[] | []> {
        const pedido = this.items.filter((pedido) => pedido && pedido.situacao === 'Pendente' && pedido.clienteId === clienteId)

        if (!pedido) {
            return []
        }

        return pedido
    }

    async listOrderConcluded(clienteId: UniqueEntityID): Promise<Pedido[] | []> {
        const pedido = this.items.filter((pedido) => pedido && pedido.situacao === 'Concluido' && pedido.clienteId === clienteId)

        if (!pedido) {
            return []
        }

        return pedido
    }

    async getCartPendant(clienteId: UniqueEntityID): Promise<UniqueEntityID | undefined> {
        const pedido = this.items.find((pedido) => pedido && pedido.situacao === 'Pendente' && pedido.clienteId === clienteId)

        if (!pedido) {
            return undefined
        }

        return pedido.id
    }

    async clearCartPendant(pedidoId: UniqueEntityID): Promise<void> {
        const pedidoIndex = this.items.findIndex((pedido) => pedido && pedido.situacao === 'Pendente' && pedido.id === pedidoId)

        this.items.splice(pedidoIndex, 1)
    }

    async addProductCart(pedidoId: UniqueEntityID, produto: Produto[]): Promise<void> {
        const pedidoIndex = this.items.findIndex((pedido) => pedido && pedido.situacao === 'Pendente' && pedido.id === pedidoId)

        this.items[pedidoIndex].produto.push(produto[0])
    }

    async delProductCart(pedidoId: UniqueEntityID, produtoId: UniqueEntityID): Promise<void> {
        const pedidoIndex = this.items.findIndex((pedido) => pedido && pedido.situacao === 'Pendente' && pedido.id === pedidoId)
        const produtos = this.items[pedidoIndex].produto.filter((produto) => produto && produto.id !== produtoId)

        this.items[pedidoIndex].produto = produtos
    }

    async checkoutCart(pedidoId: UniqueEntityID): Promise<void> {
        const pedidoIndex = this.items.findIndex((pedido) => pedido && pedido.situacao === 'Pendente' && pedido.id === pedidoId)

        this.items[pedidoIndex].situacao = 'Concluido'
    }

    async create(pedido: Pedido) {
        this.items.push(pedido)
    }
}
