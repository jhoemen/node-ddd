import { Produto } from '../../../domain/entities/produto/produto'
import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'
import { MissingParamError } from '../../../utils/errors'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { AtualizarProduto } from './atualizarProduto'

interface AtualizarProdutoUseCaseRequest {
    id: UniqueEntityID
    nome: string
    descricao: string
    preco: string
    imagem: string
}

export class AtualizarProdutoController implements Controller {
    constructor(private atualizarProduto: AtualizarProduto) {}

    async handle({ ...props }: AtualizarProdutoUseCaseRequest): Promise<HttpResponse> {
        try {
            var result = await this.atualizarProduto.execute({ ...props })

            const adapterResult = {
                id: result.produto?.id.toString(),
                ...result.produto?.props,
            }

            return ok(adapterResult)
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
