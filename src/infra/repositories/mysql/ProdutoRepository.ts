import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { Produto } from '../../../domain/entities/produto/produto'
import models from '../../database/models'
import { ProdutoRepositoryMapper } from '../mysql/ProdutoRepositoryMapper'

export class DBProdutoRepository implements ProdutoRepository {
    public items: Produto[] = []

    async findById(id: UniqueEntityID): Promise<Produto | null> {
        const produtos = this.items.find((produto) => produto.id.toString() === id.toString())

        if (!produtos) {
            return null
        }

        return produtos
    }

    async getAll(): Promise<Produto[] | []> {
        const produtos = await models.produtos.findAll()
        return produtos.map(ProdutoRepositoryMapper.toEntity)
    }

    async create(produto: Produto) {
        return await models.produtos.create(produto)
    }
}
