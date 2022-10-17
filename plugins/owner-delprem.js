let handler = async (m, { usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = db.data.users[who]
    if (!who) return m.reply(`🤖️ Menciona al usuario con @\n\n🤖 Ejemplo :\n${usedPrefix + command} @${m.sender.split`@`[0]}`)
    user.premium = false
    user.premiumTime = 0
    conn.reply(m.chat, `🤖 Premium removido \n\n@${who.split('@')[0]} Ya no eres premium`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
    
}
handler.help = ['delprem @user']
handler.tags = ['owner']
handler.command = ['delprem', 'delpremium'] 

handler.group = true
handler.rowner = true

export default handler
