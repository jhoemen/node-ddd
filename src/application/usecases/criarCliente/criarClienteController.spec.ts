import { InMemoryClienteRepository } from '../../../infra/repositories/in-memory/inMemoryclienteRepository'
import { CriarCliente } from './criarCliente'
import { CriarClienteController } from './criarClienteController'

describe('criar cliente', () => {
    it('Should return 200 when create cliente', async () => {
        const clienteRepository = new InMemoryClienteRepository()

        const cliente = {
            nome: 'jonathan da silva pereira',
            email: 'jhoemen@gmail.com',
            cpf: '038.905.131-40',
            password: '123',
            password_confirmation: '123',
        }

        const criarCliente = new CriarCliente(clienteRepository)
        const sut = new CriarClienteController(criarCliente)

        const response = await sut.handle({
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            password: cliente.password,
            password_confirmation: cliente.password_confirmation,
        })

        expect(response.statusCode).toBe(200)
    })

    it('Should return 400 when invalid customer password confirmation provided', async () => {
        const clienteRepository = new InMemoryClienteRepository()

        const cliente = {
            nome: 'jonathan da silva pereira',
            email: 'jhoemen@gmail.com',
            cpf: '038.905.131-40',
            password: '123',
            password_confirmation: '1234',
        }

        const criarCliente = new CriarCliente(clienteRepository)
        const sut = new CriarClienteController(criarCliente)

        const response = await sut.handle({
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            password: cliente.password,
            password_confirmation: cliente.password_confirmation,
        })

        expect(response.statusCode).toBe(400)
    })

    it('Should return 400 when invalid customer data is provided', async () => {
        const clienteRepository = new InMemoryClienteRepository()

        const cliente = {
            nome: 'jonathan da silva pereira',
            email: 'jhoemen@gmail',
            cpf: '038.905.131-401',
            password: '123',
            password_confirmation: '123',
        }

        const criarCliente = new CriarCliente(clienteRepository)
        const sut = new CriarClienteController(criarCliente)

        const response = await sut.handle({
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            password: cliente.password,
            password_confirmation: cliente.password_confirmation,
        })

        console.log('response-', response)

        expect(response.statusCode).toBe(400)
    })
})
