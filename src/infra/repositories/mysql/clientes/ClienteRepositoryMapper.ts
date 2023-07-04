import { Cliente } from '../../../../domain/entities/cliente/cliente'

const ClienteRepositoryMapper = {
    toEntity({ dataValues }) {
        const { id, nome, cpf, email, password, created_at, updated_at } = dataValues

        return new Cliente({ nome, cpf, email, password, createdAt: created_at, updatedAt: updated_at }, id)
    },

    toDatabase(dataValues) {
        const { id, nome, cpf, email, password } = dataValues
        return { id: id.value, nome, cpf, email, password }
    },
}

export { ClienteRepositoryMapper }
