const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('Hello test')
});

app.get('/users', function(req, res){
    res.send('User list')
})

app.listen(port, function() {
    console.log('test smartweb'+ port)
});