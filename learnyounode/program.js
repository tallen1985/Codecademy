var http = require('http');
var url = process.argv[2];
// var url = 'http://jsonplaceholder.typicode.com/todos/1'

const request = http.get(url, function callback(response) {
    response.setEncoding('utf-8')
    response.on('data', (chunk) => {
        process.stdout.write(chunk + '\n')
    })
})

request.on('error', error => {
    console.error(error)
})

request.end()