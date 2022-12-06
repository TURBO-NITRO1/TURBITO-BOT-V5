
let handler = async(m, { conn, usedPrefix, command }) => {
	
	let img = await conn.getFile(global.API('fgmods', '/api/asupan-la', { }, 'apikey'))
    let asupan = img.data
    conn.sendButton(m.chat, `🧑🏻‍💻 Resultado`, igfg, asupan, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
    m.react(dmoji)
    
}
handler.help = ['tvid']
handler.tags = ['img']
handler.command = ['asupan', 'tvid', 'videos', 'vid', 'video']

export default handler
