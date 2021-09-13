const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   WAMessageProto,
   relayWAMessage,
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
const simple = require("./lib/simple.js");
const fs = require('fs')
const WAConnection = simple.WAConnection(_WAConnection);
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
skiuwers.version = [2, 2123, 8] //2, 2119, 6
console.log(banner.string)
skiuwers.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
})

fs.existsSync('./session.json') && skiuwers.loadAuthInfo('./session.json')
skiuwers.on('connecting', () => {
start('2', 'SUBSCRIBE YOUTUBE SKIUWERS >_<')
})
skiuwers.on('open', () => {
success('2', 'Connected')
setTimeout( () => {
console.log(color(`SUBSCRIBE YOUTUBE SKIUWERS >_<`, 'red'))
}, 1000)    		    	     	
}) 
await skiuwers.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(skiuwers.base64EncodedAuthInfo(), null, '\t'))
  
skiuwers.on('chat-update', async (message) => {
require('./index.js')(skiuwers, message)
})

skiuwers.on('group-participants-update', async (anu) => {
try {
skiuuu = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "skiuwersbot", 
"caption": `Made With Creator BotWea`, 'jpegThumbnail': fs.readFileSync(`./image/thumbnail.jpg`)
}}}
const mdata = await skiuwers.groupMetadata(anu.jid)
console.log(anu)
const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm')
const groupMet = await skiuwers.groupMetadata(anu.jid);
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);
memeg = mdata.participants.length;
num = anu.participants[0];
      
if (anu.action == "add" && !num.includes(skiuwers.user.jid)) {
let v = skiuwers.contacts[num] || { notify: num.replace(/@.+/, "") };
anu_user = v.vname || v.notify || num.split("@")[0];
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
try {
pp_user = await skiuwers.getProfilePicture(num);
} catch (e) {
pp_user =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
teks = `
◪─❲ WELCOME IN GROUP ❳
│
├❏ Group : ${mdata.subject}
├❏ Nomor : ${num.replace('@s.whatsapp.net', '')}
├❏ User : @${num.split('@')[0]}
└❏ Bio : _${p3}_ 

◪─❲ INTRODUCTION ❳
│
├❏ Nama :
├❏ Umur :
├❏ Askot :
└❏ Hobi :

◪ Enjoy your life | Just fun >_<
`
buff = await getBuffer(pp_user)
buttons = [
{ buttonId: `hmm`, buttonText: { displayText: "Welcome👋🏻" }, type: 1 }
];
imageMsg = (
await skiuwers.prepareMessageMedia(buff, "imageMessage", {
thumbnail: buff,
})
).imageMessage;
buttonsMessage = {
contentText: `${teks}`,
footerText: "MADE WITH CREATOR BOTWEA",
imageMessage: imageMsg,
buttons: buttons,
headerType: 4,
};
prep = await skiuwers.prepareMessageFromContent(
mdata.id,
{ buttonsMessage },
{contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true}
);
skiuwers.relayWAMessage(prep);
} 
if (anu.action == "remove" && !num.includes(skiuwers.user.jid)) {
let w = skiuwers.contacts[num] || { notify: num.replace(/@.+/, "") };
anu_user = w.vname || w.notify || num.split("@")[0];
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
try {
pp_user = await skiuwers.getProfilePicture(num);
} catch (e) {
pp_user =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
teks = `
◪─❲ LEAVE FROM GROUP ❳
│
├❏ Group : ${mdata.subject}
├❏ Nomor : ${num.replace('@s.whatsapp.net', '')}
├❏ User : @${num.split('@')[0]}
└❏ Bio : _${p3}_ 

◪ Goodbye | Don't back again >_<
`
buff = await getBuffer(pp_user);
buttons = [
{ buttonId: `y`, buttonText: { displayText: "Goodbye👋🏻" }, type: 1 },
];
imageMsg = (
await skiuwers.prepareMessageMedia(buff, "imageMessage", {
thumbnail: buff,
})
).imageMessage;
buttonsMessage = {
contentText: `${teks}`,
footerText: "MADE WITH CREATOR BOTWEA",
imageMessage: imageMsg,
buttons: buttons,
headerType: 4,
};
prep = await skiuwers.prepareMessageFromContent(
mdata.id,
{ buttonsMessage },
{contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true}
);
skiuwers.relayWAMessage(prep);
} else if (anu.action == 'promote') {
const mdata = await skiuwers.groupMetadata(anu.jid)
num = anu.participants[0]
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
try {
ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://k.top4top.io/p_2001zgi471.jpg'
}
let buff = await getBuffer(ppimg)
teks = `
◪─❲ PROMOTE DETECTED ❳
│			
├❏ Group : ${mdata.subject}
├❏ Nomor : ${num.replace('@s.whatsapp.net', '')}
├❏ User : @${num.split('@')[0]}
└❏ Bio : _${p3}_ 

◪ Selamat jabatan kamu naik >_<
`
skiuwers.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : skiuuu})
} else if (anu.action == 'demote') {
num = anu.participants[0]
const mdata = await skiuwers.groupMetadata(anu.jid)
let p2 = await skiuwers.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
try {
ppimg = await skiuwers.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://k.top4top.io/p_2001zgi471.jpg'
}
let buff = await getBuffer(ppimg)
teks = `
◪─❲ DEMOTE DETECTED ❳
│			
├❏ Group : ${mdata.subject}
├❏ Nomor : ${num.replace('@s.whatsapp.net', '')}
├❏ User : @${num.split('@')[0]}
└❏ Bio : _${p3}_ 

◪ Kasian malah kena demote >_<
`
skiuwers.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: skiuuu})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

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
skiuwers.sendMessage(m.key.remoteJid, `
◪─❲ ANTI DELETE TERDETEKSI ❳
│
├❏ Name : @${m.participant.split("@")[0]}
├❏ Day : ${week} ${calender}
├❏ Time :  ${jam}
└❏ Type : ${type}

◪ Jangan hapus pesan cuk >_<
`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
skiuwers.copyNForward(m.key.remoteJid, m.message)
})

skiuwers.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
skiuwers.sendMessage(call, `*Sorry , can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => skiuwers.blockUser(call, "add"))
})
isBattre = 'Not Detect' 
isCharge = 'Not Detect' 
skiuwers.on (`CB:action,,battery`, json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
isBattre = batterylevel + "%"
isCharge = json[2][0][1].live
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