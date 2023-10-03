import livros from "./rotas.js";
import express, { request, response } from "express";


const routes = (app) => {
    app.route("/").get((request, response) => {
        response.status(200).send("Projeto");
    });

    app.use(express.json(), livros);
};

export default routes;