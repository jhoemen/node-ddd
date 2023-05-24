import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { Controller } from '../../../infra/controller'
import { HttpResponse, fail, clientError, ok } from '../../../infra/httpResponse'

import { ListarPedido } from './listarPedido'

interface ListarPedidoUseCaseRequest {
    clienteId: UniqueEntityID
}

export class ListarPedidoController implements Controller {
    constructor(private listarPedido: ListarPedido) {}

    async handle({ clienteId }: ListarPedidoUseCaseRequest): Promise<HttpResponse> {
        try {
            const result = await this.listarPedido.execute({
                clienteId,
            })

            var listAdapterResult = new Array()

            result.pedido.forEach((item) => {
                const adapterResult = {
                    id: item.id.toString(),
                    ...item.props,
                }

                listAdapterResult.push(adapterResult)
            })

            return ok(listAdapterResult)
        } catch (error: any) {
            return fail(new Error(error?.message))
        }
    }
}
