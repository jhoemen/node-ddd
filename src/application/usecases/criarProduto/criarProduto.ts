import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { Produto } from '../../../domain/entities/produto/produto'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

interface CriarProdutoUseCaseRequest {
    nome: string
    descricao: string
    preco: string
    imagem: string
}

interface CriarProdutoUseCaseResponse {
    produto: Produto | null
}

export class CriarProduto {
    constructor(private produtoRepository: ProdutoRepository) {}

    async execute({ nome, descricao, preco, imagem }: CriarProdutoUseCaseRequest): Promise<CriarProdutoUseCaseResponse> {
        const produto = Produto.create({
            nome,
            descricao,
            preco,
            imagem,
        })

        await this.produtoRepository.create(produto)

        return {
            produto,
        }
    }
}
