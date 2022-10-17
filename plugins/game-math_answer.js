let handler = m => m
handler.before = async function (m) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^᳆⃟✪ CUANTO ES/i.test(m.quoted.text)) return !0
    this.math = this.math ? this.math : {}
    if (!(id in this.math)) return conn.sendButton(m.chat, 'El Juego termino 😝', igtb, null, [['Mates', '/mates']], m)
    if (m.quoted.id == this.math[id][0].id) {
        let math = JSON.parse(JSON.stringify(this.math[id][1]))
        if (m.text == math.result) {
            global.db.data.users[m.sender].exp += math.bonus
            clearTimeout(this.math[id][3])
            delete this.math[id]
            m.reply(`🎊 Correcto 🌟\n\n🎉 Ganaste : +${math.bonus} 🪙`)
        } else {
            if (--this.math[id][2] == 0) {
                clearTimeout(this.math[id][3])
                delete this.math[id]
                m.reply(`🤖 Se terminaron las oportunidades 😭\n\n Respuesta 👉🏻 ${math.result}`)
      } else m.reply(`📵 Respuesta Incorrecto 🤖 \n\nTodavia hay  ${this.math[id][2]} oportunidades`)
        }
    }
    return !0
}

export default handler
