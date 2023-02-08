const fs = require('fs')

// console.log(fs)

// fs.writeFile('description', "I am Shakil Ahmed two", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('document write success')
//     }
// })

fs.appendFile('description', " I am 25 years old", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('document write success')
    }
})
// fs.readFile('description', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })
// fs.rename('description', 'demo2.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Rename Success")
//     }
// })
// fs.unlink('demo2.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Delete Success")
//     }
// })
fs.exists('description', (res) => {
    if (res) {
        console.log("Found")
    } else {
        console.log("Not found")
    }
})
