import { Controller } from '../../controller'
import { ProdutoRepository } from '../../../domain/repositories/produtoRepository'
import { AtualizarProduto } from '../../../application/usecases/atualizarProduto/atualizarProduto'
import { AtualizarProdutoController } from '../../../application/usecases/atualizarProduto/atualizarProdutoController'

export function atualizarProdutoControllerFactory(produtoRepository: ProdutoRepository): Controller {
    const produto = new AtualizarProduto(produtoRepository)
    const produtoController = new AtualizarProdutoController(produto)

    return produtoController
}
