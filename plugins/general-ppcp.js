import fs from "fs"
import axios from "axios"
import fetch from "node-fetch"
     let handler  = async (m, { conn, command }) => {     
     let username = conn.getName(m.sender)
     let data = fs.readFileSync('./lib/ppcouple.js');
     let  jsonData = JSON.parse(data);
     let randIndex = Math.floor(Math.random() * jsonData.length);
     let json = jsonData[randIndex];
     let randCowo= await getBuffer(json.cowo)
     conn.sendMessage(m.chat, { image: randCowo, caption: '*Cowo*'}, {quoted: m })
	 let randCewe = await getBuffer(json.cewe)
	conn.sendMessage(m.chat, { image: randCewe, caption: '*Cewe*'}, {quoted: m })
}
handler.help = ['ppcouple']
handler.tags = ['general']
handler.command = /^ppcouple|ppcp$/i
handler.limit = true

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}