import mongoose from "mongoose";

// CONECTANDO O MONGO A FUNÇÂO //

async function conectaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION);
    return mongoose.connection;
}

// EXPORTANDO FUNÇÂO DE LOGIN NO MONGO //

export default conectaDataBase;


