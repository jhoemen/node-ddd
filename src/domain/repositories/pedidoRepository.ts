import { UniqueEntityID } from '../../utils/helpers/unique-entity-id'
import { Pedido } from '../entities/pedido/pedido'
import { Produto } from '../entities/produto/produto'

export interface PedidoRepository {
    findBySituationPendant(clienteId: UniqueEntityID): Promise<Pedido[] | []>
    listOrderConcluded(clienteId: UniqueEntityID): Promise<Pedido[] | []>
    getCartPendant(clienteId: UniqueEntityID): Promise<UniqueEntityID | undefined>
    clearCartPendant(pedidoId: UniqueEntityID): Promise<void>
    addProductCart(pedidoId: UniqueEntityID | undefined, produto: Produto[]): Promise<void>
    delProductCart(pedidoId: UniqueEntityID | undefined, produto: UniqueEntityID | undefined): Promise<void>
    checkoutCart(pedidoId: UniqueEntityID): Promise<void>
    create(pedido: Pedido): Promise<void>
}
