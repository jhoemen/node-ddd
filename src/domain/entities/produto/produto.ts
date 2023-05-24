import { Entity } from '../../entity'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

export interface ProdutoProps {
    nome: string
    descricao: string
    preco: string
    imagem: string
    createdAt?: Date
    updatedAt?: Date
}

export class Produto extends Entity<ProdutoProps> {
    get nome() {
        return this.props.nome
    }

    get descricao() {
        return this.props.descricao
    }

    get preco() {
        return this.props.preco
    }

    get imagem() {
        return this.props.imagem
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    set nome(nome: string) {
        this.props.nome = nome
    }

    set descricao(descricao: string) {
        this.props.descricao = descricao
    }

    set preco(preco: string) {
        this.props.preco = preco
    }

    set imagem(imagem: string) {
        this.props.imagem = imagem
    }

    static create(props: ProdutoProps, id?: UniqueEntityID) {
        const produto = new Produto(
            {
                ...props,
                createdAt: props.createdAt ?? new Date(),
            },
            id
        )

        return produto
    }
}
