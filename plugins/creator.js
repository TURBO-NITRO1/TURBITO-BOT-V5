function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
╭─✦─⋆❮✦.☬.✦❯⋆─✦─╮
╽❮❮❮❮❮  ≡ OWNER  ❯❯❯❯❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃❮❮❮❮ TURBO NITRO ❯❯❯❯
╭⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
᳆⃟✪ Suscríbete YouTube

 INSTALA TURBO BOT
https://youtu.be/9Rnsv_gUWuI

᳆⃟✪ GRUPO WHATSAPP

VÍDEOS PARA ESTADOS❤️

https://chat.whatsapp.com/FTZ8CjkggMV4oFLNqDU1Qo

᳆⃟✪ LINKS XIMENA 🇲🇽

https://chat.whatsapp.com/K7twVo4y9eZ8A9kHGWOgKZ

᳆⃟✪ GRUPO CINEMANÍA

https://chat.whatsapp.com/BVwp52esPYb2uT59KzIY4N
╰⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
╭────────────
┃ ❮❮❮❮ CANAL OFC ❯❯❯❯
┃Apoya al Bot👉🏻YouTube
┃ https://youtube.com/c/TURBONTR1
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
╰•⋆҈͜͡⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘҈͜͡•╯`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'turboowner'] 


export default handler
