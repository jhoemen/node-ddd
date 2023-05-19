import { PedidoRepository } from "../../../src/application/repositories/pedidoRepository"
import { UniqueEntityID } from "../../../src/core/entities/unique-entity-id"
import { Pedido } from "../../../src/domain/entities/pedido"

export class InMemoryPedidoRepository implements PedidoRepository {    
    public items: Pedido[] = []

    async findBySituationPendant(): Promise<Pedido[] | null> {
        const pedido = this.items.filter((pedido) => pedido.situacao == "Pendente")

        if(!pedido) {
            return null
        }

        return pedido
    }

    async create(pedido: Pedido) {
        this.items.push(pedido)
    }
}