import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `š§š»āš» Que imagen quieres?\n\nš§š»āš» Ejemplo šš» ${usedPrefix + command} Lil Peep`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
š§š»āš»  Pinterest:  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest'] 

export default handler
