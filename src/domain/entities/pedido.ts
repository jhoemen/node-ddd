import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Cliente } from "./cliente"
import { Produto } from "./produto"

export interface PedidoProps {
    cliente: Cliente
    produtos: Produto
    situacao: string
    createdAt?: Date
    updatedAt?: Date
}

export class Pedido extends Entity<PedidoProps> {
    get cliente() {
        return this.props.cliente
    }

    get produtos() {
        return this.props.produtos
    }

    get situacao() {
        return this.props.situacao
    }

    get createdAt() {
        return this.props.createdAt
    }
    
    get updatedAt() {
        return this.props.updatedAt
    }

    set cliente(cliente: Cliente) {
        this.props.cliente = cliente
    }

    set produtos(produtos: Produto) {
        this.props.produtos = produtos
    }

    set situacao(situacao: string) {
        this.props.situacao = situacao
    }

    static create(props: PedidoProps, id?: UniqueEntityID) {
        const pedido = new Pedido({
            ...props, 
            createdAt: props.createdAt ?? new Date(),
        }, id)
    
        return pedido
      }
}