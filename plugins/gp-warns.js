
let handler = async (m, { conn, args, groupMetadata}) => {
       let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       if (!(who in global.db.data.users)) throw `๐ง๐ปโ๐ป๏ธ Este usuario no se encuentra en mi base de datos`
       let warn = global.db.data.users[who].warn
       let name = conn.getName(who)
      m.reply(`
โญโฃแณโ๐๐ ๐๐๐๐๐แณอกอโฃโฎ
โโฎโฎ ADVERTENCIAS โฏโฏ
โ
โ Nombre ๐๐ป ${name} 
โ Warns ๐๐ป ${warn}`)
}

handler.help = ['warns']
handler.tags = ['group']
handler.command = ['warns'] 
handler.group = true

export default handler
