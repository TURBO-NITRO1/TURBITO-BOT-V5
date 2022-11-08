
import { tiktokStalk } from '../lib/scraper.js'

let handler = async (m, { conn, text }) => {
	
  if (!text) throw '🤖️ Ingrese el nombre de usuario de tiktok'
  let res = await tiktokStalk(text), img = res?.pp_user
  delete res.pp_user
  let txt = Object.keys(res).map((v) => `☢️ ${v.capitalize()}: ${res[v]}`).join`\n`
  await conn.sendFile(m.chat, img, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
