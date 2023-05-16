import express from 'express'

const env = require('./config/env')
const app = require('./config/app')
import { router } from './routes' // eslint-disable-line

app.use(router)

app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))