import MessageType from '@adiwajshing/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '🤖 Menciona al usuario con @user'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '🤖 Ingrese la cantidad de 🪙 que quiere transferir'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let xp = parseInt(txt)
  let exp = xp
  let imt = Math.ceil(xp * impuesto)
  exp += imt
  if (exp < 1) throw '🤖 Mínimo es  1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw '🤖 🪙 insuficiente para transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`
╭─✦─⋆❮✦☬✦❯⋆─✦─╮
╽TRANSFERENCIA De 🪙
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃❮❮❮❮ TURBO NITRO ❯❯❯❯
╭⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆≡
╽  ${-xp} 🪙
┃ Impuesto 2% : ${-imt} 🪙 
┃ Total gastado: ${-exp} 🪙
╰⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆`)
  conn.fakeReply(m.chat, `᳆⃟✪ Recibiste \n\n +${xp} 🪙`, who, m.text)
}
handler.help = ['payxp @user <monto>']
handler.tags = ['xp']
handler.command = ['payxp', 'transferxp', 'darxp'] 
handler.rowner = false

export default handler

