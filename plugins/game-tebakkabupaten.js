const fetch = require ('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
  let id = m.chat
  if (id in conn.tebakkabupaten) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkabupaten[id][0])
    throw false
  }
  let flu = `${pickRandom(['https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='])}`
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  Kabupaten apakah ini?
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tebu untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakkabupaten[id] = [
    await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, '', 'Bantuan', '.tebu', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakkabupaten[id]) await conn.resize(await (await fetch(flu + 'Waktu Habis')).buffer(), 300, 200), `Jawabannya adalah *${json.title}*`, '', 'Tebak Kabupaten', '.tebakkabupaten', conn.tebakkabupaten[id][0])
      delete conn.tebakkabupaten[id]
    }, timeout)
  ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

module.exports = handler
