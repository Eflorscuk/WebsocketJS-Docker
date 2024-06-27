const WebSocket = require('ws');

const ws = new WebSocket('ws://servidor_websocket:8080');

ws.on('open', function open(){
    console.log('WebSocket server connected');

    ws.send('Hi WebSocket!');
});

ws.on('message', function incoming(data) {
    console.log('Mensagem recebida: %s', data);
})