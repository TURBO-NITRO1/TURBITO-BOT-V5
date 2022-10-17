let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://i.ibb.co/mJb0ysH/Profile-TURBO.jpg'),
  }), 'gay.png', `🇸🇻 🌟  Gay 😝: ${name}\n\nQué salga del grupo 🤣 `, m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['gay'] 

export default handler
