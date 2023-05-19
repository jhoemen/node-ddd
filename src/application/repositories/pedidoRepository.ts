import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Pedido } from '../../domain/entities/pedido'

export interface PedidoRepository {
  findBySituationPendant(clienteId: UniqueEntityID): Promise<Pedido[] | null>
  getCartPendant(clienteId: UniqueEntityID): Promise<UniqueEntityID | undefined>  
  clearCartPendant(clienteId: UniqueEntityID): Promise<void>  
  create(pedido: Pedido): Promise<void>
}