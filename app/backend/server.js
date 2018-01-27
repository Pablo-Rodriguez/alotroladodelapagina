
import http from 'http'
import express from 'express'
import Rex from 'rexpress'
import mongoose from 'mongoose'
import middlewares from './middlewares'
import controllers from './controllers'

import config from './config'

const router = express()
const app = new Rex(router)
const server = http.createServer(router)

const port = process.env.PORT || config.port

app.setMiddlewares(middlewares)
app.setControllers(controllers)

mongoose.Promise = global.Promise

config.db(process.env.NODE_ENV)
	.then((db) => {
		return mongoose.connect(db, {useMongoClient: true})
  })
  .then(() => console.log('Conexion a BD con exito'))
  .catch((err) => console.log(`ERROR: ${err}`))

server.listen(port, () => console.log(`Magic on ${port}`))

