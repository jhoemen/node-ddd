import { Cliente } from '../../../domain/entities/cliente'
import { ClientesRepository } from '../../repositories/clientesRepository'

interface CriaClienteUseCaseRequest {
  nome: string
  email: string
  cpf: string
  password: string
  endereco: string
}

interface CriaClienteUseCaseResponse {
  cliente: Cliente
}

export class CriarCliente {
  constructor(private clientesRepository: ClientesRepository) {}

  async execute({nome, email, cpf, password, endereco}: CriaClienteUseCaseRequest): Promise<CriaClienteUseCaseResponse> {
    // const hasCliente = await this.clientesRepository.findByCpf(cpf);
    
    // if (hasCliente) {
    //   throw new Error('Cliente exists. - ' + hasCliente.nome);
    // }
    
    const cliente = Cliente.create({
      nome,
      email,
      cpf,
      password,
      endereco
    })

    await this.clientesRepository.create(cliente)

    return {
      cliente,
    }
  }
}