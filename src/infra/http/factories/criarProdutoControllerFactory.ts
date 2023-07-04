import { Controller } from '../../controller'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { CriarProduto } from '../../../application/usecases/criarProduto/criarProduto'
import { CriarProdutoController } from '../../../application/usecases/criarProduto/criarProdutoController'

export function criarProdutoControllerFactory(produtoRepository: ProdutoRepository): Controller {
    const produto = new CriarProduto(produtoRepository)
    const produtoController = new CriarProdutoController(produto)

    return produtoController
}
