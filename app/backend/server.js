
import config from './config'

import http from 'http';
import express from 'express';
import Rex from 'rexpress';
import mongoose from 'mongoose';
import middlewares from './middlewares';
import controllers from './controllers';

const router = express();
const app = new Rex(router);
const server = http.createServer(router);

const port = process.env.PORT || config.port;
const db = process.env.MONGODB_URI || 'mongodb://localhost/alotroladodelapagina';

app.setMiddlewares(middlewares);
app.setControllers(controllers);

mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
	if(err){
		console.log("ERROR: " + err);
	}else{
		console.log("Conexion a BD con exito");
	}
});

server.listen(port, () => console.log('todo correcto'));
