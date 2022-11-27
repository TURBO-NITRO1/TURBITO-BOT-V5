
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner } ) {
	
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	let te = `🧑🏻‍💻️ En este grupo, no se permiten arabes ni legiovirgos 😹`
	if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
   if (m.sender.startsWith('212')) {
  //global.db.data.users[m.sender].banned = true
 m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('44')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('234')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('994')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('1')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('92')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('48')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   
   //---
}  
}
export default handler
