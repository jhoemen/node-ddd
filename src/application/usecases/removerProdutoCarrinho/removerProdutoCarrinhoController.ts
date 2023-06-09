import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'

import { RemoverProdutoCarrinho } from './removerProdutoCarrinho'
import { MissingParamError } from '../../../utils/errors'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'

type RemoverProdutoCarrinhoUseCaseRequest = {
    clienteId: UniqueEntityID
    produtoId: UniqueEntityID
}

export class RemoverProdutoCarrinhoController implements Controller {
    constructor(private removerProdutoCarrinho: RemoverProdutoCarrinho) {}

    async handle({ clienteId, produtoId }: RemoverProdutoCarrinhoUseCaseRequest): Promise<HttpResponse> {
        if (!clienteId) {
            return clientError(new MissingParamError('cliente'))
        }

        if (!produtoId) {
            return clientError(new MissingParamError('produto'))
        }

        try {
            await this.removerProdutoCarrinho.execute({
                clienteId,
                produtoId,
            })

            return ok()
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
