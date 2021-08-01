const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilinkk = JSON.parse(fs.readFileSync('./src/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { spawn, exec, execSync } = require("child_process")
const clc = require('chalk')

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (arip = new WAConnection()) => {
    arip.logger.level = 'warn'
    arip.version = [2, 2119, 6] 
    console.log(banner.string)
    arip.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the code QR'))
    })

    fs.existsSync('./session.json') && arip.loadAuthInfo('./session.json')
    arip.on('connecting', () => {
        start('2', '🔘 Succes [•]')
    })
    arip.on('open', () => {
        success('2', 'Connected')
    setTimeout( () => {
	    	console.log(color(`🔘 Succes [✓]`, 'aqua'))
	    	}, 1000)    		    	     	
         	}) 
         await arip.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(arip.base64EncodedAuthInfo(), null, '\t'))

    arip.on('chat-update', async (message) => {
        require('./index.js')(arip, message)
    })
    arip.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
