const http = require('http');

// console.log(http)
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(202, { 'Content-type': 'text/html' })
    res.write("<h1>Hi I am from new server...</h1>")
    res.end()
});

server.listen(PORT, hostName, () => {
    console.log(`Your server is running at: http://${hostName}:${PORT}`)
})
