import { Cliente } from '../../domain/entities/cliente'

export interface IServiceCliente {
  findById(id: string): Promise<Cliente | null>
  create(cliente: Cliente): Promise<void>
}