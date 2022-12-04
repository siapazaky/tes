let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
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
      let intro = `*ʙᴏᴛ* *ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴsғᴇʀ* _ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴋʜᴜsᴜs ᴅɪʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ-ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪs, ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴅɪʀᴀɴᴄᴀɴɢ sᴇᴅᴇᴍɪᴋɪᴀɴ ʀᴜᴘᴀ sᴇʜɪɴɢɢᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ɴʏᴀᴍᴀɴ, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ, ᴀᴅᴀɴʏᴀ ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ, ᴅʟʟ_
*𓊈𒆜𝓢𝔂𝓪𝓻𝓪𝓽 𝓭𝓪𝓷 𝓴𝓮𝓽𝓮𝓷𝓽𝓾𝓪𝓷 𝓫𝓸𝓽𒆜𓊉*  1. ʙᴏᴛ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴏᴜᴘ ᴀᴘᴀʙɪʟᴀ ꜱᴜᴅᴀʜ ᴡᴀᴋᴛᴜɴʏᴀ ᴋᴇʟᴜᴀʀ.  2. ʙᴏᴛ ᴅᴀᴘᴀɴ ᴍᴇᴍ-ʙᴀɴ ᴜꜱᴇʀꜱ ꜱᴇᴄᴀʀᴀ ꜱᴇᴘɪʜᴀᴋ ᴛᴇʀʟᴇᴘᴀꜱ ᴅᴀʀɪ ᴜꜱᴇʀꜱ ꜱᴀʟᴀʜ ᴀᴛᴀᴜ ᴛɪᴅᴀᴋ.  3. ʙᴏᴛ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ʙᴇʀᴛᴀɴɢɢᴜɴɢᴊᴀᴡᴀʙ ᴀᴛᴀꜱ ᴀᴘᴀᴘᴜɴ ʏᴀɴɢ ᴜꜱᴇʀꜱ ʟᴀᴋᴜᴋᴀɴ ᴛᴇʀʜᴀᴅᴀᴘ ꜰɪᴛᴜʀ ʙᴏᴛ.  4. ʙᴏᴛ ᴀᴋᴀɴ ᴍᴇᴍʙᴇʀʟᴀᴋᴜᴋᴀɴ ʜᴜᴋᴜᴍᴀɴ: ʙʟᴏᴄᴋ ᴀᴛᴀᴜ ʙᴀɴ ᴛᴇʀʜᴀᴅᴀᴘ ᴜꜱᴇʀꜱ ʏᴀɴɢ ᴍᴇʟᴀɴɢɢᴀʀ ᴘᴇʀᴀᴛᴜʀᴀɴ.  5. ʙᴏᴛ ʙᴇʀᴛᴀɴɢɢᴜɴɢ ᴊᴀᴡᴀʙ ᴀᴛᴀꜱ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜰᴀᴛᴀʟ ᴅᴀʟᴀᴍ ᴘʀᴏɢʀᴀᴍɪɴɢ ᴍᴀᴜᴘᴜɴ ᴏᴡɴᴇʀ.
*𓊈𒆜𝓝𝓸𝓽𝓮𒆜𓊉*
ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅɪ ʀᴀɴᴄᴀɴɢ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʀᴍᴜᴅᴀʜ ᴏʀᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴛɪᴄᴋᴇʀ/ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴍᴇɴᴛᴀɴɢ-ᴍᴇɴᴛᴀɴɢ ɢʀᴀᴛɪꜱ ʟᴜ ᴀꜱɪᴋ ɴɢᴇꜱᴘᴀᴍ, ᴍɪɴɪᴍᴀʟ ʙᴇʀɪ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ

*ıll ʀᴜɴᴛɪᴍᴇ : ${uptime}*\n*lıl ᴛᴀɴɢɢᴀʟ : ${week} ${date}*` 
      await conn.send2ButtonDoc(m.chat, `\n\n*『 𝓑𝓸𝓽 𝓦𝓱𝓪𝓽𝓼𝓐𝓹𝓹 𝓐𝓷𝓲𝓶𝓮 𝓛𝓸𝓿𝓮𝓻𝓼 𝓜𝓓𝓥2』*\n\n`, intro + `\n\n`, 'Lɪsᴛ Mᴇɴᴜ', '.simplemenu', 'Aʟʟ Mᴇɴᴜ', '.menu3', m, { contextInfo: { forwardingScore: 99999, externalAdReply: { body: '', containsAutoReply: true, mediaType: 1, mediaUrl: pickRandom(global.waifu), renderLargerThumbnail: true, showAdAttribution: true, sourceId: '', sourceType: 'PDF', previewType: 'PDF', sourceUrl: linkgc, thumbnail: await (await fetch(global.logo)).buffer(), thumbnailUrl: linkgc, title: ''}}}) 
  }  
  handler.help = ['menu'] 
  handler.tags = ['main']  
  handler.command = /^(menu)$/i   
    
  module.exports = handler 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 }
