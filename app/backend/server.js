
import config from './config'

import http from 'http';
import express from 'express';
import Rex from 'rexpress';
import middlewares from './middlewares';
import controllers from './controllers';

const router = express();
const app = new Rex(router);
const server = http.createServer(router);
const port = process.env.PORT || config.port;

app.setMiddlewares(middlewares);
app.setControllers(controllers);

server.listen(port, () => console.log('todo correcto'));
