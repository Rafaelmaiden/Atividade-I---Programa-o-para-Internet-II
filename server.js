'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Biro! </h1>')
  } else if (req.url === '/chanarou' && req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Biro Biro! </h1>')
  } else {
    res.statusCode = 404
    res.setHeader('COntent-Type', 'text/html')
    res.end('<h1> Sai fora, cupadi! </h1>')
  }
})

server.listen(5000, () => {
  console.log('Biro biro rodando on port: ', 5000, '!')
})
