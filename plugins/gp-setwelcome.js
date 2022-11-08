//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('🧑🏻‍💻 Mensaje de bienvenida configurado')
  } else throw `🤖️ Ingrese el mensaje de Bienvenida\n\n@user (mención)\n@group (Nombre de grupo)\n@desc (description de grupo)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
