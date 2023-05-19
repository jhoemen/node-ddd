import { Router } from 'express'
import { clienteRouter } from './cliente-routes'
import { PedidoRouter } from './pedido-routes'

const router = Router()
router.use('/', clienteRouter)
router.use('/', PedidoRouter)

export { router }