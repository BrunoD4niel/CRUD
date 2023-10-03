
// import http from "http";

import "dotenv/config";
import app from "./src/app.js";

// DECLARAÇÂO DE VARIAVEL //

const PORT = 3000;

const router = {
    "/": "rota 1",
    "/outra": "rota21"
};

// INICIANDO SERVIDOR HTTP //

/*
const app = http.createServer((request, response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end(router[request.url]);
});
*/

// VARIAVEL APP OUVINDO NO PORTA 3000 //

app.listen(PORT, () => {
    console.log("Aguardando!");
});
