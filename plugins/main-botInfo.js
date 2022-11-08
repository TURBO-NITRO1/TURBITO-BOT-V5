import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
╭•⋆҈͜͡.⫘⫘❯✪❮⫘⫘⋆҈͜͡•╮
╽❮❮❮❮ INFO BOT ❯❯❯❯
├⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃ ${groupsIn.length} Chats de grupo
┃ ${groupsIn.length} Gropos unidos
┃ ${groupsIn.length - groupsIn.length} Grupos abandonados
┃ ${chats.length - groupsIn.length} Chats privados
┃ ${chats.length} Total Chats
╰•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ ᵇᵒᵗ❂◄⋆҈͜͡•╯

☣️Suscríbete YouTube

 INSTALA TURBO BOT
https://youtu.be/9Rnsv_gUWuI

🧿 GRUPOS WHATSAPP

 🧑🏻‍💻 TURBO BOT 🤖

https://chat.whatsapp.com/JOJW1aCk3Zi1nAGO8SUap6

🧿 LINKS XIMENA 🇲🇽

 ENLACES Y APORTES
 
https://chat.whatsapp.com/Kk93aQjcJHgAt5gDxYoJ5Y

🧿 CINEMANÍA 2022

PELÍCULAS Y APORTES

https://chat.whatsapp.com/BVwp52esPYb2uT59KzIY4N

🧿 ENLACES JOKABED

 ENLACES Y APORTES

https://chat.whatsapp.com/F25XhvTxXbO7HOgXRq1l1l

🧿 TORNEOS DEL BAN

SORTEÓ DE GRUPOS, NÚMEROS MÁS

https://chat.whatsapp.com/L4YCR4lqjf2LpjRrWjzfeK

☣️ NÚMEROS VIRTUALES

https://youtube.com/c/N%C3%BAmerosVirtualesyMasbyshiryu

╭╾┅≼☬≽𓀬≼☬≽┅╼╮
┃❮❮❮ CANAL OFC ❯❯❯
┃Apoya al Bot ❤️
┃ https://youtube.com/c/TURBONTR1
╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯

╭──❯.⋆☆☆☆⋆.❮──╮
╽❮❮❮ S E R V E R ❯❯❯
┃🌀 RAM: ${format(totalmem() - freemem())} / ${format(totalmem())}
┃🌀 FreeRAM: ${format(freemem())}

❮ USO DE MEMORIA ❯
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
conn.sendButton(m.chat, infobt, igfg, null, [
  ['ꨄ︎ Apoyar', `${usedPrefix}donate`],
   ['⌬ Grupos', `${usedPrefix}gpturbo`]
 ], m)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler
