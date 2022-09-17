const qrcode = require('qrcode-terminal');
const WwebjsSender = require("@deathabyss/wwebjs-sender");
const fs = require('fs');
const { Client, LocalAuth, Buttons, List } = require('whatsapp-web.js');


// Use the saved values
const client = new Client();
// let btnData = new Buttons();
// btnData.buttons = ([{ body: 'button1' }, { body: 'button2' }, { body: 'button3' }]);
// btnData.body = "This is the body";
// btnData.titleitle = "This is the title";
// btnData.footer = "This is the footer";

const button = new Buttons("body", [{ buttonText: { 'displayText': 'button1' }, type: 1 }, { buttonText: { 'displayText': 'button2' }, type: 1 }], "title", "footer");



client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});





client.on('ready', () => {
    console.log('Client is ready!');
});

// client.on('message', (message) => {
//     console.log(message.body);
//     if (message.body == 'Hello') {
//         message.reply(`Hello !!!${message.author}`);
//     }
// });

// const     list = new List("Text1", "Text2", [{ title: "the title", rows: [{ id: "L1", title: "L1" }, { id: "L2", title: "L2" }] }], "please select");

client.on('message', async (message) => {
    const Contact = await message.getContact();
    let btn1 = new WwebjsSender.MessageButton().setCustomId("Yes").setLabel("Yes");
    WwebjsSender.reply({ button: btn1 });

})

// //text button
// let button = new Buttons("body",[{body:"bt1"},{body:"bt2"},{body:"bt3"}],"title","footer");
// client.sendMessage(message['from'], button);


//media button ( Testing, images works fine )

// let media = MessageMedia.fromFilePath("image.png");
// let button = new Buttons(media,[{body:"bt1"},{body:"bt2"},{body:"bt3"}],"title","footer");
// client.sendMessage(message['from'], button,{'caption':"body"});




client.initialize();
