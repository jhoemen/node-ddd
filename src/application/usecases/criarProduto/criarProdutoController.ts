import { Produto } from '../../../domain/entities/produto/produto'
import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'
import { MissingParamError } from '../../../utils/errors'
import { UniqueEntityID } from '../../../utils/helpers/unique-entity-id'
import { CriarProduto } from './criarProduto'

interface CriarProdutoUseCaseRequest {
    nome: string
    descricao: string
    preco: string
    imagem: string
}

export class CriarProdutoController implements Controller {
    constructor(private criarProduto: CriarProduto) {}

    async handle({ nome, descricao, preco, imagem }: CriarProdutoUseCaseRequest): Promise<HttpResponse> {
        try {
            if (!nome) {
                return clientError(new MissingParamError('nome'))
            }

            if (!descricao) {
                return clientError(new MissingParamError('descrição'))
            }

            if (!preco) {
                return clientError(new MissingParamError('preço'))
            }

            if (!imagem) {
                return clientError(new MissingParamError('imagem'))
            }

            var result = await this.criarProduto.execute({
                nome,
                descricao,
                preco,
                imagem,
            })

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
