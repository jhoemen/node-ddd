import { Controller } from '../../../infra/controller'
import { HttpResponse, clientError, ok } from '../../../infra/httpResponse'
import { ListarProduto } from './listarProduto'

export class ListarProdutoController implements Controller {
    constructor(private listarProduto: ListarProduto) {}

    async handle(): Promise<HttpResponse> {
        try {
            const result = await this.listarProduto.execute()

            var listAdapterResult = new Array()

            result.produto.forEach((item) => {
                const adapterResult = {
                    id: item.id.toString(),
                    ...item.props,
                }

                listAdapterResult.push(adapterResult)
            })

            return ok(listAdapterResult)
        } catch (error: any) {
            return clientError(new Error(error?.message))
        }
    }
}
