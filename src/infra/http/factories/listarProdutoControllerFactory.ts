import { Controller } from '../../controller'
import { ListarProduto } from '../../../application/usecases/listarProduto/listarProduto'
import { InMemoryProdutoRepository } from '../../repositories/in-memory/inMemoryProdutoRepository'
import { ListarProdutoController } from '../../../application/usecases/listarProduto/listarProdutoController'

export function listarProdutoControllerFactory(inMemoryProdutoRepository: InMemoryProdutoRepository): Controller {
    const listarProduto = new ListarProduto(inMemoryProdutoRepository)
    const listarProdutoController = new ListarProdutoController(listarProduto)

    return listarProdutoController
}
