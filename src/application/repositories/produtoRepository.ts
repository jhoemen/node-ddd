import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Produto } from '../../domain/entities/produto/produto'

export interface ProdutoRepository {
    findById(id: UniqueEntityID): Promise<Produto | null>
    create(produto: Produto): Promise<void>
}
