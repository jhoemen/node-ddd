import { Cliente } from '../entities/cliente'

export interface IClientesRepository {
  findById(id: string): Promise<Cliente | null>
  findByCpf(cpf: string): Promise<Cliente | null>
  findByEmail(email: string): Promise<Cliente | null>
  create(cliente: Cliente): Promise<void>
}