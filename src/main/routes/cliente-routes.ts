import express from 'express'

import { adaptRoute } from '../adapters/express-router-adapter'
import { loginClienteControllerFactory } from '../factories/loginClienteControllerFactory'


const clienteRouter = express.Router()

clienteRouter.post('/cliente', async function (req, res) {
    res.sendStatus(200)
})

export { clienteRouter }