import x2i from "./x2i";

const config = require("./config.json");

const MatrixClient = require("matrix-bot-sdk").MatrixClient;
const AutojoinRoomsMixin = require("matrix-bot-sdk").AutojoinRoomsMixin;

const client = new MatrixClient(config.homeserver, config.token);
AutojoinRoomsMixin.setupOnClient(client);

const myself = client.getUserId()

client.on("room.message", handle);

async function handle(roomId, event) {
    if (!event["content"]) return;

    console.log("Got message!");

    if (event.unsigned.age > 1000 * 60) { console.log("Message was old!"); return; };
    if (event.sender === await myself) { console.log("Wait a minute... That's me!"); return;};

    if (event.content.body === "!xhelp") {help(roomId); return;};
    if (event.content.body === "!xdebug") {debug(roomId); return;};

    console.log("Trying to convert the message!");

    var converted = x2i(event.content.body);
    if (converted === "") return;

    client.sendNotice(roomId, converted);
};


function help(roomId) {
    var helpmessage = `Hi I can help you translate X-SAMPA, Z-SAMPA to IPA, and transcribe into proto-indo european notation!
Use (x/z/p) together with either / or [] as delimeters
x/hello/ z[or like this!] or p/waow/ 😀`;
    
    client.sendNotice(roomId, helpmessage);
}

async function debug(roomId) {
    var helpmessage = `Hi my name is ${await myself}, and I want to help you debug me!`;
    
    client.sendNotice(roomId, helpmessage);
}


client.start().then(() => console.log("Client started!"));
