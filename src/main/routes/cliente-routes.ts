import express from 'express'

import { adaptRoute } from '../adapters/express-router-adapter'
import { criarClienteControllerFactory } from '../factories/criarClienteControllerFactory'
import { loginClienteControllerFactory } from '../factories/loginClienteControllerFactory'
import inMemoryRepository from './repository'

const clienteRouter = express.Router()

const repository = inMemoryRepository

clienteRouter.post('/cliente', adaptRoute(criarClienteControllerFactory(repository.inMemoryClienteRepository)))

clienteRouter.post('/login', adaptRoute(loginClienteControllerFactory(repository.inMemoryClienteRepository)))

export { clienteRouter }