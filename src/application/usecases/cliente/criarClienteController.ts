import { Controller } from '../../../infra/controller'
import { HttpResponse, fail, clientError, ok } from '../../../infra/httpResponse'

import { CriarCliente } from './criarCliente'
import { MissingParamError, InvalidParamPasswordError } from '../../../utils/errors'

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
        if (!nome) {
            return fail(new MissingParamError('nome'))
        }

        if (!email) {
            return fail(new MissingParamError('email'))
        }

        if (!cpf) {
            return fail(new MissingParamError('cpf'))
        }

        if (!password) {
            return fail(new InvalidParamPasswordError())
        }

        if (password !== password_confirmation) {
            return fail(new InvalidParamPasswordError())
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
            return fail(new Error(error?.message))
        }
    }
}
