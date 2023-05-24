import { InMemoryClienteRepository } from '../../../infra/repositories/in-memory/inMemoryclienteRepository'
import { Cliente } from '../../../domain/entities/cliente/cliente'
import { CriarCliente } from './criarCliente'

describe('criar cliente', () => {
    it('Should create cliente', async () => {
        const clienteRepository = new InMemoryClienteRepository()

        const cliente = Cliente.create({
            nome: 'jonathan da silva pereira',
            email: 'jhoemen@gmail.com',
            cpf: '038.905.131-40',
            password: '123',
        })

        const sut = new CriarCliente(clienteRepository)

        const response = await sut.execute({
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            password: cliente.password,
        })

        expect(response).toBeTruthy()
    })
})
