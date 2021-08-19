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

const starts = async (skiuwers = new WAConnection()) => {
    skiuwers.logger.level = 'warn'
    skiuwers.version = [2, 2119, 6] 
    console.log(banner.string)
    skiuwers.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
    })

    fs.existsSync('./session.json') && skiuwers.loadAuthInfo('./session.json')
    skiuwers.on('connecting', () => {
        start('2', '🔴 SUBSCRIBE YOUTUBE SKIUWERS')
    })
    skiuwers.on('open', () => {
        success('2', 'Connected')
    setTimeout( () => {
	    	console.log(color(`🔴 SUBSCRIBE YOUTUBE SKIUWERS`, 'red'))
	    	}, 1000)    		    	     	
         	}) 
         await skiuwers.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(skiuwers.base64EncodedAuthInfo(), null, '\t'))
  
    skiuwers.on('chat-update', async (message) => {
        require('./index.js')(skiuwers, message)
    })
    skiuwers.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
    
	skiuwers.on('group-participants-update', async (anu) => {
		try {
		  falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "skiuwersbot", 
"caption": `SKIUWERS️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
			const mdata = await skiuwers.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = skiuwers.contacts[num]
			welkam = `*Hai @${num.split('@')[0]}*\n*◪ Welcome in group:*\n*├─ ${mdata.subject}*\n*│*\n*├─ Intro dulu*\n*├─ ❏ Nama:* \n*├─ ❏ Umur:*\n*├─ ❏ Asal kota:*\n*├─ ❏ Kelas:*\n*├─ ❏ Jenis kelamin:*\n*└─ ❏ Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*\n\n${mdata.desc}`
			const moment = require('moment-timezone')
            const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = skiuwers.contacts[num] != undefined ? skiuwers.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : skiuwers.contacts[num].notify || skiuwers.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			skiuwers.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}})
			})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
		ini_user = skiuwers.contacts[num]
		out =`◪ Goodbye @${num.split('@')[0]}\n◪ Leave from group:\n${mdata.subject}\n│\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
		const moment = require('moment-timezone')
        const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = skiuwers.contacts[num] != undefined ? skiuwers.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : skiuwers.contacts[num].notify || skiuwers.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			skiuwers.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted : falfa, caption: out, contextInfo: { "mentionedJid" : [num], contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true }})
			})
			/////////////////////
			} else if (anu.action == 'promote') {
			const mdata = await skiuwers.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `\`\`\`PROMOTE DETECTED
			
Nomor : ${num.replace('@s.whatsapp.net', '')}
User : @${num.split('@')[0]}
Group : ${mdata.subject}\`\`\`
`
			skiuwers.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await skiuwers.groupMetadata(anu.jid)
			try {
					ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `\`\`\`DEMOTE DETECTED
			
Nomor : ${num.replace('@s.whatsapp.net', '')}
User : @${num.split('@')[0]}
Group : ${mdata.subject}\`\`\`
`
			skiuwers.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num]}, quoted: falfa})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
skiuwers.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "skiuwersbot", "caption": `SKIUWERS️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await skiuwers.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *Group Opened* 」\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `「 *Group Closed* 」\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})

antidelete = true
skiuwers.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
skiuwers.sendMessage(m.key.remoteJid, `\`\`\`「 Anti Delete 」\`\`\`

• Nama : @${m.participant.split("@")[0]}
• Waktu : ${jam} ${week} ${calender}
• Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

skiuwers.copyNForward(m.key.remoteJid, m.message)
})
anticall = true
skiuwers.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
skiuwers.sendMessage(call, `*Sorry ${skiuwers.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => skiuwers.blockUser(call, "add"))
})
isBattre = 'Not Detect' // Battre Belum Kedetect 
isCharge = 'Not Detect' // Charging Belum Kedetect 
skiuwers.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
skiuwers.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}
///
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