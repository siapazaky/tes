let moment = require('moment-timezone')
let fetch = require('node-fetch')
let wm = global.wm
let img2 = global.img
let logo = global.logo
let handler = m => m

handler.all = async function (m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali 
    await this.send3ButtonLoc(m.chat, await conn.resize(await (await fetch(img2)).buffer(), 300, 200), `
*hai, ${ucapan()}*

${user.banned ? 'kamu dibanned' : 'ɴᴏᴛᴇ>_<'}
`.trim(), `sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ ᴢᴀᴋʏ ᴍᴏʜᴏɴ ᴊᴀɴɢᴀɴ ᴅɪ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ ᴊᴏɪɴ ᴋᴇ ɢʀᴏᴜᴘ ʙᴏᴛ sɪɴɪ\n *ɢʀᴏᴜᴘ ʙᴏᴛ ɢʀᴀᴛɪs*
ᴊᴏɪɴ sɪɴɪ ᴅɪ ɢʀᴏᴜᴘ ʙᴏᴛ

ᴀᴘᴀ ɪᴛᴜ ʙᴏᴛ? 
ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴀᴅᴀʟᴀʜ sᴇʙᴜᴀʜ ʀᴏʙᴏᴛ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʀᴍᴜᴅᴀʜ ᴋᴀᴍᴜ ᴍᴇᴍʙᴜᴀᴛ/ᴅᴏᴡɴʟᴏᴀᴅ sᴇsᴜᴀᴛᴜ ᴜɴᴛᴜᴋ ᴋᴇᴘᴇʀʟᴜᴀɴ ᴡʜᴀᴛsᴀᴘᴘ ᴋᴀᴍᴜ sᴇᴘᴇʀᴛɪ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴄᴋᴇʀ, ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ʏᴏᴜᴛᴜʙᴇ, ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴛɪᴋᴛᴏᴋ, ᴅʟʟ. 

ғɪᴛᴜʀ ʙᴏᴛ:𝟸𝟻𝟶+
◩ᴀɴᴛɪʙᴜɢ ✓
◩ᴀɴᴛɪᴠɪʀᴜs ✓
◩ᴀɴᴛɪʟɪɴᴋ ✓

*ᴅɪsɪɴɪ ɢᴄ ʙᴏᴛ ɴʏᴀ*
_https://chat.whatsapp.com/HqUkHx75YT9IuvKrtBCW9O_

*ᴏᴡɴᴇʀ*
_http://wa.me/6281365255567`, user.register ? '⋮☰ Menu' : 'Verify', user.register ? '.menu' : `.daftar ${username}.13`, 'Rules', '.rules', 'Owner', '.owner', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari ☀️"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time > 10) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌙"
    }
    return res
}
