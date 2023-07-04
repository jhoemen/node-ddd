import { Controller } from '../../controller'
import { InMemoryProdutoRepository } from '../../repositories/in-memory/inMemoryProdutoRepository'
import { CarregarProduto } from '../../../application/usecases/carregarProduto/carregarProduto'
import { CarregarProdutoController } from '../../../application/usecases/carregarProduto/carregarProdutoController'

export function carregarProdutoControllerFactory(inMemoryProdutoRepository: InMemoryProdutoRepository): Controller {
    const produto = new CarregarProduto(inMemoryProdutoRepository)
    const produtoController = new CarregarProdutoController(produto)

    return produtoController
}
