const version = "1.1.1";
import x2i from "./x2i";
import { existsSync } from "fs";

const config = (existsSync("./config.json")) ? require("./config.json") : {};

console.log(process.env.MATRIXDEV_HOMESERVER);
console.log(process.env.MATRIXDEV_TOKEN);

const MatrixClient = require("matrix-bot-sdk").MatrixClient;
const AutojoinRoomsMixin = require("matrix-bot-sdk").AutojoinRoomsMixin;

const homeserver = (config.homeserver || process.env.WUG_HOMESERVER  || process.env.MATRIXDEV_HOMESERVER);
const token = (config.token || process.env.WUG_TOKEN || process.env.MATRIXDEV_TOKEN);

const client = new MatrixClient(homeserver, token);
AutojoinRoomsMixin.setupOnClient(client);

const myself = client.getUserId();

client.on("room.message", handle);

async function handle(roomId, event) {
    if (!event["content"]) return;

    console.log("Got message!");

    if (event.unsigned.age > 1000 * 60) { console.log("Message was old!"); return; };
    if (event.sender === await myself) { console.log("Wait a minute... That's me!"); return;};

    if (event.content.body === "!xhelp" || event.content.body === (await client.getUserProfile(await myself)).displayname + ": help") {help(roomId); return;};
    if (event.content.body === "!xdebug") {debug(roomId); return;};

    console.log("Trying to convert the message!");

    var converted = x2i(event.content.body);
    if (converted === "") return;

    client.sendNotice(roomId, converted);
};


function help(roomId) {
    var message = `Hi I can help you translate X-SAMPA, Z-SAMPA to IPA, and transcribe into proto-indo european notation!
Use (x/z/p) together with either / or [] as delimeters
x/"hEloU/ z[or\` 5aIk DIz] p/mreghnom/ 😀

Find my source at https://github.com/Dali99/matrix-wug`;
    
    client.sendNotice(roomId, message);
}

async function debug(roomId) {
    var message = `Hi my name is ${await myself}, and I want to help you debug me!
I run version ${version} 💝 and currently reside in ${roomId}`;
    
    client.sendNotice(roomId, message);
}


client.start().then(() => console.log("Client started!"));
