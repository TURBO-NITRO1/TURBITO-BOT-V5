
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
╭─✦─⋆✦☬✦⋆─✦─╮
╽❮❮❮ AUDIOS BOT ❯❯❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃❮❮ TURBO NITRO ❯❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃🌟Usar sin prefijo🌟
┃ ⚡⚡ Turbito ⚡⚡
┃  ⚡⚡ Stan ⚡⚡
┃ ⚡⚡ Turbo ⚡⚡
┃ ⚡⚡ Nitro ⚡⚡
┃ ⚡⚡ Hola ⚡⚡
┃  ⚡⚡ Bot ⚡⚡
┃ ⚡⚡ Amor ⚡⚡
┃  ⚡⚡ Ok ⚡⚡
┃ ⚡⚡ Puto ⚡⚡
┃ ⚡Eliminación⚡
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃🖲No hagas Spam🖲️
╰⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
╭──────────
┃❮❮  CANAL OFC  ❯❯
┃Apoya al Bot 🤖❤️
┃ https://youtube.com/c/TURBONTR1
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
╰•⋆҈͜͡⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘҈͜͡•╯
`
const pp = await (await fetch('https://i.ibb.co/mJb0ysH/tbntr.jpg')).buffer()
    
    conn.sendHydrated(m.chat, m2, '᳆⃟✪ TURBO ┃ ᴮᴼᵀ\nSuscríbete en YouTube\nhttps://youtube.com/c/turbontr1\n', pp, 'https://youtube.com/c/TURBONTR1', 'YouTube', null, null, [
     ['⏍ Info', '/botinfo'],
      ['⌬ Grupos', '/turbogps']
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
handler.register = true
export default handler
