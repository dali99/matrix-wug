import x2i from "./x2i";

const config = require("./config.json");

const MatrixClient = require("matrix-bot-sdk").MatrixClient;
const AutojoinRoomsMixin = require("matrix-bot-sdk").AutojoinRoomsMixin;

const client = new MatrixClient(config.homeserver, config.token);
AutojoinRoomsMixin.setupOnClient(client);


client.on("room.message", (roomId, event) => {
    if (!event["content"]) return;
    if (event.unsigned.age > 1000 * 60) return;
    if (event.sender === "@wug:dodsorf.as") return;

    var converted = x2i(event.content.body);
    if (converted === "") return;

    client.sendNotice(roomId, converted);
});

client.start().then(() => console.log("Client started!"));
