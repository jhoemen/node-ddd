import { Entity } from '../../entity'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { Produto } from '../produto/produto'

export interface PedidoProps {
    clienteId: UniqueEntityID
    produto: Produto[]
    situacao: string
    createdAt?: Date
    updatedAt?: Date
}

export class Pedido extends Entity<PedidoProps> {
    get clienteId() {
        return this.props.clienteId
    }

    get produto() {
        return this.props.produto
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

    set clienteId(clienteId: UniqueEntityID) {
        this.props.clienteId = clienteId
    }

    set produto(produto: Produto[]) {
        this.props.produto = produto
    }

    set situacao(situacao: string) {
        this.props.situacao = situacao
    }

    static create(props: PedidoProps, id?: UniqueEntityID) {
        const pedido = new Pedido(
            {
                ...props,
                situacao: props.situacao ?? 'Pendente',
                createdAt: props.createdAt ?? new Date(),
            },
            id
        )

        return pedido
    }
}
