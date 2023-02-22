const { Configuration, OpenAIApi } = await import("openai");

let handler = async (m, { args, usedPrefix, command, text }) => {
if (!text) throw `Example ${usedPrefix}${command} Siapa kah yg nyiptain epep`
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.2,
              presence_penalty: 0,
            });
const resultnya = response.data.choices[0].text
m.reply(resultnya)
}
handler.help = ['openai']
handler.tags = ['tools']
handler.command = /^(ai|openai)$/i

export default handler


const fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})