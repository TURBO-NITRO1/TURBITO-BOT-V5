
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
   let tee = `🧑🏻‍💻 Ingrese un texto corto\n\n👉🏻 Ejemplo  : ${usedPrefix + command} TURBO`
   let too = `🧑🏻‍💻 Separe EL texto con 👉🏻 + \n\n🧑🏻‍💻 Ejemplo : \n${usedPrefix + command} Turbo + nitro`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	case 'logololi':
	if (!text) throw tee 
	let img = global.API('fgmods', '/api/lolimaker', { text }, 'apikey')
	conn.sendFile(m.chat, img, 'logo.png', `🧑🏻‍💻 Resultado`, m)
	m.react(done)
	break 
	case 'neon': 
	if (!text) throw tee
	let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
	conn.sendFile(m.chat, ne, 'logo.png', `🧑🏻‍💻 Resultado`, m)
	m.react(done)
	break 
	case 'devil': 
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `🧑🏻‍💻 Resultado`, m)
	m.react(done)
	break 
	case 'wolf': 
   if (!text) throw tee
   let wo = global.API('fgmods', '/api/textpro/logowolf2', { text: 'TURBO', text2: text}, 'apikey')
	conn.sendFile(m.chat, wo, 'logo.png', `🧑🏻‍💻 Resultado`, m)
	m.react(done)
	break 
	case 'phlogo': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, ph, 'logo.png', `🧑🏻‍💻 Resultado`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['logololi', 'neon', 'devil', 'wolf', 'phlogo']
handler.tags = ['maker']
handler.command = /^(logololi|neon|devil|wolf|phlogo)$/i

export default handler
