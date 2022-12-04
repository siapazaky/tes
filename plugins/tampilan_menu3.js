let levelling = require('../lib/levelling') 
 let fs = require('fs') 
 let path = require('path') 
 let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let jimp = require('jimp') 
 let PhoneNumber = require('awesome-phonenumber') 
 let tags = {} 
 const defaultMenu = { 
   before: `
┌── ⳹°❀❬ %me ❭❀°
│✎  Name *%name!*
│✎  Waktu:  *%time* 
│✎  Name Bot: *%me*
│✎  Uptime:  *%uptime*
│✎  Owner :  *@${global.owner[0].split('@')[0]}*
│✎  Memory Used :  *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB* 
└─────┈ ⳹ ❋ཻུ۪۪⸙`.trim(),
  header: '┌─ ⳹°❀❬ %category ❭❀°',
  body: '│✎ %cmd %islimit %isPremium',
  footer: '└────┈ ⳹ ❋ཻུ۪۪⸙\n',
   after: ``,
   }
  
 let handler = async (m, { conn, usedPrefix: _p }) => { 
   try { 
     let name = m.pushName || conn.getName(m.sender) 
     let d = new Date(new Date + 3600000) 
     let locale = 'en' 
     // d.getTimeZoneOffset() 
     // Offset -420 is 18.00 
     // Offset    0 is  0.00 
     // Offset  420 is  7.00 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric', 
       timeZone: 'Asia/Jakarta' 
     }) 
     let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' }) 
     time = time.replace(/[.]/g, ':') 
     let _uptime 
     if (process.send) { 
       process.send('uptime') 
       _uptime = await new Promise(resolve => { 
         process.once('message', resolve) 
         setTimeout(resolve, 1000) 
       }) * 1000 
     } 
     let sender = m.sender
     let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
     let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt') 
     let txt = await res.text() 
     let arr = txt.split('\n') 
     let cita = arr[Math.floor(Math.random() * arr.length)] 
     let thumb = await(await fetch(cita)).buffer() 
       let vn = './media/tante-tante.mp3' 
     let uptime = clockString(_uptime) 
     let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => { 
       return { 
         help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help], 
         tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags], 
         prefix: 'customPrefix' in plugin, 
         limit: plugin.limit, 
         premium: plugin.premium, 
         enabled: !plugin.disabled, 
       } 
     }) 
     for (let plugin of help) 
       if (plugin && 'tags' in plugin) 
         for (let tag of plugin.tags) 
           if (!(tag in tags) && tag) tags[tag] = tag 
     conn.menu = conn.menu ? conn.menu : {} 
     let before = conn.menu.before || defaultMenu.before 
     let header = conn.menu.header || defaultMenu.header 
     let body = conn.menu.body || defaultMenu.body 
     let footer = conn.menu.footer || defaultMenu.footer 
     let after = conn.menu.after || defaultMenu.after 
     let _text = [ 
       before, 
       ...Object.keys(tags).map(tag => { 
         return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [ 
           ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => { 
             return menu.help.map(help => { 
               return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help) 
                 .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '') 
                 .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '') 
                 .trim() 
             }).join('\n') 
           }), 
           footer 
         ].join('\n') 
       }), 
       after 
     ].join('\n') 
     let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '' 
     let replace = { 
       '%': '%', 
       p: _p, uptime, 
       me: conn.getName(conn.user.jid), 
       name, date, time, 
       readmore: readMore 
     } 
     let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282331033919-1625305606@g.us" } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
     const ziv = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`💌 Contact : ${name}
` + wm2,
                 'jpegThumbnail': await conn.resize(pp, 300, 300)
                        }
	                  } 
                     }
let hao = `▸ Ⓟ = for premium home.\n▸ Ⓛ = fitur berlimit.
 
*Official Bot By @${'0'.split('@')[0]}* 
*Powered By @${global.owner[0].split('@')[0]}*` 
     text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
conn.send3ButtonImg(m.chat, await genProfile(conn, m), text.trim(), hao,  'DASHBORD', '.dashbord', 'RULES', '.rules', 'OWNER', '.owner', m, { 
     quoted: m, 
     contextInfo: { forwardingScore: 99999, isForwarded: true,
         externalAdReply :{ //showAdAttribution: true, 
    mediaType: 1,
    title: 'Simple Bot Whatsapp With Baileys',
    body: 'Whatsapp Bot Create By Ziv San',
    thumbnail: await(await fetch('https://telegra.ph/file/9d4b2125484004a649a07.jpg')).buffer(),
    renderLargerThumbnail: true, 
    mediaUrl: 'https://youtu.be/dcZWxOPAItU',
    sourceUrl: `https://www.tiktok.com/@colindonesia?_t=8VRaB1ZSiI6&_r=1`
     }}
    })
} catch (e) { 
     conn.reply(m.chat, 'Maaf, menu sedang error', m) 
     throw e 
   } 
 } 
 handler.help = ['menu3'] 
 handler.tags = ['main'] 
 handler.command = /^(menu3)$/i 
 handler.owner = false 
 handler.mods = false 
 handler.premium = false 
 handler.group = false 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
 handler.exp = 3 
  
 module.exports = handler 
  
 const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
 function logos() { 
   const lgs = moment.tz('Asia/Jakarta').format('HH') 
   res = "Selamat dinihari" 
   if (lgs >= 4) { 
     imp = 'https://telegra.ph/file/abff7903bd674a8f9d307.jpg' 
   } 
   if (lgs > 10) { 
     imp = 'https://telegra.ph/file/ba940019735e224132f74.jpg' 
   } 
   if (lgs >= 15) { 
     imp = 'https://telegra.ph/file/a332bbac803e3c631bb07.jpg' 
   } 
   if (lgs >= 18) { 
     imp = 'https://telegra.ph/file/a5c91ab6c58c7be066654.jpg' 
   } 
   return imp 
 } 
 function dimas() { 
   const varel = moment.tz('Asia/Jakarta').format('HH') 
   res = "Selamat dinihari" 
   if (varel >= 4) { 
     dimrel = 'https://telegra.ph/file/8ed7c08f3c53efb3250e8.jpg' 
   } 
   if (varel > 10) { 
     dimrel = 'https://telegra.ph/file/6e44f7a0ca634419fd6fe.jpg' 
   } 
   if (varel >= 15) { 
     dimrel = 'https://telegra.ph/file/5d0efe9615a43d069d9fb.jpg' 
   } 
   if (varel >= 18) { 
     dimrel = 'https://telegra.ph/file/b823c87f29294bf3bb9eb.jpg' 
   } 
   return dimrel 
 } 
 function ucapan() { 
   const time = moment.tz('Asia/Jakarta').format('HH') 
   res = "Selamat dinihari" 
   if (time >= 4) { 
      res = "Selamat pagi" 
   } 
   if (time > 10) { 
     res = "Selamat siang" 
   } 
   if (time >= 15) { 
     res = "Selamat sore" 
   } 
   if (time >= 18) { 
     res = "Selamat malam" 
   } 
   return res 
 }
  
  async function genProfile(conn, m) { 
   let font = await jimp.loadFont('./name.fnt'), 
     mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await jimp.read(thumbnailUrl.getRandom()), 
     avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
  
     await welcome.print(font, 550, 180, 'Name:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'About:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Number:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
 }