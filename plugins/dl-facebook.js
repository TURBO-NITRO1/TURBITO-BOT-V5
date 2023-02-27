
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `🧑🏻‍💻️ Ingrese un link de un video de Facebook\n\n👉🏻 Ejemplo :\n${usedPrefix + command} https://www.facebook.com/1657159077835774/posts/pfbid02Yx1PbWC3JbEBxVYwigdNdvZycJag2g6uFsSHQqE2kKMeB21K33rxSpXky71ire5Gl/?app=fbl`
    m.react(rwait)
   
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
╭•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ ᵇᵒᵗ❂◄⋆҈͜͡•╮
┃☆☆ TURBO FB ☆☆
┃🧑🏻‍💻 Calidad: ${cal}
╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
     m.react(done)


}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
