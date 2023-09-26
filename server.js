const express = require('express');

const server = express();

const PORT = 8880;

server.listen(PORT);

// http://localhost:8888/

function handleEmptyRoute(request,response){
    console.log("hello");
    response.send("Hello World!!! This is my first API");
}
function calculateSum(n){
    let sum = 0;
   for(let i = 1; i<=n ; i++){
        sum += i;
   }
   return sum;
}
function handleSumRoute(request, response){
    let number = request.query.number;
    response.send(`The sum of first ${number} numbers is ${calculateSum(number)}`)
}
server.get('/', handleEmptyRoute);
server.get('/sum', handleSumRoute);