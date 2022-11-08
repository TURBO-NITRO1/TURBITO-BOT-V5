//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '😎️ Taquea al usuario'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '🤖 Ingrese la cantidad de 🪙 que quiere añadir'
  if (isNaN(txt)) throw ' 🔂 sólo números'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '☣️ Mínimo es  1'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`☢️ 🪙 AÑADIDO
╭⋆┈⋆┈⋆⊰.✩.⊱⋆┈⋆┈⋆╮
┃  Total: ${xp}
✦꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷✦`)
 conn.fakeReply(m.chat, `☢️ Recibiste \n\n +${xp} 🪙`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

