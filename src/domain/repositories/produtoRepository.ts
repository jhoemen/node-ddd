import { UniqueEntityID } from '../../utils/helpers/unique-entity-id'
import { Produto } from '../entities/produto/produto'

export interface ProdutoRepository {
    findById(id: UniqueEntityID): Promise<Produto | null>
    getAll(): Promise<Produto[] | []>
    create(produto: Produto): Promise<void>
}
