import { Cliente } from '../../../domain/entities/cliente/cliente'
import { ClienteRepository } from '../../repositories/clienteRepository'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'
import { env } from '../../../main/config/env'
import { EmailValidator } from '../../../utils/helpers/email-validator'
import { TokenGenerator } from '../../../utils/helpers/token-generator'
import { Encrypter } from '../../../utils/helpers/encrypter'

interface LoginClienteUseCaseRequest {
    email: string
    password: string
}

export class LoginCliente {
    constructor(private clienteRepository: ClienteRepository) {}

    async auth({ email, password }: LoginClienteUseCaseRequest) {
        const emailValidator = new EmailValidator()

        if (!email) {
            throw new MissingParamError('email')
        }

        if (!emailValidator.isValid(email)) {
            throw new InvalidParamError('email')
        }

        if (!password) {
            throw new MissingParamError('password')
        }

        const cliente = await this.clienteRepository.findByEmail(email)

        const encrypter = new Encrypter()
        const isValid = cliente && (await encrypter.compare(password, cliente.password))

        if (isValid) {
            const tokenGenerator = new TokenGenerator(env.tokenSecret)
            const accessToken = await tokenGenerator.generate(cliente?.id)

            return accessToken
        } else {
            throw new InvalidParamError('email ou password')
        }
    }
}
