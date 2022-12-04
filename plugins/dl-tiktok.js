const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper') 
 let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => { 
         if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
await m.reply('_*Loading...*_') 
     tiktokdl(args[0]).then(r => { 
     let video = r.video.no_watermark 
     conn.sendButtonVid(m.chat, video, '_*DOWNLOAD TIKTOK*_', 'Type : succes\n\nClick Tombol Di Bawah Untuk Versi Audio\n©made by zaky', 'Audio/Voice', usedPrefix + `ttaudio ${args[0]}`, m)
 })
 } 
 handler.help = ['tiktok'].map(v => v + ' <url>') 
 handler.tags = ['downloader'] 
 handler.limit = true 
 handler.group = false

 handler.command = /^(tt|tiktok|tik)$/i 

 module.exports = handler