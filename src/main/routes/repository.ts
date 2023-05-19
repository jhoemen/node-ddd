import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'
import { InMemoryPedidoRepository } from '../../../test/repositories/in-memory/inMemoryPedidoRepository'
import { InMemoryProdutoRepository } from '../../../test/repositories/in-memory/inMemoryProdutoRepository'

// export function inMemoryClienteRepository() {
//     const inMemoryClienteRepository = new InMemoryClienteRepository()
//     return  inMemoryClienteRepository
// }

export = new class inMemoryRepository {
    inMemoryClienteRepository = new InMemoryClienteRepository()
    inMemoryProdutoRepository = new InMemoryProdutoRepository
    inMemoryPedidoRepository = new InMemoryPedidoRepository
}