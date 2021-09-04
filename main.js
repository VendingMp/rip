const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./src/antivirtex.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { spawn, exec, execSync } = require("child_process")
const { color } = require('./lib/color')
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
        skiuwers.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			skiuwers.sendMessage(call, `Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/${setting.ownerNumber}`, MessageType.text)
			.then(() => skiuwers.blockUser(call, "add"))
			}, 100);
		})		
		
skiuwers.on('group-participants-update', async (anu) => {
		try {
			falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "skiuwersbot", 
"caption": `Made With Creator BotWea`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
        const mdata = await skiuwers.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = skiuwers.contacts[num]
welkam = `
◪─❲ WELCOME IN GROUP ❳
│
├❏ Group : ${mdata.subject}
├❏ Nomor : ${num.replace('@s.whatsapp.net', '')}
└❏ User : @${num.split('@')[0]}

◪─❲ INTRODUCTION ❳
│
├❏ Nama :
├❏ Umur :
├❏ Askot :
└❏ Hobi :

◪ Semoga Betah yaa~~
`
skiuwers.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})

			} else if (anu.action == 'remove') {
			const mdata = await skiuwers.groupMetadata(anu.jid)
			num = anu.participants[0]
			ini_user = skiuwers.contacts[num]
out =`
◪─❲ LEAVE FROM GROUP ❳
│
├❏ Group : ${mdata.subject}
├❏ Nomor : ${num.replace('@s.whatsapp.net', '')}
└❏ User : @${num.split('@')[0]}

◪ Goodbye, don't back again~~
`
skiuwers.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted: falfa, caption: `${out}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})

				
         } else if (anu.action == 'promote') {
			const mdata = await skiuwers.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
let buff = await getBuffer(ppimg)
teks = `
◪─❲ PROMOTE DETECTED ❳
│			
├❏ Group : ${mdata.subject}
├❏ User : @${num.split('@')[0]}
└❏ Nomor : ${num.replace('@s.whatsapp.net', '')}

◪ Selamat jabatan kamu naik >_<
`
			skiuwers.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await skiuwers.groupMetadata(anu.jid)
			try {
					ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
let buff = await getBuffer(ppimg)
teks = `
◪─❲ DEMOTE DETECTED ❳
│			
├❏ Group : ${mdata.subject}
├❏ User :  @${num.split('@')[0]}
└❏ Nomor : ${num.replace('@s.whatsapp.net', '')}

◪ Kasian malah kena demote >_<
`
			skiuwers.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
		}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
	
skiuwers.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "skiuwersbot", "caption": `Creator Botwea © 2K21`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await skiuwers.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 GROUP OPENED 」\n\nGroup telah dibuka oleh admin\nSekarang semua member bisa mengirim pesan`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `「 GROUP CLOSED 」\n\nGroup telah ditutup oleh admin\nSekarang hanya admin yang dapat mengirim pesan`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 GROUP DESCRIPTION CHANGE 」\n\nDeskripsi Group telah diubah \nOleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : \n${anu.desc}`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `「 GROUP SETTING CHANGE 」\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `「 GROUP SETTING CHANGE 」\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    skiuwers.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
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