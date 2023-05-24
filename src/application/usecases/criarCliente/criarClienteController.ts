import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'

import { CriarCliente } from './criarCliente'
import { MissingParamError, InvalidParamPasswordError, InvalidParamError } from '../../../utils/errors'
import { EmailValidator } from '../../../utils/helpers/email-validator'

type LoginClienteUseCaseRequest = {
    nome: string
    email: string
    cpf: string
    password: string
    password_confirmation: string
}

export class CriarClienteController implements Controller {
    constructor(private criarCliente: CriarCliente) {}

    async handle({ nome, email, cpf, password, password_confirmation }: LoginClienteUseCaseRequest): Promise<HttpResponse> {
        const emailValidator = new EmailValidator()

        if (!nome) {
            return clientError(new MissingParamError('nome'))
        }

        if (!email) {
            return clientError(new MissingParamError('email'))
        }

        if (!emailValidator.isValid(email)) {
            return clientError(new InvalidParamError('email'))
        }

        if (!cpf) {
            return clientError(new MissingParamError('cpf'))
        }

        if (!password) {
            return clientError(new InvalidParamPasswordError())
        }

        if (password !== password_confirmation) {
            return clientError(new InvalidParamPasswordError())
        }

        try {
            var result = await this.criarCliente.execute({
                nome,
                email,
                cpf,
                password,
            })

            const adpterResult = {
                id: result.cliente.id.toString(),
                ...result.cliente.props,
            }

            return ok(adpterResult)
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
