let { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
let fs = require('fs') 
let handler = async (m, { conn }) => {
let messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/logo.jpg') }, { upload: conn.waUploadToServer })
let catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5326844927399395",
"title": `*MAU SEWA BOT? KLIK AJA DI SINI*`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `gaktaukalo`,
"footerText": `koncol`,
"priceAmount1000": "25000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "26000000",
"retailerId": `Zaky⿻ꫂ`,
"url": "https://wa.me/c/6282289304381"
},
"businessOwnerJid": "6282289304381@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^sewa$/i

module.exports = handler