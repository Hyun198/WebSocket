const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const WebSocket = require('ws');


const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', socket => {
    console.log('웹 소켓 클라이언트 연결');

    socket.on('message', message => {
        console.log(`클라이언트로부터 메세지 수신: ${message}`);
    });
    socket.on('close', () => {
        console.log('웹 소켓 클라이언트와 연결이 끊어졌습니다.');
    });
});
