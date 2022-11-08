
import instagramGetUrl from 'fg-ig'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🤖 Uso del comamdo\n ${usedPrefix + command} https://www.instagram.com/p/CkUgV8-t6TU/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)
    let res = await instagramGetUrl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'igdl.mp4', `🧑🏻‍💻 Resultado`, m)
    m.react(done)
  }
}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 

export default handler 
