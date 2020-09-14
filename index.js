var http = require('http');

console.log('running index.js');

//create a server object:
console.log('Creating HTTP server');
http.createServer(function (request, response) {
  console.log('Request recieved');
  response.write('Hello World!'); //write a response to the client
  response.end(); //end the response
}).listen(3000); //the server object listens on port 8080 