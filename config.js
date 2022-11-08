import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['18048036464', 'TURBO NITRO', true],
  ['18048036464'], 
  ['18048036464'] 
] //Numeros de owner 

global.mods = ['18048036464'] 
global.prems = ['18048036464', '18048036464', '18048036464']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  males: 'https://malesin.xyz', 
  fgmods: 'https://api-fgmods.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.herokuapp.com': 'fg-dylux'
}

// Sticker WM
global.packname = 'turbo-nitro-ᴮᴼᵀ' 
global.author = 'turbo-bot' 
global.igfg = '☢️ Suscríbete a mi canal\nhttps://youtube.com/c/TURBONTR1\n' 
global.tbgp = 'https://chat.whatsapp.com/JOJW1aCk3Zi1nAGO8SUap6'
global.fgsc = 'https://github.com/TURBO-NITRO1/TURBITO-BOT-V5' 
global.tbyt = 'https://youtube.com/c/TURBONTR1'
global.tbpyp = 'https://www.paypal.me/TurboNtrOfc'
global.fglog = 'https://i.imgur.com/jguANow.png' 

global.wait = '⏱️ _Cargando..._\n███▒▒▒▒▒'
global.rwait = '⏱️'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '📵' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
