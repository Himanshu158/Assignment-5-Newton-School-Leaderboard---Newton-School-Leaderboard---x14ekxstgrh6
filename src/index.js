const express = require('express')
const assert=require('assert')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/topRankings", (req, res) => {
    const off=req.query.offset?parseInt(req.query.offset):parseInt(0);
    const lim=req.query.limit?parseInt(req.query.limit):parseInt(20);
    const arr=[];
    let i=off;
    console.log(off+" "+lim);
    let j=0;
    while(j<lim){
        arr.push(data[i]);
        i++;
        j++;
    }
    res.status(200).send(arr);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
