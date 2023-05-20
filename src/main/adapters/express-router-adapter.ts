import { Request, Response } from 'express'

import { Controller } from '../../infra/controller'

export const adaptRoute = (controller: Controller) => {
    return async (request: Request, response: Response) => {
        const requestData = {
            ...request.body,
            ...request.params,
            ...request.query,
        }

        const httpResponse = await controller.handle(requestData)

        type BodyResponse = {
            success: boolean
            message: string | Error
            data: any
        }

        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            const body: BodyResponse = {
                success: true,
                message: 'Operação realizada com sucesso.',
                data: httpResponse.body,
            }

            return response.status(httpResponse.statusCode).json(body)
        } else {
            const body: BodyResponse = {
                success: false,
                message: httpResponse.body.error,
                data: '',
            }

            return response.status(httpResponse.statusCode).json(body)
        }
    }
}
