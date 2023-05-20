import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { Controller } from '../../../infra/controller'
import {
    HttpResponse,
    fail,
    clientError,
    ok,
} from '../../../infra/httpResponse'

import { ListarProdutoCarrinho } from './listarProdutoCarrinho'

interface ListarProdutoCarrinhoUseCaseRequest {
    clienteId: UniqueEntityID
}

export class ListarProdutoCarrinhoController implements Controller {
    constructor(private listarProdutoCarrinho: ListarProdutoCarrinho) {}

    async handle({
        clienteId,
    }: ListarProdutoCarrinhoUseCaseRequest): Promise<HttpResponse> {
        try {
            const result = await this.listarProdutoCarrinho.execute({
                clienteId,
            })

            const adpterResult = {
                id: result.pedido[0].id.toString(),
                ...result?.pedido[0].props,
            }

            return ok(adpterResult)
        } catch (error: any) {
            return fail(new Error(error?.message))
        }
    }
}
