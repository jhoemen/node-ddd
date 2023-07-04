import { Controller } from '../../controller'
import { ListarProduto } from '../../../application/usecases/listarProduto/listarProduto'
import { ListarProdutoController } from '../../../application/usecases/listarProduto/listarProdutoController'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'

export function listarProdutoControllerFactory(produtoRepository: ProdutoRepository): Controller {
    const listarProduto = new ListarProduto(produtoRepository)
    const listarProdutoController = new ListarProdutoController(listarProduto)

    return listarProdutoController
}
