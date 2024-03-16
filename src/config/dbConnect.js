import mongoose from "mongoose"

//variaveis de ambiente
//ao inves de usar o link aqui, poderia usar o dotenv: process.env.STRING_CONEXAO_DB

mongoose.connect("mongodb+srv://admin:admin123@cluster0.fp9ov5b.mongodb.net/livraria?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
