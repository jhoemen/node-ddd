import { ProdutoRepository } from "../../../src/application/repositories/produtoRepository"
import { UniqueEntityID } from "../../../src/core/entities/unique-entity-id"
import { Produto } from "../../../src/domain/entities/produto"

export class InMemoryProdutoRepository implements ProdutoRepository {    
    public items: Produto[] = []

    public constructor () {
        const idProduto = new UniqueEntityID('95b57038-089c-4c56-990d-53e61cf08620')

        var produto = new Produto({
            nome: 'Produto Teste',
            descricao: 'Descrição do produto teste',
            preco: '10.00',
            imagem: 'caminho_imagem.jpg'
        })

        this.items.push(produto)

        console.log('InMemoryProdutoRepository', produto)
    }

    async findById(id: UniqueEntityID): Promise<Produto | null> {
        const produto = this.items.find((produto) => produto.id.toString() === id.toString())

        if(!produto) {
            return null
        }

        return produto
    }

    async create(produto: Produto) {
        this.items.push(produto)
    }
}