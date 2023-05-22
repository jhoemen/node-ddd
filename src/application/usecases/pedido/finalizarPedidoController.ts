import { Controller } from '../../../infra/controller'
import {
    HttpResponse,
    fail,
    clientError,
    ok,
} from '../../../infra/httpResponse'

import { FinalizarPedido } from './finalizarPedido'
import { MissingParamError } from '../../../utils/errors'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'

type FinalizarPedidoUseCaseRequest = {
    clienteId: UniqueEntityID
}

export class FinalizarPedidoController implements Controller {
    constructor(private finalizarPedido: FinalizarPedido) {}

    async handle({
        clienteId,
    }: FinalizarPedidoUseCaseRequest): Promise<HttpResponse> {
        if (!clienteId) {
            return fail(new MissingParamError('cliente'))
        }

        try {
            await this.finalizarPedido.execute({
                clienteId,
            })

            return ok()
        } catch (error: any) {
            return fail(new Error(error?.message))
        }
    }
}
