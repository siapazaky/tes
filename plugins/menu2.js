const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/6281365255567`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Nimebotz`
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

let str = `\n\n*『 ɪ ɴ ᴛ ʀ ᴏ ᴄ ᴀ ᴅ ᴜ ᴛ ɪ ᴏ ɴ 』*\n\n`
let isi =`*𓊈𒆜𝓢𝔂𝓪𝓻𝓪𝓽 𝓭𝓪𝓷 𝓴𝓮𝓽𝓮𝓷𝓽𝓾𝓪𝓷 𝓫𝓸𝓽𒆜𓊉*\n1. ʙᴏᴛ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴏᴜᴘ ᴀᴘᴀʙɪʟᴀ ꜱᴜᴅᴀʜ ᴡᴀᴋᴛᴜɴʏᴀ ᴋᴇʟᴜᴀʀ.\n2. ʙᴏᴛ ᴅᴀᴘᴀɴ ᴍᴇᴍ-ʙᴀɴ ᴜꜱᴇʀꜱ ꜱᴇᴄᴀʀᴀ ꜱᴇᴘɪʜᴀᴋ ᴛᴇʀʟᴇᴘᴀꜱ ᴅᴀʀɪ ᴜꜱᴇʀꜱ ꜱᴀʟᴀʜ ᴀᴛᴀᴜ ᴛɪᴅᴀᴋ.\n3. ʙᴏᴛ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ʙᴇʀᴛᴀɴɢɢᴜɴɢᴊᴀᴡᴀʙ ᴀᴛᴀꜱ ᴀᴘᴀᴘᴜɴ ʏᴀɴɢ ᴜꜱᴇʀꜱ ʟᴀᴋᴜᴋᴀɴ ᴛᴇʀʜᴀᴅᴀᴘ ꜰɪᴛᴜʀ ʙᴏᴛ.\n4. ʙᴏᴛ ᴀᴋᴀɴ ᴍᴇᴍʙᴇʀʟᴀᴋᴜᴋᴀɴ ʜᴜᴋᴜᴍᴀɴ: ʙʟᴏᴄᴋ ᴀᴛᴀᴜ ʙᴀɴ ᴛᴇʀʜᴀᴅᴀᴘ ᴜꜱᴇʀꜱ ʏᴀɴɢ ᴍᴇʟᴀɴɢɢᴀʀ ᴘᴇʀᴀᴛᴜʀᴀɴ.\n5. ʙᴏᴛ ʙᴇʀᴛᴀɴɢɢᴜɴɢ ᴊᴀᴡᴀʙ ᴀᴛᴀꜱ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜰᴀᴛᴀʟ ᴅᴀʟᴀᴍ ᴘʀᴏɢʀᴀᴍɪɴɢ ᴍᴀᴜᴘᴜɴ ᴏᴡɴᴇʀ.
*𓊈𒆜𝓝𝓸𝓽𝓮𒆜𓊉*
ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅɪ ʀᴀɴᴄᴀɴɢ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʀᴍᴜᴅᴀʜ ᴏʀᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴛɪᴄᴋᴇʀ/ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴍᴇɴᴛᴀɴɢ-ᴍᴇɴᴛᴀɴɢ ɢʀᴀᴛɪꜱ ʟᴜ ᴀꜱɪᴋ ɴɢᴇꜱᴘᴀᴍ, ᴍɪɴɪᴍᴀʟ ʙᴇʀɪ ᴊᴇᴅᴀ 2ᴍᴇɴɪᴛ
http://ī.am/z𝖆𝖐𝖞𝕻𝖗𝖎𝖛𝖆𝖙𝖊

*ıll ʀᴜɴᴛɪᴍᴇ : ${uptime}*\n*lıl ᴛᴀɴɢɢᴀʟ : ${week} ${date}*\n*Powered By* @${'6281365255567'.split('@')[0]}`
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
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 }