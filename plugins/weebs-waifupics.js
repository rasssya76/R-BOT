import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
  conn.sendButton(m.chat, 'Random Image Waifu', me, json.url, [['waifu', `${usedPrefix}waifu`]], m)
break

case 'neko':
  let _neko = await fetch('https://api.waifu.pics/sfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw global.error
  conn.sendButton(m.chat,  'Random Image Neko', me, neko.url, [['Next','.neko']],m)
break 

case 'megumin':
  let _megumin = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!_megumin.ok) throw await _megumin.text()
  let megumin = await _megumin.json()
  if (!megumin.url) throw global.error
  conn.sendButton(m.chat, 'Random Image Megumin', me, megumin.url, [['Next','.megumin']],m)
break

    case 'hentai':
 let _waifuddk = await fetch(`https://waifu.pics/api/nsfw/waifu`) 
if (!_waifuddk.ok) throw await _waifuddk.text()
  let waifuddk = await _waifuddk.json()
  if (!waifuddk.url) throw global.error
conn.sendButton(m.chat, 'Banh 🤨', me, waifuddk.url, [['Next','.hentai']],m)
break
    case 'trap':
 let _waifudddk = await fetch(`https://waifu.pics/api/nsfw/trap`) 
if (!_waifudddk.ok) throw await _waifudddk.text()
  let waifudddk = await _waifudddk.json()
  if (!waifudddk.url) throw global.error
conn.sendButton(m.chat, 'Bjirt peyuka batang ya😱', me, waifudddk.url, [['Next','.trap']],m)
break
    
default:
 }
}

handler.help = ['waifu', 'neko', 'megumin', 'hentai', 'trap']
handler.tags = ['random']
handler.command = /^(waifu|neko|megumin|hentai|trap)$/i
handler.premium = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}