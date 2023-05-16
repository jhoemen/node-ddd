import express from 'express'

import { adaptRoute } from '../adapters/express-router-adapter'
import { criarClienteControllerFactory } from '../factories/criarClienteControllerFactory'

const clienteRouter = express.Router()

clienteRouter.post('/cliente', adaptRoute(criarClienteControllerFactory()))

export { clienteRouter }