"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const webSocketServer = new WebSocket.Server({ server });
let coffeeStatus = false;
webSocketServer.on("connection", (ws) => {
    //connection is up, let's add a simple simple event
    ws.on("message", (message) => {
        //log the received message and send it back to the client
        console.log("received: %s", message);
        ws.send(`Hello, you sent -> ${message}`);
    });
    const readline = require("readline");
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }
    process.stdin.on("keypress", (str, key) => {
        if (key.ctrl && key.name === "c") {
            // exit
            process.exit(0);
        }
        if (key.name === "up") {
            coffeeStatus = true;
            console.log("coffee status: " + coffeeStatus);
            ws.send(JSON.stringify({ coffeeStatus: coffeeStatus }));
        }
        if (key.name === "down") {
            coffeeStatus = false;
            console.log("coffee status: " + coffeeStatus);
            ws.send(JSON.stringify({ coffeeStatus: coffeeStatus }));
        }
    });
    ws.send(JSON.stringify({ coffeeStatus: coffeeStatus }));
});
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port 8999`);
});
//# sourceMappingURL=app.js.map