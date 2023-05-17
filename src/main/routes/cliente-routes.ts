import express from 'express'

import { adaptRoute } from '../adapters/express-router-adapter'
import { criarClienteControllerFactory } from '../factories/criarClienteControllerFactory'
import { loginClienteControllerFactory } from '../factories/loginClienteControllerFactory'
import { inMemoryClienteRepository } from './repository'

const clienteRouter = express.Router()

const repository = inMemoryClienteRepository()

clienteRouter.post('/cliente', adaptRoute(criarClienteControllerFactory(repository)))

clienteRouter.post('/login', adaptRoute(loginClienteControllerFactory(repository)))

export { clienteRouter }