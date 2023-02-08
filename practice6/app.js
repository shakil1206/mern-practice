const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("I am from home")
})

app.get('/about', (req, res) => {
    res.send("I am from about get")
})
app.post('/about', (req, res) => {
    res.send("I am from about post")
})
app.put('/about', (req, res) => {
    res.send("I am from about put")
})
app.delete('/about', (req, res) => {
    res.send("I am from about delete")
})


module.exports = app;