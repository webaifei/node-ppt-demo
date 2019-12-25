var http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello nodejs');
});

server.listen(3000, function () {
  console.log('node server has started at port:3000')
})