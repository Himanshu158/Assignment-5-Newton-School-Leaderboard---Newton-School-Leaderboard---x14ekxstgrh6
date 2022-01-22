const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/topRankings", async (req, res) => {
    const off=req.query.offset?req.query.offset:parseInt(0);
    const lim=req.query.limit?req.query.limit:parseInt(20);
    const arr=[];
    
    console.log(off);
    console.log(lim);
    for(let i=off;i<lim;i++){
        arr.push(data[i]);
    }
    res.send(arr);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
