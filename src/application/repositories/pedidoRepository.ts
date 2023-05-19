import { Pedido } from '../../domain/entities/pedido'

export interface PedidoRepository {
  findBySituationPendant(): Promise<Pedido | null>
  create(pedido: Pedido): Promise<void>
}