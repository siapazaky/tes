let handler = async (m, { conn, command, text }) => {
const ftroli = {
	key : {
    remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' 
                        },
       message: {
                    orderMessage: {
                            itemCount : 99,
                            status: 404,
                            surface : 404,
                            message: `Jangan Lupa SV Nomor Owner Ya Kak >.< ${conn.getName(m.sender)}`, //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: await (await fetch('https://telegra.ph/file/7501d485189f34dc429a7.jpg')).buffer(), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
                          }
                        }
                      }
 conn.sendMessage(m.chat, {
    	react: {
    		text: "",
    		key: m.key
    	}
    })	
conn.sendFile(m.chat, 'https://raw.githubusercontent.com/oktetosupport/skybot-V8/master/sticker/ress5.webp', 'zivsan.png', 'Zivsan', ftroli)

}
handler.customPrefix = /^(ok|iya|sip|oky|okey)$/i
handler.command = new RegExp

module.exports = handler