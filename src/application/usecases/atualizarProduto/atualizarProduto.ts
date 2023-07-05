import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { Produto } from '../../../domain/entities/produto/produto'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

interface AtualizarProdutoUseCaseRequest {
    id: UniqueEntityID
    nome: string
    descricao: string
    preco: string
    imagem: string
}

interface AtualizarProdutoUseCaseResponse {
    produto: Produto | null
}

export class AtualizarProduto {
    constructor(private produtoRepository: ProdutoRepository) {}

    async execute({ ...props }: AtualizarProdutoUseCaseRequest): Promise<AtualizarProdutoUseCaseResponse> {
        const produto = await this.produtoRepository.findById(props.id)

        if (!produto) {
            throw new Error('Produto não localizado.')
        }

        Object.keys(props).forEach((item) => {
            if (item !== 'id') {
                produto![item] = props[item]
            }
        })

        await this.produtoRepository.update(produto!)

        return {
            produto,
        }
    }
}
