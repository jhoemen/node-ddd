import { Cliente } from '../../../domain/entities/cliente'
import { ClienteRepository } from '../../repositories/clienteRepository'
import { Encrypter } from '../../../utils/helpers/encrypter'

interface CriaClienteUseCaseRequest {
    nome: string
    email: string
    cpf: string
    password: string
}

interface CriaClienteUseCaseResponse {
    cliente: Cliente
}

export class CriarCliente {
    constructor(private clienteRepository: ClienteRepository) {}

    async execute({ nome, email, cpf, password }: CriaClienteUseCaseRequest): Promise<CriaClienteUseCaseResponse> {
        const hasCliente = await this.clienteRepository.findByCpf(cpf)

        if (hasCliente) {
            throw new Error('Já existe cliente com o cpf informado.')
        }

        const encrypter = new Encrypter()
        password = await encrypter.criptografar(password)

        const cliente = Cliente.create({
            nome,
            email,
            cpf,
            password,
        })

        await this.clienteRepository.create(cliente)

        return {
            cliente,
        }
    }
}
