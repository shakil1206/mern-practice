# Mern Stack Practice

# Learning outcome from this Mern Stack Practice...

## Total practice are :

1. Node.Js
    1. Local Module practice
    2. Default Built-in module-> file system module (fs)
    3. Default Built-in module-> Operating system module (os)
    4. Default Built-in module-> http
    5. Response, Request and status code practice by using http
    6. http CRUD

2. Express.js
    1. Create Express server
    2. Express router
    3. Express CRUD app
    4. Express json, body-parser
    5. .env file
    6. Middlewares
    7. Static middlewares
    8. MVC (Model, View, Controller) architecture/Pattern

## Node.js
### Local Module practice

```js
//Student.js
const getStudentName = () => {
    return "Md Shakil Ahmed";
}

const studentAge = () => {
    return 18;
}

// Export local module
module.exports = {
    getStudentName,
    studentAge
}
```

```js
//index.js

// import local module
const {getStudentName} = require('./student.js');
//This line get everthing from student.js file.

console.log(getStudentName())
// console.log(student.studentAge())

```

### Default Built-in module-> file system module (fs)

- We know that every language have default built-n module/method so, that Javascript have also built-in module - Some of this built in module - http, url, fs, path

```js
//Index.js file from practice 2 folder/directory
const fs = require('fs')

//print all file system method by the following this line
console.log(fs)

//Write .txt file from this line, If do not have then it will create and write...
fs.writeFile('description', "I am Shakil Ahmed two", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('document write success')
    }
})


//Update/append text if have default .txt file
fs.appendFile('description', " I am 25 years old", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('document write success')
    }
})


//Read file from .txt file
fs.readFile('description', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})



//Rename .txt file...
fs.rename('description', 'demo2.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Rename Success")
    }
})


//Delete .txt file...
fs.unlink('demo2.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Delete Success")
    }
})

//.txt file have/don't have...
fs.exists('description', (res) => {
    if (res) {
        console.log("Found")
    } else {
        console.log("Not found")
    }
})


```

### Default Built-in module-> Operating system module (os)

```js
//Practice3 folder/directory

// Import Operating system module
const os = require('os');

//Import path module
const path = require('path');

// Print os module everything by the following line...
console.log(os)

//Print hostname
console.log(os.hostname())
//Print Userinfo
console.log(os.userInfo())

//Print path...
console.log(path)


```