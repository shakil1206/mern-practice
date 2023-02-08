const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use('/api/user', userRouter);

app.use('/', (req, res) => {
    res.send("<h1>I am from Home page</h1>")
})

app.use((req, res) => {
    res.send('<h1>Error 404! Not found!</h1>>')
})


module.exports = app;