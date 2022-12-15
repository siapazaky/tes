let moment = require('moment-timezone') 
const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/6281365255567`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Nimebotz`
let wibh = moment.tz('Asia/Jakarta').format('HH') 
     let wibm = moment.tz('Asia/Jakarta').format('mm') 
     let wibs = moment.tz('Asia/Jakarta').format('ss') 
 let wktuwib = `${wibh} H ${wibm} M ${wibs} S` 
let locale = 'id' 
  let d = new Date(new Date + 3600000) 
   let _uptime = process.uptime() * 1000 
   let uptime = clockString(_uptime) 
   let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `𝗪𝗔𝗞𝗧𝗨 : ${wibh} H ${wibm} M ${wibs} S`
let isi =`❏ *MENU* ❏
Hay ${conn.getName(m.sender)}. Selamat Pagi 🌄, Saya merupakan bot WhatsApp yang di kembangkan oleh *ZakY* Saya bisa membantumu kapan pun dan di manapun kamu berada, Dan saya juga bisa membuat kamu menghilangkan rasa gabut..., Oh iya. kamu dapat nomor saya dari mana? Sebelum menggunakan bot ini, kamu harus tau rules nya yah agar tidak ter banned oleh bot. Terima kasih sudah menggunakan animelovers BOT & Bot ini terjaga privasi nya!

NOTE:
• Jangan menelepon Bot/Don't call bot 
• Jangan Spam bot/Don't spam bot
• Jangan spam fitur eror/Don't spam the error feature
• Gunakan dengan baik & Benar/Use Well & Correctly 


*🏷️ Nama:* ${conn.getName(m.sender)}
*⏰runtime:* ${uptime}

NOTE: Jika ada bug, mohon untuk menunggu sekitar ±20 menit`
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  let json = await res.json()
let thumb = await(await fetch(logo)).buffer()
conn.send3ButtonImg(m.chat, json.url, str, isi, 'Menu', '.simplemenu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: linkig,
    mediaType: 2, 
    description: urlnya,
    title: "Hay Kak(⁠≧⁠▽⁠≦⁠)",
    body: wm,
    thumbnail: thumb,
    sourceUrl: linkig
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.fail = null

module.exports = handler

function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
 }