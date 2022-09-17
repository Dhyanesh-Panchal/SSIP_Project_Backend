const WwebjsSender = require("@deathabyss/wwebjs-sender");
const { Client } = require("whatsapp-web.js");
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on("qr", (qr) => {
    console.log("QR RECEIVED");
    qrcode.generate(qr, { small: true });

});

client.on("ready", () => {
    console.log("Client is ready!");
});

client.on("message", (msg) => {

    const { from } = msg;
    let embed = new WwebjsSender.MessageEmbed()
        .setTitle("✅ | Successful process!")
        .setDescription(
            "The process has been successful! To confirm press *Yes* or press *No* to cancel."
        )
        .setFooter("WwebjsSender")
        .setTimestamp();

    let button1 = new WwebjsSender.MessageButton()
        .setCustomId("yes")
        .setLabel("Yes");

    let button2 = new WwebjsSender.MessageButton()
        .setCustomId("no")
        .setLabel("No");

    WwebjsSender.send({
        client: client,
        number: from,
        embed: embed,
        button: [button1, button2],
    });

});

client.initialize();