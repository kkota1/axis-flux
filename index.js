var req = require,
    express = req('express'),
    app = express().use('/', express.static(__dirname + '/public')),
    http = req('http').Server(app),
    io = req('socket.io')(http),
    _ = req('lodash');

io.on('connection', function(socket){
    _.forOwn(exposed, function(fn, name){
        socket.on(name, fn);
    })
});

var emit = function(obj) {
    io.emit('data', obj);
}

var exposed = {
    test: function(args){
        setTimeout(function(){
            emit({'msg': 'got it'});
        },2000)
    }
};


http.listen(1337);