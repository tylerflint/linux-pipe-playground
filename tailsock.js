var net = require('net');

var server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');

  c.on('end', function() {
    console.log('client disconnected');
  });

  c.on('data', function(data) {
    console.log(data.toString());
  });

  c.pipe(c);
});

server.listen('/tmp/echo.sock', function() { //'listening' listener
  console.log('server bound');
});