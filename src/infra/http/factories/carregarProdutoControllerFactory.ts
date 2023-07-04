import { Controller } from '../../controller'
import { CarregarProduto } from '../../../application/usecases/carregarProduto/carregarProduto'
import { CarregarProdutoController } from '../../../application/usecases/carregarProduto/carregarProdutoController'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'

export function carregarProdutoControllerFactory(produtoRepository: ProdutoRepository): Controller {
    const produto = new CarregarProduto(produtoRepository)
    const produtoController = new CarregarProdutoController(produto)

    return produtoController
}
