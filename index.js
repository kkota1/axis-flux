const express = require('express'),
    app = express()
        .use('/', express.static(__dirname + '/wwwroot'))
        .use('/views', express.static(__dirname + '/src/views')),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path');

global.mergeStore = src => {
    io.emit('toBeMerged', src);
};

io.on('connection', socket => {
    require('glob').sync( './src/scripts/**/*.js' ).forEach(file => {
        const fileName = path.basename(file).split('.')[0],
            methods = require(path.resolve(file));

        for (const methodName in methods) {
            socket.on(`${fileName}.${methodName}`, methods[methodName]);
        }
    });
});

http.listen(8000);
console.log('Listening on port 8000');