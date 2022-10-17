let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    //else if (isOwner) conn.bye = text
    else if (isOwner) global.conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('🤖 Se cambió el mensaje de despedida')
  } else throw `🤖 Ingrese el mensaje\n@user (mención)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
handler.owner = false

export default handler
