import { Router } from 'express'
import { clienteRouter } from './cliente-routes'
import { PedidoRouter } from './pedido-routes'
import { produtoRouter } from './produto-routes'

const router = Router()
router.use('/', clienteRouter)
router.use('/', PedidoRouter)
router.use('/', produtoRouter)

export { router }
