import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { Produto } from '../../../domain/entities/produto/produto'

export class InMemoryProdutoRepository implements ProdutoRepository {
    public items: Produto[] = []

    public constructor() {
        var idProduto = new UniqueEntityID('767fe3f2-9983-48ab-a20d-4de74175db25')

        var produto = new Produto(
            {
                nome: 'Produto Teste 1',
                descricao: 'Descrição do produto teste 1',
                preco: '10.00',
                imagem: 'https://braswu.vteximg.com.br/arquivos/ids/204554-1000-1000/img-produto-teste--1-.png?v=637850297273230000',
            },
            idProduto
        )

        this.items.push(produto)

        var idProduto = new UniqueEntityID('c8ed6c49-910c-46e9-9b25-2c14f18338d9')

        var produto = new Produto(
            {
                nome: 'Produto Teste 2',
                descricao: 'Descrição do produto teste 2',
                preco: '20.00',
                imagem: 'https://static3.tcdn.com.br/img/img_prod/468236/produto_teste_auaha_7625_1_f816ad73890b2db46e6e460c44ae5d22.png',
            },
            idProduto
        )

        this.items.push(produto)

        var idProduto = new UniqueEntityID('eadbad49-d935-4a26-afcd-5c89019751e9')

        var produto = new Produto(
            {
                nome: 'Produto Teste 3',
                descricao: 'Descrição do produto teste 3',
                preco: '30.00',
                imagem: 'https://images.tcdn.com.br/img/img_prod/477608/produto_teste_auaha_100519_3_a54bab0298356a66aa94c7d7b027314b.png',
            },
            idProduto
        )

        this.items.push(produto)
    }
    delete(id: UniqueEntityID): Promise<null> {
        throw new Error('Method not implemented.')
    }
    update(produto: Produto): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async findById(id: UniqueEntityID): Promise<Produto | null> {
        const produto = this.items.find((produto) => produto.id.toString() === id.toString())

        if (!produto) {
            return null
        }

        return produto
    }

    async getAll(): Promise<Produto[] | []> {
        return this.items
    }

    async create(produto: Produto) {
        this.items.push(produto)
    }
}
