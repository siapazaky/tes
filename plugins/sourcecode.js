let fetch = require('node-fetch')
 let handler = async (m, { conn, usedPrefix: _p, command }) => { 
 let sender = m.sender
 let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
const ziv = {
	 key: { 
          fromMe: false,
	   participant: '0@s.whatsapp.net', ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${_p}${command}`,
                 'jpegThumbnail': await conn.resize(pp, 300, 300)
                        }
	                  } 
                     }
 conn.sendFile(m.chat, 'https://telegra.ph/file/1de3775069cffbf3ab3ae.mp4', 'out.png',
`◪ 📮 _*SCRIPT BOT*_
│ _*Script :*_ 
│ _*╰ Script By Zaky Private>⁠.⁠<*_
│ _*Base :*_ 
│ _*╰ Base By Ziv San*_
╰──────────═┅═──────────
📍 _*SC MADE BY ZAKY :*_ 
_*• Sc Private Bang!*_
_*• Iya Dah Bang Sc Gw Jelek, Sc Lu Dah Paling Bagus:v*_`, ziv, true, { gifPlayback: true, jpegThumbnail: await conn.resize('https://telegra.ph/file/e452ca92a5eb2f033c48e.png', 300, 200), contextInfo:{ forwardingScore: 99999, isForwarded: true, externalAdReply :{
    mediaType: 1, 
    title: 'Script Original From Ziv Haori Record By Zaky',
    body: 'Lagi Nyari Script?, Sorry Sc Private!',
    thumbnail: await(await fetch('https://telegra.ph/file/fb2ae9a102ae7bb8a6703.png')).buffer(),
    renderLargerThumbnail: true, 
    sourceUrl: `https://www.tiktok.com/@colindonesia?_t=8VTagbEgl7Z&_r=1`
     }}
    })
    }
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i
module.exports = handler