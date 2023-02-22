import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
let chat = global.db.data.chats[m.chat]

    let res = await axios.get(`https://api.tikdl.caliphdev.codes/video?url=${args[0]}`)
   /* if (res.status != 200) throw res.message;
    if (!res) throw res.message;*/
    
conn.sendMessage(m.chat, { audio: { url: res.data.result.music.play_url }, mimetype: 'audio/mpeg' }, { quoted: m })
                 
 
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i

export default handler