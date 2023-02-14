const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user.model');

const PORT = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URL;


mongoose.connect(dbUrl)
    .then(() => {
        console.log("Mongodb atlas is conntected");
    }).catch((error) => {
        console.log(error);
        process.exit(1);
    })



app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


app.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error.message)
    }
})


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })

        if (user && user.password === password) {
            res.status(200).json({ status: 'valid User' });
        } else {
            res.status(404).json({ status: 'User not found' });
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
})



//Route not found error handleing...
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found!"
    })
})

//Server error handeling...
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong!"
    })
})





app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})


