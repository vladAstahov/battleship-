var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const { join } = require('path');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'game.html'));
});

// Запуск сервера
server.listen(5000, function() {
    console.log('Запускаю сервер на порте 5000');
});

var players = {}
var rooms = ['room1', 'room2']
var room1 = []
var room2 = []

io.sockets.on('connection', function(socket) {
    socket.on('new player', function(){
        var room = 'room1'
        if (room1.length < 2){
            var room = room[0]
            room1.push(socket.id)
        } else if (room2.length < 2){
            var room = room[1]
            room2.push(socket.id)
        }
        socket.join(room)
        players[socket.id] = {
            id: socket.client.id,
            room: room,
            ready: false,
            serverbtns: {
                1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
                11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
                21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0,
                31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0,
                41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 47: 0, 48: 0, 49: 0, 50: 0,
                51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 56: 0, 57: 0, 58: 0, 59: 0, 60: 0,
                61: 0, 62: 0, 63: 0, 64: 0, 65: 0, 66: 0, 67: 0, 68: 0, 69: 0, 70: 0,
                71: 0, 72: 0, 73: 0, 74: 0, 75: 0, 76: 0, 77: 0, 78: 0, 79: 0, 80: 0,
                81: 0, 82: 0, 83: 0, 84: 0, 85: 0, 86: 0, 87: 0, 88: 0, 89: 0, 90: 0,
                91: 0, 92: 0, 93: 0, 94: 0, 95: 0, 96: 0, 97: 0, 98: 0, 99: 0, 100: 0
            },
            serverenemybtn: {
                1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
                11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
                21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0,
                31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0,
                41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 47: 0, 48: 0, 49: 0, 50: 0,
                51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 56: 0, 57: 0, 58: 0, 59: 0, 60: 0,
                61: 0, 62: 0, 63: 0, 64: 0, 65: 0, 66: 0, 67: 0, 68: 0, 69: 0, 70: 0,
                71: 0, 72: 0, 73: 0, 74: 0, 75: 0, 76: 0, 77: 0, 78: 0, 79: 0, 80: 0,
                81: 0, 82: 0, 83: 0, 84: 0, 85: 0, 86: 0, 87: 0, 88: 0, 89: 0, 90: 0,
                91: 0, 92: 0, 93: 0, 94: 0, 95: 0, 96: 0, 97: 0, 98: 0, 99: 0, 100: 0
            }
        }
    })
    socket.on('clickbtn', function(data){
        var player = players[socket.id] || {}
        var enemy
        for (var id in players){
            var mid = players[id]
            if (mid.room == player.room && mid.id != player.id){
                enemy = players[id]
            }
        }
        if (player.ready != true || enemy.ready != true){
            for (var key in player.serverbtns) {
                player.serverbtns[key] = data.btns[key]
            }
            for (var key in player.serverenemybtn) {
                player.serverenemybtn[key] = data.enemybtn[key]
            }
            socket.broadcast.to(player.room).emit('message', player)
        } else if (player.ready == true && enemy.ready == true){
            
            for (var key in enemy.serverbtns) {
                enemy.serverbtns[key] = data.enemybtn[key]
            }
            for (var key in enemy.serverenemybtn) {
                enemy.serverenemybtn[key] = data.btns[key]
            }
            for (var key in player.serverbtns) {
                player.serverbtns[key] = data.btns[key]
            }
            for (var key in player.serverenemybtn) {
                player.serverenemybtn[key] = data.enemybtn[key]
            }//TODO: пофиксить мигание
            socket.broadcast.to(player.room).emit('message', player)
        }

    })
    socket.on('readyforgame', function(data){
        var player = players[socket.id] || {}
        player.ready = data.ready
        socket.broadcast.to(player.room).emit('isreadyserv', player)
    })
});

setInterval(function() {
    io.sockets.emit('state', players);
}, 1000 / 60);

