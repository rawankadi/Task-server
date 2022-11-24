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

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })

connectDb().then(async () => {
    app.listen(process.env.PORT || 3001, () => console.log("Listening on http://localhost:3001"));
});

