import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { Produto } from '../../../domain/entities/produto/produto'
import models from '../../database/models'
import { ProdutoRepositoryMapper } from '../mysql/ProdutoRepositoryMapper'

export class DBProdutoRepository implements ProdutoRepository {
    async delete(id: UniqueEntityID): Promise<null> {
        return await models.produtos.destroy({
            where: {
                id: id,
            },
        })
    }

    async update(produto: Produto): Promise<void> {
        const produtoDto = ProdutoRepositoryMapper.toDatabase(produto)
        return await models.produtos.update({ ...produtoDto }, { where: { id: produto.id } })
    }
    async findById(id: UniqueEntityID): Promise<Produto | null> {
        const produto = await models.produtos.findOne({
            where: { id: id },
        })

        if (!produto) {
            return null
        }

        return ProdutoRepositoryMapper.toEntity(produto)
    }

    async getAll(): Promise<Produto[] | []> {
        const produtos = await models.produtos.findAll()
        return produtos.map(ProdutoRepositoryMapper.toEntity)
    }

    async create(produto: Produto) {
        const produtoDto = ProdutoRepositoryMapper.toDatabase(produto)
        return await models.produtos.create(produtoDto)
    }
}
