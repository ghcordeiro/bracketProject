import "reflect-metadata";

import { createConnection } from "typeorm";
import { createExpressServer } from "routing-controllers";
import { PartidaController } from "./controller/PartidaController";


const Koa = require('koa');
const cors = require('@koa/cors');

//Estabelece a conexão com o banco de dados
createConnection().then(async connection => {

    const app = new Koa();
    app.use(cors());

    const server = createExpressServer({
        controllers: [
            PartidaController
        ],
        cors: app
    });


    server.listen(3001);

    console.log("API Conectada na porta 3001");

}).catch(error => {
    console.log(error)
});