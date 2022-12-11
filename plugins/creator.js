const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `ɪɴɪ ʏᴀ ᴋᴀᴋ ɴᴏᴍᴏʀ ᴢᴀᴋʏ :3`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/b4e6bef10fc6eb02694bd.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, ftroli, { contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
	]
	await delay(100)
  return conn.sendButtonDoc(m.chat, `Hay kak @${await m.sender.split('@')[0]}, \nᴘᴇsᴀɴ`, 'ɪᴛᴜ ɴᴏᴍᴏʀ ᴢᴀᴋʏ ᴋᴀᴋ ᴋᴀʟᴀᴜ ᴀᴅᴀ ᴘᴇʀʟᴜ ᴄʜᴀᴛ ʏᴀʜ, ʙᴛᴡ ᴢᴀᴋʏ ʙᴜᴛᴜʜ ᴋᴏɴᴛᴀᴋ, ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ sᴘᴀᴍ ʙᴏᴛ;3','Credits', '.tqto', m, { quoted: conn.p[id][0],
    contextInfo: { //forwardingScore: 99999, isForwarded: true,
        externalAdReply: { //showAdAttribution: true,
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: 'ᴊᴀɴɢᴀɴ ʙᴜʟʟʏ ᴢᴀᴋʏ ᴅɪᴀ ᴋᴀɴɢ ᴋᴏᴘᴀs <3',
            body: 'ʙᴏᴛ ɴʏᴀ ᴊᴀɴɢᴀɴ ᴅɪ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ>_<',
          thumbnail: await (await fetch(pp)).buffer()
        }
     }
    }) 
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['kontakzaky', 'zaky']
handler.tags = ['info']
handler.command = /^(kontakzaky|zaky)$/i

module.exports = handler
