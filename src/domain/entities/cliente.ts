import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

export interface ClienteProps {
    nome: string
    email: string
    cpf: string
    password: string
    createdAt?: Date
    updatedAt?: Date
  }

export class Cliente extends Entity<ClienteProps> {
    get nome() {
        return this.props.nome
    }

    get email() {
        return this.props.email
    }

    get cpf() {
        return this.props.cpf
    }

    get password() {
        return this.props.password
    }

    get createdAt() {
        return this.props.createdAt
    }
    
    get updatedAt() {
        return this.props.updatedAt
    }

    private touch() {
        this.props.updatedAt = new Date()
      }

    set nome(nome: string) {
        this.props.nome = nome
        this.touch()
    }

    set email(email: string) {
        this.props.email = email
        this.touch()
    }

    set cpf(cpf: string) {
        this.props.cpf = cpf
        this.touch()
    }

    set password(password: string) {
        this.props.password = password
        this.touch()
    }

    static create(props: ClienteProps, id?: UniqueEntityID) {
        const cliente = new Cliente({
            ...props, 
            createdAt: props.createdAt ?? new Date(),
        }, id)
    
        return cliente
      }
}