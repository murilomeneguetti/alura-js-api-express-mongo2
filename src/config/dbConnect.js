import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin123@cluster0.fp9ov5b.mongodb.net/livraria?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;