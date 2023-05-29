import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { Produto } from '../../../domain/entities/produto/produto'

interface ListarProdutoUseCaseResponse {
    produto: Produto[] | []
}

export class ListarProduto {
    constructor(private produtoRepository: ProdutoRepository) {}

    async execute(): Promise<ListarProdutoUseCaseResponse> {
        const produto = await this.produtoRepository.getAll()
        return {
            produto,
        }
    }
}
