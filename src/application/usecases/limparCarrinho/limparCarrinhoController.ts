import { Controller } from '../../../infra/controller'
import { HttpResponse, fail, clientError, ok } from '../../../infra/httpResponse'

import { LimparCarrinho } from './limparCarrinho'
import { MissingParamError } from '../../../utils/errors'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

type LimparCarrinhoUseCaseRequest = {
    clienteId: UniqueEntityID
}

export class LimparCarrinhoController implements Controller {
    constructor(private limparCarrinho: LimparCarrinho) {}

    async handle({ clienteId }: LimparCarrinhoUseCaseRequest): Promise<HttpResponse> {
        if (!clienteId) {
            return fail(new MissingParamError('cliente'))
        }

        try {
            await this.limparCarrinho.execute({
                clienteId,
            })

            return ok()
        } catch (error: any) {
            return fail(new Error(error?.message))
        }
    }
}
