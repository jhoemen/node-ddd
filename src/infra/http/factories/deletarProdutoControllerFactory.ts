import { Controller } from '../../controller'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { DeletarProduto } from '../../../application/usecases/deletarProduto/deletarProduto'
import { DeletarProdutoController } from '../../../application/usecases/deletarProduto/deletarProdutoController'

export function deletarProdutoControllerFactory(produtoRepository: ProdutoRepository): Controller {
    const produto = new DeletarProduto(produtoRepository)
    const produtoController = new DeletarProdutoController(produto)

    return produtoController
}
