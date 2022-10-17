let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
    💤 AFK 
🤖 Estas afk Envía un mensaje 🤖
᳆⃟✪ Usuario: ${conn.getName(m.sender)} 
᳆⃟✪ Motivó: ${text ? ': ' + text : ''}
  `)
}
handler.help = ['Afk <motivo>']
handler.tags = ['fun']
handler.command = ['afk']

export default handler
