const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/user', userRouter);



app.post('/user', (req, res) => {
    const name = req.body.name;
    res.send(`Welcome ${name}`)
    // res.send()
})

app.use('/', (req, res) => {
    // res.send("<h1>I am from Home page</h1>")
    res.sendFile(__dirname + '/views/index.html')
    res.cookie('name', "Shakil Ahmed")
})

app.use((req, res) => {
    res.send('<h1>Error 404! Not found!</h1>>')
})


module.exports = app;