var express = require('express'),
    app = express()
        .use('/', express.static(__dirname + '/wwwroot'))
        .use('/view.html', express.static(__dirname + '/src/view.html')),
    http = require('http').Server(app),
    io = require('socket.io')(http);

io.on('connection', socket => {
    require('lodash').forOwn(require("./src/actions.js"), (fn, name) => {
        socket.on(name, args => io.emit('data', fn(args)));
    })
});

http.listen(8000);