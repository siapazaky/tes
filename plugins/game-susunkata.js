const fs = require('fs')
const fetch = require('node-fetch')
const timeout = 120000
const poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, 'Bantuan', usedPrefix + 'suka', conn.susunkata[id][0])
        throw false
    }
    let flu = `${pickRandom(['https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='])}`
    let res = JSON.parse(fs.readFileSync('./api/susunkata.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
${json.soal}

Yang Berkaitan Dengan *${json.tipe}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}suka* untuk bantuan
Poin: *${poin} XP*
    `.trim()
    conn.susunkata[id] = [
    await conn.sendButtonLoc(m.chat, await conn.resize(await (await fetch(flu + 'SusunKata')).buffer(), 300, 200), caption, wm, 'Bantuan', usedPrefix + 'suka', m),
    json,
    poin,
    setTimeout(() => {
        if (conn.susunkata[id]) await conn.sendButtonLoc(m.chat, await conn.resize(await (await fetch(flu + 'Waktu Habis')).buffer(), 300, 200), `Jawabannya adalah *${json.jawaban}*`, wm, 'Susun Kata', usedPrefix + 'susunkata', conn.susunkata[id][0])
            delete conn.susunkata[id]
    }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

module.exports = handler