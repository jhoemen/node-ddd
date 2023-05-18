import { ClientesRepository } from "../../../src/application/repositories/clientesRepository"
import { Cliente } from "../../../src/domain/entities/cliente"

export class InMemoryClienteRepository implements ClientesRepository {    
    public items: Cliente[] = []

    async findByCpf(cpf: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.cpf === cpf)

        if(!cliente) {
            return null
        }

        return cliente
    }

    async findByEmail(email: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.email === email)

        if(!cliente) {
            return null
        }

        return cliente
    }

    async findById(id: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.id.toString() === id)

        if(!cliente) {
            return null
        }

        return cliente
    }

    async create(cliente: Cliente) {
        this.items.push(cliente)
    }

}