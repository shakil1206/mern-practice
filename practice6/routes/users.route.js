
const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send("<h1>I am from login page</h1>")
})
router.get('/register', (req, res) => {

    res.statusCode = 200;
    res.sendFile('../'+__dirname + '/views/register.html');

    // res.status(200).json({
    //     'name': "Shakil Ahmed",
    //     "message": "I am from register page",
    //     'status_code': 200
    // })
    // res.redirect('/login')
    // res.send("<h1>I am from register page</h1>")
})



module.exports = router;