import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `🤖 Responde a un sticker con :\n\n ${usedPrefix + command}`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '🤖 Tú pedido 🤖', m)
}
handler.help = ['toimg2 <sticker>']
handler.tags = ['sticker']
handler.command = ['toimg2', 'jpg2', 'aimg2'] 

export default handler
