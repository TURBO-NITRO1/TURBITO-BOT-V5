import twitterDl from 'fg-twitter'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🤖️ Ejemplo : \n${usedPrefix + command} https://twitter.com/JeissonDiazD/status/1478935542318481411?s=20&t=KGwkMr8qeo7888jUvXu8AA`
    let res = await twitterDl(args[0])
    try {
    for (let result of res.download) {
    	let res = result.url.replace('https://ssstwitter.com', '')
       conn.sendFile(m.chat, res, 'twitter.mp4', '😎 Resultado' , m)
  }
  } catch (e) {
  	m.reply('📵️ Revise el link sea de un video de Twitter')
	} 
  
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(twitter|tw)$/i


export default handler
