const http = require('http')
const fs = require('fs')
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    const handleReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (error, data) => {
            res.writeHead(statusCode, { 'content-type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/') {
        handleReadFile(200, './views/home.html')

    } else if (req.url === '/about') {

        handleReadFile(200, './views/about.html')

    } else if (req.url === '/contact') {
        handleReadFile(200, './views/contact.html')

    } else {
        handleReadFile(404, './views/notfound.html')

    }

    // res.end("<h1>Welcome to the server Nodemone end</h1>")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})