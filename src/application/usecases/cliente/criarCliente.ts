import { Cliente } from '../../../domain/entities/cliente'
import { ClientesRepository } from '../../repositories/clientesRepository'
const Encrypter = require('../../../utils/helpers/encrypter')

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
  constructor(private clientesRepository: ClientesRepository) {}

  async execute({nome, email, cpf, password}: CriaClienteUseCaseRequest): Promise<CriaClienteUseCaseResponse> {
    const hasCliente = await this.clientesRepository.findByCpf(cpf);
    
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

    await this.clientesRepository.create(cliente)

    return {
      cliente,
    }
  }
}