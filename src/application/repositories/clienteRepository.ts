import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Cliente } from '../../domain/entities/cliente'

export interface ClienteRepository {
  findById(id: UniqueEntityID): Promise<Cliente | null>
  findByCpf(cpf: string): Promise<Cliente | null>
  findByEmail(email: string): Promise<Cliente | null>
  create(cliente: Cliente): Promise<void>
}