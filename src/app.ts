import express from "express";
import routes from './routes/index';
import { connectDb } from "./db/index";
import bodyParser from 'body-parser';
import cors from 'cors';
import path from "path";

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET','POST']
}));
app.use(routes);

// app.use(express.static(path.join(__dirname,"https://taskmoveo.herokuapp.com/")));

// app.get('*', (req ,res) => {
//     res.sendFile(path.join(__dirname,'https://taskmoveo.herokuapp.com/','index.html'));
// });

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'https://taskmoveo.herokuapp.com/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//     });

connectDb().then(async () => {
    app.listen(process.env.PORT || 3001, () => console.log("Listening on http://localhost:3001"));
});

