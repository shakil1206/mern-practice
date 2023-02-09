const express = require('express');
const app = express();
const PORT = 3000;


const myMiddleware = (req, res, next) => {
    console.log("Middleware function")
    req.currentTime = new Date();
    next()
}

app.use(myMiddleware);

app.get('/', (req, res) => {
    console.log('I am from home')
    res.send(`<h1>I am from home route ${req.currentTime}</h1>`)
})
app.get('/about', (req, res) => {
    console.log('I am from about')
    res.send(`<h1>I am from about route ${req.currentTime}</h1>`)
})




app.listen(PORT, () => {
    console.log(`Server is running at : http://localhost:${PORT}`)
})
