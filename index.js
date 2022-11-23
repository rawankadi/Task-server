const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production"){
    app.use(express.static('public'));
    // app.get('*',(req, res) =>{
    //     req.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    // })
}

app.listen(port, (err)=> {
    if(err) return console.log(err);
    console.log('server running on port', port);
})