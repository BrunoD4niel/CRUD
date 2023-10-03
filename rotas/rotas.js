import express from "express";
import controller from "../controller/controller.js";

// CRIANDO ROTAS HTTP //

const routes = express.Router();

routes.get("/livros", controller.listarlivros);
routes.get("/livros/:id", controller.listarlivroporId);
routes.post("/livros", controller.cadastrarLivro);
routes.put("/livros/:id", controller.atualizarlivroporid);
routes.delete("/livros/:id", controller.deletarlivroid);

export default routes;