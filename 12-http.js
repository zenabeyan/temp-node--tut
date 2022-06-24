const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the homepage')
    };
    if (req.url === '/about') {
        res.end('you are at the history page')
    };

    res.end(`
    <h1>Oops!</h1>
    <p>cant seem to find the page ur searching for</p>
    <a href='/'> Back Home</a>
    `);
})

server.listen(3000)