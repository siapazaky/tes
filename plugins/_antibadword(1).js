let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri
handler.before = async function (m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    console.log(isBadword)

    if (chat.antiBadword && isBadword) {
        user.warning += 1
        conn.sendButton(m.chat, `*📮ᴛᴏxɪᴄ ᴛᴇʀᴅᴇᴛᴇᴋꜱɪ !\nhttps://animenya.ga/ ᯤ*
あ Warning: ${user.warning} / 5 ┊

[❗] Jika warning mencapai 5 kamu akan *dibanned+kick*

Anda hanya bisa meminta Owner untuk membuka banned-nya !\n\n🌸 Bot By zaky 

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, wm, 'OFF BADWORD', '.off antibadword', m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0 
}

module.exports = handler


// jasa buat by Fokusdotid (Fokus ID)
