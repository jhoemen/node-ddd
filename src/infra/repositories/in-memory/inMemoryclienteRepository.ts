import { ClienteRepository } from '../../../application/repositories/clienteRepository'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { Cliente } from '../../../domain/entities/cliente/cliente'

export class InMemoryClienteRepository implements ClienteRepository {
    public items: Cliente[] = []

    async findByCpf(cpf: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.cpf === cpf)

        if (!cliente) {
            return null
        }

        return cliente
    }

    async findByEmail(email: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.email === email)

        if (!cliente) {
            return null
        }

        return cliente
    }

    async findById(id: UniqueEntityID): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.id.toString() === id.toString())

        if (!cliente) {
            return null
        }

        return cliente
    }

    async create(cliente: Cliente) {
        this.items.push(cliente)
    }
}
