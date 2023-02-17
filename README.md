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



