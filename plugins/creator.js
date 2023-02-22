function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6282142108243@s.whatsapp.net')}\nitem1.TEL;waid=6282142108243:6282142108243\nitem1.X-ABLabel:Busy.\nURL;My Web: https://hi.you.my.id\nEMAIL;Email Owner: me@rm76.my.id\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=62821391036698:62821391036698\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
