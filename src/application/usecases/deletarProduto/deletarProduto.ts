import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { Produto } from '../../../domain/entities/produto/produto'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

interface DeletarProdutoUseCaseRequest {
    id: UniqueEntityID
}

export class DeletarProduto {
    constructor(private produtoRepository: ProdutoRepository) {}

    async execute({ id }: DeletarProdutoUseCaseRequest): Promise<void | null> {
        return await this.produtoRepository.delete(id)
    }
}
