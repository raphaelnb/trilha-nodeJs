import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router';

const databaseConnect = () => {
    try {
        mongoose.connect('mongodb+srv://Sapatin:Sapatin@cluster0.0puzx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('Banco conectado com sucesso');
    } catch (error) {
        console.log('Falha ao conectar com o banco');
        console.log(error);
    }
}

databaseConnect();

const app = express();
const port = 3001;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`);
});
