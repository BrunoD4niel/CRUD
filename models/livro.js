import mongoose from "mongoose";

// MODELO DE OBJETO //

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

// EXPORTANDO MODELO DE OBJETO //

export default livro;

