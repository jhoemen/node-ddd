import { InMemoryClienteRepository } from '../../../../test/repositories/in-memory/inMemoryclienteRepository'
import { Cliente } from '../../../domain/entities/cliente'
import { CriarCliente } from './criarCliente'

describe('criar cliente', () => {
    it('Should create cliente', async () => {
        const clienteRepository = new InMemoryClienteRepository()

        const cliente = Cliente.create({
            nome: 'jonathan da silva pereira',
            cpf: '038.905.131-40',
            email: 'jhoemen@gmail.com',
            endereco: 'rua da escola, bairro dom aquino',
        })

        clienteRepository.items.push(cliente)

        //system under teste (sut)
        const sut = new CriarCliente(clienteRepository)

        const response = await sut.execute({
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            endereco: cliente.endereco,
        })

        expect(response).toBeTruthy()
    })
})