import { InMemoryClienteRepository } from '../../repositories/in-memory/inMemoryclienteRepository'
import { InMemoryPedidoRepository } from '../../repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../repositories/in-memory/inMemoryProdutoRepository'
import { DBProdutoRepository } from '../../repositories/mysql/ProdutoRepository'

export = new (class inMemoryRepository {
    inMemoryClienteRepository = new InMemoryClienteRepository()
    inMemoryProdutoRepository = new InMemoryProdutoRepository()
    inMemoryPedidoRepository = new InMemoryPedidoRepository()

    ProdutoRepository = new DBProdutoRepository()
})()
