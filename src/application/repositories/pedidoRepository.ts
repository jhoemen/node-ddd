import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Pedido } from '../../domain/entities/pedido'

export interface PedidoRepository {
  findBySituationPendant(clienteId: UniqueEntityID): Promise<Pedido[] | null>
  create(pedido: Pedido): Promise<void>
}