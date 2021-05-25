var http = require('http');
var url = process.argv[2];
var bl = require('bl')
// var url = 'http://jsonplaceholder.typicode.com/todos/1'

var request = http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        console.log(data.length);
        console.log(data.toString())
    }))
})

request.end();
