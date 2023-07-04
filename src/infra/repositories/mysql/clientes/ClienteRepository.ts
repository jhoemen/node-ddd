import { ClienteRepository } from '../../../../domain/repositories/clienteRepository'
import { UniqueEntityID } from '../../../../utils/helpers/unique-entity-id'
import models from '../../../database/models'
import { ClienteRepositoryMapper } from './ClienteRepositoryMapper'
import { Cliente } from '../../../../domain/entities/cliente/cliente'

export class DBClienteRepository implements ClienteRepository {
    async findByCpf(cpf: string): Promise<Cliente | null> {
        const cliente = await models.clientes.findOne({
            where: { cpf: cpf },
        })

        if (!cliente) {
            return null
        }

        return ClienteRepositoryMapper.toEntity(cliente)
    }

    async findByEmail(email: string): Promise<Cliente | null> {
        const cliente = await models.clientes.findOne({
            where: { email: email },
        })

        return ClienteRepositoryMapper.toEntity(cliente)
    }

    async findById(id: UniqueEntityID): Promise<Cliente | null> {
        const produto = await models.clientes.findOne({
            where: { id: id },
        })

        return ClienteRepositoryMapper.toEntity(produto)
    }

    async getAll(): Promise<Cliente[] | []> {
        const clientes = await models.clientes.findAll()
        return clientes.map(ClienteRepositoryMapper.toEntity)
    }

    async create(cliente: Cliente) {
        const clienteDto = ClienteRepositoryMapper.toDatabase(cliente)
        return await models.clientes.create(clienteDto)
    }
}
