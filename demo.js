const http = require("http");  
console.log('step 1')

http.createServer((req,res) => {
    console.log('step 2')
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola Mundo');
}).listen(process.env.PORT || 3000);
console.log('step 3')