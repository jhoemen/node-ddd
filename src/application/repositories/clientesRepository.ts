import { Cliente } from '../../domain/entities/cliente'

export interface ClientesRepository {
  findById(id: string): Promise<Cliente | null>
  findByCpf(cpf: string): Promise<Cliente | null>
  findByEmail(email: string): Promise<Cliente | null>
  create(cliente: Cliente): Promise<void>
}