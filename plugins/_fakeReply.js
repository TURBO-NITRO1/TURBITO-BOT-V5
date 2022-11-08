
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/1Vjg8sy.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: tbgp, mediaType: 'VIDEO', description: 'support group', title: packname, body: 'grupo de soporte', thumbnailUrl: pp, sourceUrl: tbgp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: tbpyp, mediaType: 'VIDEO', description: 'Donate', title: 'PayPal', body: 'ayuda a mantener el bot activo', thumbnailUrl: pp, sourceUrl: tbpyp }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: tbyt, mediaType: 'VIDEO', description: 'Suscribete : ' + tbyt, title: 'TURBO YouTube', body: 'suscríbete a mi canal y apoyame', thumbnailUrl: pp, sourceUrl: tbyt }}}

} 
export default handler
