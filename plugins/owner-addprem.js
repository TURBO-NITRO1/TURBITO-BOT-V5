//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `๐ง๐ปโ๐ป๏ธ Etiqueta o menciona a alguien\n\n๐๐ป Ejemplo : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '๐ง๐ปโ๐ป๏ธ El usuario Mensionado Ya es premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
๐ PREMIUM

@${who.split`@`[0]} ahora te conviertes en un usuario premium
โญโโโฏ.โโโโโ.โฎโโโฎ
แณอกอโฃ Nombre: ${user.name}
โฐโขโาอกอ.๐๐๐๐๐โ๐๐๐๐๐โาอกอโขโฏ
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
