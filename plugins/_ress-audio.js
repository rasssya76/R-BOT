import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

let handler = async (m, { conn, args, isPrems, isOwner }) => {
  try{


  let q = '128kbps'
  let v = args[0]


// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendFile(m.chat, dl_url, ttl + '.mp3', me, m, null, {
    asDocument: true
  })
    } catch(err) {
m.reply(`🚩 *Gagal Dalam Pengiriman Audio* | Mungkin karena ukuran audio terlalu besar`)
  }
}


handler.command = /^(getaud)$/i
export default handler
