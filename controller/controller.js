import livro from "../models/livro.js";

class livroController {

 static async listarlivros (request, response) {
    try {
        const listalivros = await livro.find({});
        response.status(200).json(listalivros);
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha na requisição`});
    }
 };

 static async listarlivroporId (request, response) {
    try {
        const id = request.params.id;
        const livroencontrado = await livro.findById(id);
        response.status(200).json(livroencontrado);
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
    }
 };

 static async cadastrarLivro (request, response){
    try {
        const novolivro = await livro.create(request.body);
        response.status(201).json({ message: "criado com sucesso!", livro: novolivro });
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`});
    }
 };

 static async atualizarlivroporid (request, response) {
    try {
        const id = request.params.id;
        await livro.findByIdAndUpdate(id, request.body);
        response.status(200).json({ message: "Livro atualizado"});
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha na atualização`});
    }
 };

 static async deletarlivroid (request, response) {
    try {
        const id = request.params.id;
        await livro.findByIdAndDelete(id);
        response.status(200).json({ message: "livro deletado!"});
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha ao deletar`});
    }
 };
};

export default livroController;