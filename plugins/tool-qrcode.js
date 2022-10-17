
import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => {

if (!text) throw `🤖️ Ingrese el texto `
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(ツ)_/¯', m)
} 
handler.help = ['qrcode <text>']
handler.tags = ['tools']
handler.command = ['qrcode'] 


export default handler
