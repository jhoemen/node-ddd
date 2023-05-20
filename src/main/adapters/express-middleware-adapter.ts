import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { MissingParamError } from '../../utils/errors'
import { env } from '../../main/config/env'

export const middlewareAuthentication = () => {
    return async function (
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const requestData = {
            ...(request.headers || {}),
        }
        const token = requestData.authorization?.replace('Bearer ', '') ?? ''

        if (!token) {
            response.status(401).json({
                sucesso: false,
                mensagem: new MissingParamError('token').message,
                data: '',
            })
        }

        try {
            const decode = await jwt.verify(token, env.tokenSecret)
            const clienteId = decode['_id'].value

            if (!clienteId) {
                response
                    .status(401)
                    .json(new MissingParamError('token').message)
            }

            request.body.clienteId = clienteId

            return next()
        } catch (err) {
            response.status(401).json({
                sucesso: false,
                mensagem: 'Token Inválido.',
                data: '',
            })
        }
    }
}
