
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `π§π»βπ» Ingrese la imagen que quiere buscar \n\nπ§π»βπ» Ejemplo ππ» ${usedPrefix + command} Billie Eilish`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw 'π§π»βπ» No se encontrΓ³ la imagen intente con otro'
  conn.sendFile(m.chat, url, 'img.png', `
π§π»βπ» Resultado de : ${text}

β Ancho: ${width}
β Altura: ${height}
`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


