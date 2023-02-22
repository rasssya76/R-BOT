import { addExif } from '../lib/sticker.js'

let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Reply sticker!'
    let img = await m.quoted.download()
      stiker = await addExif(img, `\t「\t${conn.getName(m.sender)}\t」\t`,'BOT WHATSAPP SIMPLE (R-BOT)')
    } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['general']
handler.command = /^colong$/i
//handler.owner = true

export default handler