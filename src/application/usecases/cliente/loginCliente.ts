import { Cliente } from '../../../domain/entities/cliente'
import { ClientesRepository } from '../../repositories/clientesRepository'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'

const EmailValidator = require('../../../utils/helpers/email-validator')
const Encrypter = require('../../../utils/helpers/encrypter')
const TokenGenerator = require('../../../utils/helpers/token-generator')
const env = require('../../../main/config/env')

interface LoginClienteUseCaseRequest {
  email: string
  password: string
}

export class LoginCliente {
  constructor(private clientesRepository: ClientesRepository){}

  async auth ({email, password}: LoginClienteUseCaseRequest) {
    const emailValidator = new EmailValidator()

    if (!email) {
      return new MissingParamError('email')
    }

    if (!emailValidator.isValid(email)) {
      return new InvalidParamError('email')
    }

    if (!password) {
      return new MissingParamError('password')
    }
    
    const cliente = await this.clientesRepository.findByEmail(email)

    const encrypter = new Encrypter()

    const isValid = cliente && await encrypter.compare(password, cliente.password)

    if (isValid) {
      const tokenGenerator = new TokenGenerator(env.tokenSecret)
      const accessToken = await tokenGenerator.generate(cliente?.id)

      return accessToken
    }
    return null
  }
}