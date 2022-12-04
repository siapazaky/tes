let handler = async (m, { conn, args, command }) => {
let sender = m.sender
let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendFile(m.chat, 'https://github.com/oktetosupport/bot/blob/master/sticker/ynkts4.webp?raw=true', 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `Total Fitur Bot Saat Ini: ${totalf}`, body: `${pickRandom(['Follow Tiktok My Bestie'])}`, sourceUrl: 'https://www.tiktok.com/@fory_whitecattiktok?_t=8V5TGON5rgv&_r=1', thumbnail: await (await fetch(pp)).buffer(),}} 
     })
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler