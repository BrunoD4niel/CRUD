// IMPORTAÇÔES 

import express from "express";
import conectaDataBase from "../config/db.js";
import routes from "../rotas/index.js";

// VALIDAÇÂO DO LOGIN NO MONGO 

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("ERRO!", erro);
});

conexao.once("open", () => {
    console.log("Conexão sucesso!")
})

// ATRIBUINDO FUNÇÂO EXPRESS A VARIAVEL APP

const app = express();
routes(app);

/* 
// TESTE DE OBJETO //

const livros = [
    {
        id: 1,
        titulo: "livro 1"
    },
    {
        id: 2,
        titulo: "livro 2"
    }
]

function buscalivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
    
}


// CRIANDO ROTAS //

*/

app.delete("/livros/:id", (request, response) => {
    const index = buscalivro(request.params.id);
    livros.splice(index, 1);
    response.status(200).send("Livro deletado!");
});

// EXPORTANDO VARIAVEL APP PARA O SERVIDOR

export default app;