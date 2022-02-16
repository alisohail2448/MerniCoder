import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//for images


//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const URL =
"mongodb://icoder:icoder@icoderblog-shard-00-00.erqwh.mongodb.net:27017,icoderblog-shard-00-01.erqwh.mongodb.net:27017,icoderblog-shard-00-02.erqwh.mongodb.net:27017/iCoderBlog?ssl=true&replicaSet=atlas-lg802y-shard-0&authSource=admin&retryWrites=true&w=majority";

Connection(process.env.MONGODB_URI || URL);
