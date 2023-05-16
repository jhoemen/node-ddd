import { Controller } from '../../../infra/controller'
import {
  HttpResponse,
  fail,
  clientError,
  ok,
} from '../../../infra/httpResponse'

import { CriarCliente } from './criarCliente'

interface LoginClienteUseCaseRequest {
  email: string
  password: string
}

export class CriarClienteController implements Controller {
  constructor(private criarCliente: CriarCliente) {}
  
  async handle({
    email,
    password
  }: LoginClienteUseCaseRequest): Promise<HttpResponse> {
    // const result = await this.criarCliente.auth({
    //   email,
    //   password
    // })

    return ok('result')
  }

}