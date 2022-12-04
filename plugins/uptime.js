let { generateWAMessageFromContent } = require('@adiwajshing/baileys')
let handler = async (m, { usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let fetch = require("node-fetch")
let who = m.sender
let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let runnya = `
*───「 ʀᴜɴᴛɪᴍᴇ 」───*

*⏰ ᴡᴀᴋᴛᴜ : ${time} ᴡɪʙ*
*🪫 ᴀᴋᴛɪꜰ ꜱᴇʟᴀᴍᴀ : ${uptime}*`

let zaky = `©made by zaky` 
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: runnya,
description: '^^',
orderTitle: 'Hehe',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: '17608914335@s.whatsapp.net',
thumbnail: await (await fetch('https://telegra.ph/file/014c275d32588191c040b.jpg')).buffer()}}, {quoted: m})
conn.relayWAMessage(prep)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}