let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw `🤖 Etiqueta un mensaje con 🤏🏻😎 ${usedPrefix + command}`
    if (!m.quoted.fileSha256) throw '📵️ Falta el hash sha256 📵'
    if (!text) throw `🤖 Y el comando ❓`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '📵️ No tienes permitido cambiar este comando de Sticker 🤖'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`🤖 Comando guardado 🤏🏻😎`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <txt>')
handler.tags = ['database']
handler.command = ['setcmd']

export default handler
