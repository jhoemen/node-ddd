const HttpResponse = require('../../presentation/helpers/http-response')
const EmailValidator = require('../../utils/helpers/email-validator')
const Encrypter = require('../../utils/helpers/encrypter')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')
// import LoginCliente from '../../application/usecases/cliente/loginCliente'
// const LoginCliente = require('../../application/usecases/cliente/loginCliente')


import express from 'express'

import { adaptRoute } from '../adapters/express-router-adapter'
import { loginClienteControllerFactory } from '../factories/loginClienteControllerFactory'


const loginRouter = express.Router()

loginRouter.post('/login', adaptRoute(loginClienteControllerFactory()))

// loginRouter.post('/login', async function (req, res) {
//   console.log('JON1', req.body)
//   const { email, password } = req.body
//   const inMemoryClienteRepository = new InMemoryClienteRepository()
//   const loginCliente = new LoginCliente(inMemoryClienteRepository)
//   console.log('JON2', loginCliente)
//   const loginClienteController = new LoginClienteController(loginCliente)
//   console.log('JON3', loginClienteController)
//   // const httpResponse = await loginClienteController.handle({email, password})
//   const t = await adaptRoute(loginClienteController)
//   console.log('JON8', t)
//   // res.status(httpResponse.statusCode).json(httpResponse.body)
// })

export { loginRouter }

// module.exports = class App  {
//   // router.post('/login', adapt(LoginRouterComposer.compose()))

//   const emailValidator = new EmailValidator()
//   accessToken ='accessToken-123'

//   const validarRequest = async (request) => {
//     try {
//       const { email, password } = request.body
      
//       if (!email) {
//         return HttpResponse.badRequest(new MissingParamError('email'))
//       }
//       if (!emailValidator.isValid(email)) {
//         return HttpResponse.badRequest(new InvalidParamError('email'))
//       }
//       if (!password) {
//         return HttpResponse.badRequest(new MissingParamError('password'))
//       }
//       const accessToken = await LoginCliente.auth(email, password)
//       // if (!accessToken) {
//       //   return HttpResponse.unauthorizedError()
//       // }
//       return HttpResponse.ok({ accessToken })
//     } catch (error) {
//       console.log('JON2', error)
//       return HttpResponse.serverError()
//     }
//   }

//   app.post('/login', async function (req, res) {
//     const httpResponse = await validarRequest(req)
//     console.log('JON', httpResponse)
//     res.status(httpResponse.statusCode).json(httpResponse.body)
//   })
// }
