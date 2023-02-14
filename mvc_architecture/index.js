const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');
const PORT = 300;


app.use(express.urlencoded({ extended: true }))
app.use(userRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Invalid route"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`)
})