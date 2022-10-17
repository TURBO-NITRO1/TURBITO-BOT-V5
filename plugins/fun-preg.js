import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `🤖 Ejemplo : \n\n ${usedPrefix + command} soy lindo?`
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let json = await res.json()
  if (json.success) 
m.reply(`❰❰❰❰ PREGUNTAS ❱❱❱❱
 
👉🏻 Pregunta: ${text}
👉🏻 Respuesta : ${json.success.replace('simsimi', 'Turbo').replace('Simsimi', 'Turbo').replace('sim simi', 'Turbo')}`) 
  else throw json
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
