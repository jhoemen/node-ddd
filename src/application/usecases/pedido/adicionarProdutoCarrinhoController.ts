import { Controller } from '../../../infra/controller'
import {
  HttpResponse,
  fail,
  clientError,
  ok,
} from '../../../infra/httpResponse'

import { AdicionarProdutoCarrinho } from './adicionarProdutoCarrinho'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'
import { Produto } from '../../../domain/entities/produto'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'

type AdicionarProdutoCarrinhoUseCaseRequest = {
  clienteId: UniqueEntityID
  produto: Produto
}

export class AdicionarProdutoCarrinhoController implements Controller {
  constructor(private adicionarProdutoCarrinho: AdicionarProdutoCarrinho) {}
  
  async handle({
    clienteId,
    produto
  }: AdicionarProdutoCarrinhoUseCaseRequest): Promise<HttpResponse> {
    if (!clienteId) {
      return fail(new MissingParamError('cliente2'))
    }

    if (!produto) {
      return fail(new MissingParamError('produto'))
    }

    try {
      const result = await this.adicionarProdutoCarrinho.execute({
        clienteId,
        produto
      })

      return ok(result)
    } catch (error: any) {
      return fail(new Error(error?.message))
    }
  }
}