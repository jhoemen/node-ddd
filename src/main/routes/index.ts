import { Router } from 'express'
import { loginRouter } from './login-routes'
import { clienteRouter } from './cliente-routes'

const router = Router()
router.use('/', loginRouter)
router.use('/', clienteRouter)

export { router }