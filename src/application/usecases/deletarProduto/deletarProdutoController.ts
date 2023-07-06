import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { DeletarProduto } from './deletarProduto'

interface DeletarProdutoUseCaseRequest {
    id: UniqueEntityID
}

export class DeletarProdutoController implements Controller {
    constructor(private deletarProduto: DeletarProduto) {}

    async handle({ id }: DeletarProdutoUseCaseRequest): Promise<HttpResponse> {
        try {
            await this.deletarProduto.execute({ id })

            return ok()
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
