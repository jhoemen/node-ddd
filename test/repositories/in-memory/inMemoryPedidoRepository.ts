import { PedidoRepository } from "../../../src/application/repositories/pedidoRepository"
import { UniqueEntityID } from "../../../src/core/entities/unique-entity-id"
import { Pedido } from "../../../src/domain/entities/pedido"

export class InMemoryPedidoRepository implements PedidoRepository {    
    public items: Pedido[] = []

    async findBySituationPendant(clienteId: UniqueEntityID): Promise<Pedido[] | null> {
        const pedido = this.items.filter((pedido) => pedido && pedido.situacao == "Pendente" && pedido.clienteId === clienteId)

        if(!pedido) {
            return null
        }

        return pedido
    }

    async getCartPendant(clienteId: UniqueEntityID): Promise<UniqueEntityID | undefined> {
        const pedido = this.items.find((pedido) => pedido && pedido.situacao == "Pendente" && pedido.clienteId === clienteId)

        if(!pedido) {
            return undefined
        }

        return pedido.id
    }

    async clearCartPendant(clienteId: UniqueEntityID): Promise<void> {
        const pedido = this.items.filter((pedido) => pedido && pedido.situacao !== "Pendente" && pedido.clienteId === clienteId)
        this.items = pedido
    }

    async create(pedido: Pedido) {
        this.items.push(pedido)
    }
}