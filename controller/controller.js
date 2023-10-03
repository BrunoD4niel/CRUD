import livro from "../models/livro.js";

// CRIANDO CLASSES PARA CADA ROTA DE LIVRO //

class livroController {

    // LISTAR LIVROS GET//

 static async listarlivros (request, response) {
    try {
        const listalivros = await livro.find({});
        response.status(200).json(listalivros);
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha na requisição`});
    }
 };

 // LISTAR LIVROS POR ID GET//

 static async listarlivroporId (request, response) {
    try {
        const id = request.params.id;
        const livroencontrado = await livro.findById(id);
        response.status(200).json(livroencontrado);
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
    }
 };

 // CADASTRAR LIVROS POST //

 static async cadastrarLivro (request, response){
    try {
        const novolivro = await livro.create(request.body);
        response.status(201).json({ message: "criado com sucesso!", livro: novolivro });
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`});
    }
 };

 // ATUALIZAR LIVRO PUT //

 static async atualizarlivroporid (request, response) {
    try {
        const id = request.params.id;
        await livro.findByIdAndUpdate(id, request.body);
        response.status(200).json({ message: "Livro atualizado"});
    } catch (erro) {
        response.status(500).json({ message: `${erro.message} - falha na atualização`});
    }
 };

 // DELETAR LIVRO DELETE //

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

// EXPORTANDO PARA O ARQUIVO ROTAS //

export default livroController;