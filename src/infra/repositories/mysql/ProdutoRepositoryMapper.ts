import { Produto } from '../../../domain/entities/produto/produto'

const ProdutoRepositoryMapper = {
    toEntity({ dataValues }) {
        const { id, nome, descricao, preco, imagem, created_at, updated_at } = dataValues

        return new Produto({ nome, descricao, preco, imagem, createdAt: created_at, updatedAt: updated_at }, id)
    },

    toDatabase(dataValues) {
        const { nome, descricao, preco, imagem } = dataValues

        return { nome, descricao, preco, imagem }
    },
}

export { ProdutoRepositoryMapper }
