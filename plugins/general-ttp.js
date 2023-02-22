import { sticker } from '../lib/stickerV2.js'

let handler = async (m, { conn, text }) => {
try{
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await createSticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), `\t「\t${conn.getName(m.sender)}\t」\t`, `${global.me}`)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
} catch(err) {
m.reply(`error coba lagi Minggu depan`)
}
}
handler.help = ['ttp <teks>']
handler.tags = ['general']

handler.command = /^ttp$/i

export default handler