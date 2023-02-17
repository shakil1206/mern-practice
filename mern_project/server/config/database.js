// require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery',false)
const dbUrl = process.env.MONGO_URL;

mongoose.connect(dbUrl).then(() => {
    console.log("DB is connected");
}).catch((err) => {
    console.log(err.message);
    process.exit(1); 
})