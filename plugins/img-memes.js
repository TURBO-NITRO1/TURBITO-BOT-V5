/*
     https://youtube.com/c/TURBONTR1
*/
import hispamemes from 'hispamemes'

let handler = async (m, { conn, usedPrefix, command }) => {
	
	const meme = hispamemes.meme()
    conn.sendFile(m.chat, meme, '', '', m)
    m.react('😆') 
}
handler.help = ['meme']
handler.tags = ['img']
handler.command = ['meme', 'memes'] 

export default handler
