import { Produto } from '../../../domain/entities/produto/produto'
import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { CarregarProduto } from './carregarProduto'

interface CarregarProdutoUseCaseRequest {
    id: UniqueEntityID
}

interface CarregarProdutoUseCaseResponse {
    produto: Produto | null
}

export class CarregarProdutoController implements Controller {
    constructor(private carregarProduto: CarregarProduto) {}

    async handle({ id }: CarregarProdutoUseCaseRequest): Promise<HttpResponse> {
        try {
            const result = await this.carregarProduto.execute({ id })

            const adapterResult = {
                id: result.produto?.id,
                ...result.produto?.props,
            }

            return ok(adapterResult)
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
