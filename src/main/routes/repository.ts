import { InMemoryClienteRepository } from '../../../test/repositories/in-memory/inMemoryclienteRepository'

export function inMemoryClienteRepository() {
    const inMemoryClienteRepository = new InMemoryClienteRepository()
    return  inMemoryClienteRepository
}