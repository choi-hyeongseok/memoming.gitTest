const { json } = require('express');

function view(response){
    console.log('request handler called --> view');

    // var url = 'http://127.0.0.1:5000/environments/<kim>';

    var request=require('request');
    //var bo ={};
    var res = "";
    request('http://127.0.0.1:5000/korea', function (error, responsed, body) {
        if (!error && responsed.statusCode == 200)
            console.log(body);
            response.writeHead(200,{'Content-Type' : 'text/plain'});
            response.write('hello View'+body+"  hahah");
            response.end();
    })

   
}

function create(response){
    console.log('request handler called --> create');
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.write('hello create');
    response.end();
}

var handle = {}; // javascript object has key:value pair.
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;