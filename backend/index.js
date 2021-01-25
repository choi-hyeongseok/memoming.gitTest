var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

//console.log(requestHandlers.handle);

server.start(router.route,requestHandlers.handle);


