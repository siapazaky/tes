let fetch = require('node-fetch')
const { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Input Query'
  await m.reply('_*Sedang Di Proses⌛, Jika Terjadi Error Berarti Tidak Di Temukan Video Yang Kamu Cari*_')
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
  const link = await yt.audio['128kbps'].download()
  let capt = `*YOUTUBE PLAY*`
  let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}ytv ${url}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: `✏️*Title:* ${title}\n📤 *Published:* ${publishedTime}\n⏰ *Duration:* ${durationH}\n👁️ *Views:* ${viewH}\n\n🔗 *Url:* ${url}\n📔 *Description:* ${description}\n\n_Audio on progress..._`, buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: link }, mimetype: 'audio/mpeg' }, { quoted: msg })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
handler.limit = true

module.exports = handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}