import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

let coffeeStatus: boolean = false;

webSocketServer.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: string) => {
    console.log(`received: ${message}`);
    if (message == "up") {
      coffeeStatus = true;
      console.log("coffee status: " + coffeeStatus);
      webSocketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ coffeeStatus: coffeeStatus }));
        }
      });
    }
    if (message == "down") {
      coffeeStatus = false;
      console.log("coffee status: " + coffeeStatus);
      webSocketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ coffeeStatus: coffeeStatus }));
        }
      });
    }
    ws.send(`${message}`);
  });

  const readline = require("readline");
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
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
