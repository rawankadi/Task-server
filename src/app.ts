import express from "express";
import routes from './routes/index';
import { connectDb } from "./db/index";
import bodyParser from 'body-parser';
import cors from 'cors';
import path from "path";

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

// app.use(express.static(path.join(__dirname,"https://taskmoveo.herokuapp.com/")));

// app.get('*', (req ,res) => {
//     res.sendFile(path.join(__dirname,'https://taskmoveo.herokuapp.com/','index.html'));
// });

connectDb().then(async () => {
    app.listen(process.env.PORT || 3001, () => console.log("Listening on http://localhost:3001"));
});

