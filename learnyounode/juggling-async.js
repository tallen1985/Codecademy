const http = require('http');
const  bl = require('bl');
var count = 0;
var results = []

function printResults () {
    for (i = 0; i < 3; i++){
        console.log(results(x));
    }
}

function GetData(x) {
    http.get(process.argv[2 + x], function (response) {
    response.pipe(bl(function (err, data) {
        results[x] = data.toString();
    
    count++;
    if (count == 3) 
        printResults()
    
    }))
}) 
}

for (x = 0; x < 3; x++){
    GetData(x)
}


