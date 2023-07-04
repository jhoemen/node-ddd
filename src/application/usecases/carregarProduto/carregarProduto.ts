import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { Produto } from '../../../domain/entities/produto/produto'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

interface CarregarProdutoUseCaseRequest {
    id: UniqueEntityID
}

interface CarregarProdutoUseCaseResponse {
    produto: Produto | null
}

export class CarregarProduto {
    constructor(private produtoRepository: ProdutoRepository) {}

    async execute({ id }: CarregarProdutoUseCaseRequest): Promise<CarregarProdutoUseCaseResponse> {
        const produto = await this.produtoRepository.findById(id)
        return {
            produto,
        }
    }
}
