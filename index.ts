const version = "2.4.0";
import x2i from "./x2i";
import { existsSync } from "fs";

const config = (existsSync("./config.json")) ? require("./config.json") : {};

const MatrixClient = require("matrix-bot-sdk").MatrixClient;
const AutojoinRoomsMixin = require("matrix-bot-sdk").AutojoinRoomsMixin;

const homeserver = (config.homeserver || process.env.WUG_HOMESERVER || process.env.MATRIXDEV_HOMESERVER);
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
    if (event.content.msgtype === "m.notice") { return; };

    if (event.content.body === "!xhelp" || event.content.body === (await client.getUserProfile(await myself)).displayname + ": help") {help(roomId); return;};
    if (event.content.body === "!xik") {xik(roomId); return;};
    if (event.content.body === "!xpie") {xpie(roomId); return;};
    if (event.content.body === "!xchr") {xchr(roomId); return;};
    if (event.content.body === "!xnav") {xnav(roomId); return;};
    if (event.content.body === "!xdebug") {debug(roomId); return;};

    console.log("Trying to convert the message!");

    var converted = x2i(event.content.body);
    if (converted === "") return;

    client.sendNotice(roomId, converted);
};


function help(roomId) {
    var message = `Hi I am a general language bot!
To use me, type a key together with either / or [] as delimeters

x - X-SAMPA - https://en.wikipedia.org/wiki/X-SAMPA
z - Z-SAMPA - https://web.archive.org/web/20191116002807/http://kneequickie.com/kq/Z-SAMPA
p - Proto-Indo-European Notation - https://gist.github.com/xsduan/8ebd580be71214c57aa554ec9050916c
i - Inuktitut Syllabics - https://en.wikipedia.org/wiki/Inuktitut_syllabics
ik - Iñupiatun Orthographies (see !xik)
chr - Cherokee (see !xchr) - https://en.wikipedia.org/wiki/Cherokee_syllabary
nav - Navajo (see !xnav)
hi - Hiragana, mainly https://en.wikipedia.org/wiki/Nihon-shiki_romanization and hepburn, but also with other unofficial styles

Find my source at https://github.com/Dali99/matrix-wug

EXAMPLES:
x/"hEloU/ - /ˈhɛloʊ/
z[or\` 5aIk DIz] - [oɽ ɫaɪk ðɪz]
`;
    
    client.sendNotice(roomId, message);
}

function xpie(roomId) {
    var message = `This is a fun PIE notation

a preceding " is acute accent
a following : is the macron
a following . is the syllabicity marker
h always becomes superscript and v is superscript w.
Palato-velars are marked with a following ' and x1, x2, x3 etc. yields the laryngeals, with x@ for the subscript a laryngeal, and xx for an unknown laryngeal.

There's probably more, but this is best learned by experimenting (or reading https://gist.github.com/xsduan/8ebd580be71214c57aa554ec9050916c)

Thanks to conniebot (xsduan) for the encoding`;
    
    client.sendNotice(roomId, message);
}

function xik(roomId) {
    var message = `There are several distinct Iñupiatun orthographies, and I can type all of them.
& for miniscule ł
l% and n% for ł and ñ each
g^, l^, &^ (or l%^ and l^%) n^, and r^ for ġ ḷ ł̣ ŋ ȓ each

Thanks to Tuugaalikkuluk for the encoding`;
    
    client.sendNotice(roomId, message);
}

function xchr(roomId) {
    var message = `I'm sadly not smart enough to know which syllable to  use in certain situations.
That means you have to help me out a little.
Write the wanted syllables down, but separate them by  a dot (.) or an apostrophe (')

Thanks to Tuugaalikkuluk for the encoding

EXAMPLES:
chr/tsa.la.gi ga.wo.ni.hi.s.di/ - ᏣᎳᎩ ᎦᏬᏂᎯᏍᏗ`;
    
    client.sendNotice(roomId, message);
}

function xnav(roomId) {
    var message = `My navajo encoding is as follows:
Caron after a vowel gives it an acute accent: o^ → ó, A^ → Á
At sign after a vowel gives it an ogonek: a@ → ą, E@ → Ę
Percentage sign after a vowel gives it both an ogonek and an acute accent: a% → ą́, I% → Į́ and after an l, it makes ł: l% → ł
You can also "stack the symbols" for an ogonek and an accute accent: (a^@, a@^) → ą́
Single quotation mark is converted to the glottal stop/ejective mark (’)
For a plain quotation mark, you can type '^

Thanks to Tuugaalikkuluk for the encoding`;

    client.sendNotice(roomId, message);
}



async function debug(roomId) {
    var message = `Hi my name is ${await myself}, and I want to help you debug me!
I run version ${version} 💝 and currently reside in ${roomId}`;
    
    client.sendNotice(roomId, message);
}


client.start().then(() => console.log("Client started!"));
