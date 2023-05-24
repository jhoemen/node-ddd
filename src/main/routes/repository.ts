import { InMemoryClienteRepository } from '../../infra/repositories/in-memory/inMemoryclienteRepository'
import { InMemoryPedidoRepository } from '../../infra/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../infra/repositories/in-memory/inMemoryProdutoRepository'

export = new (class inMemoryRepository {
    inMemoryClienteRepository = new InMemoryClienteRepository()
    inMemoryProdutoRepository = new InMemoryProdutoRepository()
    inMemoryPedidoRepository = new InMemoryPedidoRepository()
})()
