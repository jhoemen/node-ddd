import express from 'express'
import { router } from '../routes'
import { setupApp } from './setup'

const app = express()
setupApp(app)
app.use(router)

export = app
