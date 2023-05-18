import express from 'express'

import { adaptRoute } from '../adapters/express-router-adapter'
import { loginClienteControllerFactory } from '../factories/loginClienteControllerFactory'


const loginRouter = express.Router()

// loginRouter.post('/login', adaptRoute(loginClienteControllerFactory()))

export { loginRouter }