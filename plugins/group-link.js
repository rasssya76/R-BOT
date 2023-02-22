import fetch from "node-fetch"


let handler = async (m, { conn }) => {

  let link = await conn.groupInviteCode(m.chat)
  let linked = 'https://chat.whatsapp.com/' + link
 let s = await shortUrl(linked)
  await conn.sendMessage(m.chat, {
             text: `LINK NYA`,
             templateButtons: [{
             index: 1,
             urlButton: {
             displayText: `Copy`,
             url: `https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/${(await conn.groupInviteCode(m.chat))}`
            }
          }],
          footer: `R-BOT IS THE BEST`,
        })	
}

handler.help = ['linkgc', 'linkgroup']
handler.tags = ['group']
handler.command = /^link(gc|group)$/i

handler.group = true
handler.admin = false

export default handler


async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}