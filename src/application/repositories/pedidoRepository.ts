import { Pedido } from '../../domain/entities/pedido'

export interface PedidoRepository {
  adicionarProdutoCarrinho(pedido: Pedido): Promise<void>
}