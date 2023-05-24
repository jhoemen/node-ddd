import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'

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

            return ok(result)
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
