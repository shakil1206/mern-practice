const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.end("I am from home")
})


module.exports = app;