var http = require('http');

exports.getEventList = function(req, res) { 
    console.log("/events");

    var options = {
        host: '54.86.24.29',
        port: 80,
        path: '/api/v1/events/?format=json',
        method: 'GET'
    };

    var request = http.request(options);

    request.on('response', function(response) {
        var data = "";

        response.on('data', function(chunk) { 
            console.log("chunk");
            data += chunk;
        });

        response.on('end', function() { 
            console.log("end");
            // var state = JSON.parse(data);
            // res.send(state.ledger);
            res.send(data);
        });
    });

    request.end();
};