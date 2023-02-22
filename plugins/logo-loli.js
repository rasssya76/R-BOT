import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://api.caliph.biz.id/api/lolimaker?nama=${response[0]}&nama2=${response[0]}&apikey=caliphkey`
  conn.sendFile(m.chat, res, 'loli.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logololi)$/i

export default handler