import { Controller } from '../../../infra/controller'
import { HttpResponse, ok, unauthorized } from '../../../infra/httpResponse'

import { LoginCliente } from './loginCliente'

interface LoginClienteUseCaseRequest {
    email: string
    password: string
}

export class LoginClienteController implements Controller {
    constructor(private loginCliente: LoginCliente) {}

    async handle({ email, password }: LoginClienteUseCaseRequest): Promise<HttpResponse> {
        try {
            const result = await this.loginCliente.auth({
                email,
                password,
            })

            const cliente = {
                id: result.cliente.id.toString(),
                nome: result.cliente.props.nome,
                email: result.cliente.props.email,
            }

            const adpterResult = {
                token: result.accessToken,
                cliente,
            }

            return ok(adpterResult)
        } catch (error: any) {
            return unauthorized(new Error(error?.message))
        }
    }
}
