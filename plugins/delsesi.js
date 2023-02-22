import { tmpdir } from 'os'
import path, { join } from 'path'
import fs from "fs"
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
fs.readdir("./sessions", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("sessions-")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return m.reply(teks)     
m.reply(teks) 
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sessions/${file}`)
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah di folder sessions")     
});
}
handler.help = ['delsesi']
handler.tags = ['owner']
handler.command = /^(delsesi)$/i

handler.rowner = true

export default handler


const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}