let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🗂️ ${jid} [${chat?.metadata?.read_only ? 'Fuera' : 'Dentro'}]\n\n`
    m.reply(`🤖 LISTA de Grupos:
${txt}
`.trim())
}
handler.help = ['grouplist']
handler.tags = ['owner']
handler.command = ['grouplist', 'listgroup'] 
handler.owner = true

export default handler
