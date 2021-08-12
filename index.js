/* 

  CREDIT + TQTO || ️DON'T CHANGE + DELETE ⚠️
  SUBSCRIBE + 🔔 || SUBSCRIBE FOR MORE UPDATE
  
  ◪ THX CREATOR BOT WEA
  ◪ THX PENYEDIA REST API
  ◪ THX PENGGUNA BOT WEA
  
  ◪ Source : Zeeone YT | https://github.com/zeeoneofc
  ◪ Recode : ItsMeArip | https://wa.me/+6285945300923
  
  ◪ YouTube : https://youtube.com/channel/UCy1HDX_AtOQqt1efnP4HseA
  ◪ Group WA : https://chat.whatsapp.com/I2GGYVFbKGHIgXY18DOUQi
  ◪ Instagram : https://instagram.com/skiuwers
  ◪ Github : https://github.com/projectskiuwers
  ◪ Apikey : https://api-skiuwers.herokuapp.com/api

  ◪ Catatan : Recode doang bang jangan dibully :V
  Cuma recode sesuai keinginan dan kebutuhan sendiri 
  
  ◪ Peringatan : Klau mau recode yang teliti ya ngab!
  Atur semua nya di setting.json || Ubah yg dilarang = Error
  Kalo ada yang error FIX sendiri ya kawan
  Script nya ga ada yg di encrypt kan.
  
*/

const
	{
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
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const googleImage = require('g-i-s')
const yts = require('yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { convertSticker } = require("./lib/swm.js")
const { webp2gifFile } = require("./lib/gif.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { fotoIg, videoIg } = require('./lib/ig.js')
const { lirikLagu } = require('./lib/lirik.js')
const { darkjokes } = require('./lib/darkjokes.js')
const { fbDown } = require('./lib/fb.js')
const { wikiSearch } = require('./lib/wiki.js')
//setting\\
prefix = setting.prefix // edit di setting.json
targetpc = setting.ownerNumber // edit di setting.json
owner = setting.ownerNumber // edit di setting.json
thumb = setting.thumb // edit di setting.json
fthumb = setting.fakethumb // edit di setting.json
fake = setting.fake // edit di setting.json
img = setting.img // edit di setting.json
botname = setting.botname // edit di setting.json
ownername = setting.ownername // edit di setting.json
cr = setting.cr // edit di setting.json
hit_today = [] // jangan diubah
blocked = [] // jangan diubah
banChats = true // jangan diubah
offline = false // jangan diubah
creator = 'X-AripDev' // Jangan diubah || Ubah = Error
lolkey = '3d427dd3c79b5ace05193a6a' // https://api.lolhuman.xyz | langsung regist aja Free
apiku = 'skiuwers' // https://api-skiuwers.herokuapp.com/api | cht gua wa.me/6285945300923
ownerr = '+6285945300923' // jangan diubah
numbernye = '0' // jangan diubah
waktu = '-' // jangan diubah
alasan = '-' // jangan diubah
petik = '```' // jangan diubah
msgId="B826873620DD5947E683E3ABE663F263" // jangan diubah

//=================================================//
module.exports = skiuwers = async (skiuwers, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = skiuwers.user.jid
		const botNumberss = skiuwers.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await skiuwers.chats.all()
		const groupMetadata = isGroup ? await skiuwers.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? skiuwers.user.jid : skiuwers.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? skiuwers.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
	            	
		mess = {
			wait: 'Sedang di proses「 ⏳ 」',
			success: 'Berhasil 「 ✅ 」',
			wrongFormat: 'Gagal 「 ❎ 」',
			error: {
				stick: 'Format Error「 ❗ 」',
				Iv: 'Link Error「 ❗ 」'
			},
			only: {
				group: '```ONLY GROUP```',
				admin: '```ONLY ADMIN```',
				owner: '```ONLY OWNER```',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            skiuwers.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            skiuwers.sendMessage(hehe, teks, text)
        }
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? skiuwers.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            skiuwers.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            skiuwers.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${tee}.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            skiuwers.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumb}`) //Gambarnye
					},
					"title": 'S K I U W E R S', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "66666666666",
					"retailerId": 'BOT WEA',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 666,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `‣  ${setting.botname}\n‣    ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fgclink = (teks) => {

            skiuwers.sendMessage(from, teks, text, {

  quoted: {

	key: {

		fromMe: false,

		participant: "0@s.whatsapp.net",

		remoteJid: "0@s.whatsapp.net"

	},

	message: {

		"groupInviteMessage": {

			"groupJid": "6288213840883-1616169743@g.us",

			"inviteCode": "mememteeeekkeke",

			"groupName": "skiuwersbot", 

            "caption": `${hahh} ${pushname}`, 

            'jpegThumbnail': fs.readFileSync(`image/${thumb}`)

		}

	}

}

            })

        }

const fvideo  = (teks) => {

            skiuwers.sendMessage(from, teks, text, {

  quoted: {

	   key: { 

          fromMe: false,

	      participant: `0@s.whatsapp.net`, ...(from ? 

	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 

                },

	 message: { 

                 "videoMessage": { 

                 "title":"ONE DEV",

                 "h": `Hmm`,

                 'seconds': '99999', 

                 'caption': `${hahh} ${pushname}`,

                 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)

                        }

                       }

	                  }

})

			}
        const fakeitem = (teks) => {
            skiuwers.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}`),"itemCount":666,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           const fakedoc = (teks) => {  
 skiuwers.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "SKIUWERS", "fileLength": "36", "pageCount": 0, "fileName": `skiuwersbot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
		const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumb}`), thumbnail: fs.readFileSync(`image/${thumb}`),sendEphemeral: true}}}  
 const skiuwersuhuy = (pesan, tipe, target, target2) => {
		    skiuwers.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		    }
const fdoc = {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}


        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return fakestatus('karena kamu adalah admin group, bot tidak akan kick kamu')
		alpha.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return fakestatus("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}`
		fakestatus(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`)
		setTimeout( () => {
			skiuwers.groupRemove(from, [kic]).catch((e)=>{skiuwers.sendMessage(from, `*ERR:* ${e}`, text,{quoted:mek})})
		}, 3000)
		setTimeout( () => {
			skiuwers.updatePresence(from, Presence.recording)
			fakestatus("1detik")
		}, 2000)
		setTimeout( () => {
			skiuwers.updatePresence(from, Presence.recording)
			fakestatus("2detik")
		}, 1000)
		setTimeout( () => {
			skiuwers.updatePresence(from, Presence.recording)
			fakestatus("3detik")
		}, 0)
	}
	              
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        skiuwers.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    skiuwers.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return skiuwers.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return skiuwers.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumb}`)})
        }
        
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            skiuwers.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        skiuwers.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await skiuwers.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

                let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			skiuwers.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
		
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//auto merekam || creator bot wa
      	skiuwers.updatePresence(from, Presence.recording)
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//auto merekam || creator bot wa
      	skiuwers.updatePresence(from, Presence.recording)
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return
		
switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
		heheh = ms(Date.now() - waktu) 
		// creator jangan diubah cuk
		// record aja semau lu asal jng ubah yg ga boleh diubah :v 
		// kalau ada yg error fix sendiri, ga ada yg di encrypt kan.
		wew =`
${petik}◪─❲ INFORMATION ❳
│
├❒ Creator : ${creator}
├❒ Recode : ${ownername}
├❒ Mode : ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
├❒ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
├❒ Date : ${thisDay}, ${day} ${myMonths[bulan]} ${year}
├❒ Time : ${timuu} WIB
├❒ Lib : Baileys [ 3.5.1 ]
└❒ Prefix : [ ${prefix} ]

◪─❲ LIST MENU ❳
│
├─❒ ${prefix}makermenu
├─❒ ${prefix}othermenu
├─❒ ${prefix}ownermenu
├─❒ ${prefix}groupmenu
├─❒ ${prefix}islammenu
├─❒ ${prefix}convertmenu
├─❒ ${prefix}downloadmenu
├─❒ ${prefix}searchingmenu
├─❒ ${prefix}storagemenu
├─❒ ${prefix}animemenu
├─❒ ${prefix}funmenu
├─❒ ${prefix}tagmenu
└─❒ ${prefix}upmenu

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`

skiuwers.sendMessage(from, wew, text, {quoted: ftroli ,caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
            break
            case prefix+'mystat': 
	        case prefix+'info':
				let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = skiuwers.user.phone
                anu = process.uptime()
                teskny = `
${petik}⊙ INFO STATISTIK
│
├⌬ Versi WhatsApp : ${wa_version}
├⌬ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├⌬ MCC : ${mcc}
├⌬ MNC : ${mnc}
├⌬ Versi OS : ${os_version}
├⌬ Merk HP : ${device_manufacturer}
├⌬ Versi HP : ${device_model}
├⌬ Group Chat : ${giid.length}
├⌬ Personal Chat : ${totalchat.length - giid.length}
├⌬ Total Chat : ${totalchat.length}
├⌬ Speed : ${latensii.toFixed(4)} Second
└⌬ Runtime : ${kyun(anu)}${petik}\n`
				skiuwers.sendMessage(from, teskny, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break

//menuconvert
case prefix+'convertmenu':   
ghea =`
${petik}◪─❲ CONVERT MENU ❳
│
├─❒ ${prefix}toimg
├─❒ ${prefix}tomp3
├─❒ ${prefix}tomp4
├─❒ ${prefix}slow
├─❒ ${prefix}fast
├─❒ ${prefix}reverse
└─❏ ${prefix}tourl

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, ghea, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'toimg':
					if (!isQuotedSticker) return fakeitem('Reply atau tag stiker nya lord!')
					fakegroup('```PROSES...```')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih gambarnya :V```')
					fs.unlinkSync(ran)
					})
					break
case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await skiuwers.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            skiuwers.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            skiuwers.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            skiuwers.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            skiuwers.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await skiuwers.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break

//downloadmenu
case prefix+'downloadmenu':
gheaa =`
${petik}◪─❲ DOWNLOAD MENU ❳
│
├─❒ ${prefix}play <query>
├─❒ ${prefix}ytmp3 <link>
├─❒ ${prefix}ytmp4 <link>
├─❒ ${prefix}tiktok <link>
├─❒ ${prefix}twitter <link>
├─❒ ${prefix}instagram <link>
└─❏ ${prefix}facebook <link>

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheaa, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'play':
case prefix+ 'lagu':
case prefix+ 'musik':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP4*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            skiuwers.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
case prefix+ 'tiktok':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
				tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		console.log(result)
		    		const { videonowm, videonowm2, text } = result
		    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
		    		.then(async (a) => {
		    		me = `*Title* : ${text}\n*Link* : ${a.data}`
				skiuwers.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
				})
				})
		     		.catch(e => console.log(e))
		     		break
case prefix+ 'tiktokaudio':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
		 		tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		const { music,text } = result
				skiuwers.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
				})
		     		.catch(e => console.log(e))
		     		break
case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
case prefix+ 'ig':
case prefix+ 'instagram':
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
case prefix+ 'fb':
case prefix+ 'facebook':
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break   

//menufun
case prefix+'funmenu':   
        gheau =`
${petik}◪─❲ FUN MENU ❳
│
├─❒ ${prefix}seberapagay
├─❒ ${prefix}seberapalesby
├─❒ ${prefix}gantengcek
├─❒ ${prefix}cantikcek
├─❒ ${prefix}jadiancek
├─❒ ${prefix}truth
├─❒ ${prefix}dare
├─❒ ${prefix}hobby
├─❒ ${prefix}bisakah
├─❒ ${prefix}kapankah
├─❒ ${prefix}apakah
├─❒ ${prefix}suit
└─❒ ${prefix}rate

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheau, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break

//------------------< Math Random >-------------------

case prefix+ 'suit':
	if (!q) return reply(`\nPilih : Batu, Gunting, Kertas.\nExample : ${prefix}suit kertas\n`)
	query = args.join(" ")
	const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
    brow = `
◪ PLAYER 1
│
├❒ ${ownername}
└❒ Suit : ${suitcuy}

◪ PLAYER 2
│
├❒ ${pushname}
└❒ Suit : ${query}

Yang kalah ngirim pulsa :V

`
            reply(brow)
            break
				case prefix+'gantengcek':
					if (!isGroup)return reply('```ONLY GROUP```')
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, cintax.jid], true)
					break
				case prefix+'cantikcek':
					if (!isGroup)return reply('```ONLY GROUP```')
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
				case prefix+'jadiancek':
					if (!isGroup)return reply('```ONLY GROUP```')
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee yang lagi jadian! \n*@${aku.jid.split('@')[0]}* 🖤 @${cintax.jid.split('@')[0]}\nSemoga Langgeng ya :V`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
				
                    case prefix+'seberapagay':
					if (!isGroup)return reply('```ONLY GROUP```')
					const ga = ['9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const y = ga[Math.floor(Math.random() * ga.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : seberapa gay ' + q + '\n\nJawaban : ' + y + '%', text, { quoted: mek })
					break
                    case prefix+'seberapalesby':
					if (!isGroup)return reply('```ONLY GROUP```')
					const les = ['9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const cok = les[Math.floor(Math.random() * les.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : seberapa lesby ' + q + '\n\nJawaban : ' + cok + '%', text, { quoted: mek })
					break
                
				case prefix+'bisakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : bisakah ' + q + '\n\nJawaban : ' + keh, text, { quoted: mek })
					break
					case prefix+'kapankah':
					if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : kapankah ' + q + '\n\nJawaban : ' + koh, text, { quoted: mek })
					break

				case prefix+'apakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : apakah ' + q + '\n\nJawaban : ' + kah, text, { quoted: mek })
					break

				case prefix+'rate':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
					const ra = ['9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: mek })
					break

				case prefix+'hobby':
				if (!isGroup)return reply('```ONLY GROUP```')
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					skiuwers.sendMessage(from, 'Pertanyaan : hobby ' + q + '\n\nJawaban : ' + by, text, { quoted: mek })
					break


                /*case prefix+'truthordare':
				if (!isGroup)return reply('```ONLY GROUP```')
				if (!q) return reply(`[ TRUTH OR DARE ] \nSilahkan Pilih Comand ${prefix}truth Or ${prefix}dare`)
				break*/

	    	   	case prefix+'truth':
				const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				skiuwers.sendMessage(from, '[    TRUTH    ]\n\n' + ttrth , text, { quoted: ftoko })
				break
                case prefix+'dare':
				const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				skiuwers.sendMessage(from, '[    DARE    ]\n\n' + der , text, { quoted: ftoko })
				break
/*
]=====> NSFW MENU<=====[
*/
//menuanime
case prefix+'animemenu':   
        gheauu =`
${petik}◪─❲ ANIME MENU ❳
│
├─❒ ${prefix}anime
├─❒ ${prefix}komiku
├─❒ ${prefix}otaku
├─❒ ${prefix}awoo
├─❒ ${prefix}blowjob
├─❒ ${prefix}hentai
├─❒ ${prefix}megumin
├─❒ ${prefix}trapnime
└─❏ ${prefix}neko

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break

case prefix+'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break

case prefix+'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  

case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            skiuwers.sendMessage(from,media,image,{quoted:mek,caption:'Nih animenya!!!\nDasar wibu :V'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
			case prefix+ 'awoo':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    skiuwers.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'blowjob':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    skiuwers.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'hentai': 
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    skiuwers.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'megumin':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    skiuwers.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'neko':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    skiuwers.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'trapnime':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    skiuwers.sendMessage(from, buffer, image, anu)
					break

//menumaker
case prefix+'makermenu':   
        gheauu =`
${petik}◪─❲ MAKER MENU ❳
│
├─❒ ${prefix}sticker
├─❒ ${prefix}swm <author|packname>
├─❒ ${prefix}take <author|packname>
├─❒ ${prefix}attp
├─❒ ${prefix}ttp
└─❏ ${prefix}emoji

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
//terbaru
case prefix+ 'attp': 
if (args.length < 1) return reply('Penggunaan : ${prefix}attp skiuwers')
arip = body.slice(6)
rip = await getBuffer(`https://api.skiuwers-herokuapp.com/api/attp?file&text&apikey=${apiku}`)
skiuwers.sendMessage(from, rip, sticker, {quoted: freply})
break

case prefix+ 'ttp': 
if (args.length < 1) return reply('Penggunaan : ${prefix}ttp skiuwers')
arip = body.slice(5)
rip = await getBuffer(`https://api.skiuwers-herokuapp.com/api/ttp?file&text&apikey=${apiku}`)
skiuwers.sendMessage(from, rip, sticker, {quoted: freply})
break
//terbaru

case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		                ran = '666.webp'
		                await ffmpeg(`./${media}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                skiuwers.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		                 fs.unlinkSync(media)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            ran = '999.webp'
		            reply(mess.wait)
		            await ffmpeg(`./${media}`)
		            .inputFormat(media.split('.')[1])
		            .on('start', function (cmd) {
		            console.log(`Started : ${cmd}`)
		            })
		            .on('error', function (err) {
		            console.log(`Error : ${err}`)
		            fs.unlinkSync(media)
		            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            skiuwers.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		            fs.unlinkSync(media)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                fakegroup(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break               
case prefix+ 'take':
case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('mess.stick')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `Follow Instagram`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Arip404_`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, skiuwers, mek, from)
					break
case prefix+ 'stikerwm':
case prefix+ 'stickerwm':
case prefix+ 'swm':
		            pe = args.join(' ')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            skiuwers.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            skiuwers.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await skiuwers.downloadAndSaveMediaMessage(encmedia)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            skiuwers.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            skiuwers.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
//menuother
case prefix+'othermenu':   
        gheauu =`
${petik}◪─❲ OTHER MENU ❳
│
├─❒ ${prefix}jahil
├─❒ ${prefix}jahilpc
├─❒ ${prefix}darkjokes
├─❒ ${prefix}mutual
├─❒ ${prefix}getcode <link>
├─❒ ${prefix}fakeloc
└─❒ ${prefix}fdeface

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'darkjokes':
			     reply(mess.wait)
				 data = fs.readFileSync('./lib/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 skiuwers.sendMessage(from, darkjokes, image, {quoted: mek, caption: '```DARK JOKES```'})
				 break
case prefix+ 'mutual':
		            if (isGroup) return reply('```ONLY GROUP```')
		            anug = getRandomId(_RandomId).replace('@s.whatsapp.net','')
		            await reply('Find for a partner...')
		            await reply(`wa.me/${anug}`)
		            await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
		            break
case prefix+ 'jahil':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}jahil [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}jahil @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            skiuwers.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
case prefix+ 'settarget':
                    if (!mek.key.fromMe) return 
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target jahil pc : ${targetpc}`)
		            break
case prefix+ 'jahilpc':
		            if(!q) return fakegroup(`${prefix}jahilpc teks target|teks lu bro`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await skiuwers.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await skiuwers.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await skiuwers.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await skiuwers.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		skiuwers.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
case prefix+ 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${tee}.jpg`)
               skiuwers.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)      
		            break

//islammenu
case prefix+'islammenu':   
        gheauu =`
${petik}◪─❲ ISLAM MENU ❳
│
├─❒ ${prefix}tahlil
├─❒ ${prefix}alquran
├─❒ ${prefix}hadits
├─❒ ${prefix}jadwalsholat
├─❒ ${prefix}kisahnabi
├─❒ ${prefix}doaharian
├─❒ ${prefix}bacaansholat
├─❒ ${prefix}niatsholat
└─❒ ${prefix}ayatkursi

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'alquran':
                    if (args.length < 1) return reply('Example: .alquran 18 or .alquran 18/10 or .alquran 18/1-10')
                    //urls = (`https://api-skiuwers.herokuapp.com/api/quran/${args[0]}?apikey=${apiku}`)
                    urls = (`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`)
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                    arab = x.arab
                    nomor = x.ayat
                    latin = x.latin
                    indo = x.indonesia
                    ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break

//https://api-skiuwers.herokuapp.com/api/hadits?kitab=bukhari&nomor=52&apikey=skiuwers'
case prefix+ 'hadits':
if (!q) return reply(`contoh ${prefix}hadist bukhari|52`)
var teks = body.slice(8)
t1 = teks.split('|')[0]
t2 = teks.split('|')[1]
get_result = await fetchJson(`https://api-skiuwers.herokuapp.com/api/hadits?kitab=${t1}&nomor=${t2}&apikey=${apiku}`)
get_result = get_result.result
ini_txt = `❒ Judul : ${get_result.message}\n`
ini_txt += `❒ Nama : ${get_result.data.name}\n`
ini_txt += `❒ ID : ${get_result.data.id}\n`
ini_txt += `❒ Available : ${get_result.data.available}`
ini_txt += `❒ Nomor : ${get_result.data.contents.number}\n`
ini_txt += `❒ Arab : ${get_result.data.contents.arab}\n`
ini_txt += `❒ Latin : ${get_result.data.contents.id}\n`
reply(ini_txt)
break

case prefix+ 'tahlil': 
				reply(mess.wait)
				anu = await fetchJson('https://api-skiuwers.herokuapp.com/api/muslim/tahlil?apikey=skiuwers', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break

case prefix+ 'jadwalsholat':
				if (args.length < 1) return reply('kotanya mana bang?')
				reply(mess.wait)
				anu = await fetchJson('https://api-skiuwers.herokuapp.com/api/jadwalshalat?kota=jakartautara&apikey=skiuwers', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Tanggal : ${i.tanggal}\n*Imsyak* : ${i.imsyak}\n*Shubuh* : ${i.shubuh}\n*Terbit* : ${i.terbit}\n*Dhuha* : ${i.dhuha}\n*Dzuhur* : ${i.dzuhur}\n*Ashar* : ${i.ashr}\n*Magrib* : ${i.magrib}\n*Isya* : ${i.isya}\n=================\n`
				}
				reply(teks)
				break

case prefix+ 'kisahnabi':
				reply(mess.wait)
				anu = await fetchJson('https://api-skiuwers.herokuapp.com/api/kisahnabi?nabi=muhammad&apikey=skiuwers')
				buffer7 = await getBuffer(anu.result.nabi.image)
				teks = `*HASIL*\n\n*➸ Nama Nabi :* ${anu.result.nabi.nabi}\n*➸ Lahir :* ${anu.result.nabi.lahir}\n*➸ Umur :* ${anu.result.nabi.umur}\n*➸ Tempat :* ${anu.result.nabi.tempat}\n*➸ Kisah :* ${anu.result.nabi.kisah}`
				skiuwers.sendMessage(from, buffer7, image, {quoted: ftroli, caption: teks})
				break

case prefix+ 'ayatkursi':
				reply(mess.wait)
				anu = await fetchJson('https://api-skiuwers.herokuapp.com/api/muslim/ayatkursi?apikey=skiuwers')
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				skiuwers.sendMessage(from, teks, text, {quoted: mek})
				break

case prefix+ 'doaharian':
				skiuwers.updatePresence(from, Presence.recording) 
				reply(mess.wait)
				asu = await fetchJson('https://api-skiuwers.herokuapp.com/api/muslim/doaharian?apikey=skiuwers', {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break

case prefix+ 'niatsholat':
				reply(mess.wait)
				anu = await fetchJson('https://api-skiuwers.herokuapp.com/api/muslim/niatshalat?apikey=skiuwers', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks)
				break

case prefix+ 'bacaansholat':
				reply(mess.wait)
				anu = await fetchJson('https://api-skiuwers.herokuapp.com/api/muslim/bacaanshalat?apikey=skiuwers', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks)
				break
                
//menusearching
case prefix+'searchingmenu':   
        gheauuu =`
${petik}◪─❲ SEARCHING MENU ❳
│
├─❒ ${prefix}artinama <nama>
├─❒ ${prefix}brainly <query>
├─❒ ${prefix}dafontdown <query>
├─❒ ${prefix}dafontsearch <query>
├─❒ ${prefix}wikipedia <query>
├─❒ ${prefix}lirik <query>
├─❒ ${prefix}pinterest <query>
├─❒ ${prefix}pinterest2 <query>
├─❒ ${prefix}google <query>
├─❒ ${prefix}playstrore <query>
├─❒ ${prefix}mediafire <query>
├─❒ ${prefix}ytsearch <query>
└─❏ ${prefix}igstalk <username>

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauuu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'pinterest2':
            if (args.length < 1) return fakegroup('Masukan query!')
            const gimgg = args.join('');
            reply(mess.wait)
            gis(gimgg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            alpha.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case prefix+'pinterest':
            if(!q) return reply('Masukkan query')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await alpha.sendMessage(from,di,image,{quoted: mek})
            break
case prefix+'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            
case prefix+'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break

//terbaru

case prefix+ 'google':
if (args.length == 0) return reply(`Example: ${prefix}google  Apa itu googlegoogle?`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = '❒ 「 GOOGLE 」\n\n'
for (var x of get_result) {
ini_txt += `❒ Title : ${x.title}\n`
ini_txt += `❒ Link : ${x.link}\n`
ini_txt += `❒ Desc : ${x.desc}\n\n`

}
reply(ini_txt)
break

case prefix+ 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `${petik}❒ 「  MEDIAFIRE  」
│
├❒ Nama : ${res[0].nama}
├❒ Ukuran : ${res[0].size}
└❒ Link : ${res[0].link}
\nTunggu Proses Upload Media${petik}`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case prefix+ 'dafontdown':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await dafontDown(teks) 
result = `${petik}❒ 「 FONT DOWNLOAD  」
│
├❒ Judul : ${res[0].judul}
├❒ Style : ${res[0].style}
├❒ Nama File : ${res[0].output}
└❒ Isi File : ${res[0].isi}${petik}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: mek})
break
case prefix+ 'dafontsearch':
case prefix+ 'dafonts':
if (args.length < 1) return reply('Apa Yang Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
res = await dafontSearch(teks)
a = res[0]
result = `${petik}❒ 「 FONT SEARCHING  」
│
├❒ Judul : ${a.judul}
├❒ Style : ${a.style}
└❒ Link : ${a.link}${petik}
`
reply(result)
break

case prefix+ 'wiki':
case prefix+ 'wikipedia':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `${petik}❒ 「 WIKIPEDIA 」
│
├❒ Judul : ${res[0].judul}
└❒ Wiki  : ${res[0].wiki}${petik}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break

case prefix+ 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${args.join(' ')}`, {method: 'get'})
					reply('Arti Nama :\n\n'+anu.result)
				break

//terbaru

case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await skiuwers.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break

case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `INSTAGRAM STALKING
DATA BERHASIL DIDAPATKAN\n\n
▷ Username :  ${args.join('')}
▷ Full Name : ${Y.full_name}
▷ Bio : ${Y.biography}
▷ Followers : ${Y.followers}
▷ Following : ${Y.following}
▷ Private : ${Y.is_private}
▷ Verified : ${Y.is_verified}
▷ Link : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
case prefix+ 'getcode':
		            fakeitem(' ```OWNER ONLY``` ')
		            if (!mek.key.fromMe) return 
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '◪───────────────────────◪\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*❒ Pertanyaan:* ${Y.pertanyaan}\n\n*❒ Jawaban:* ${Y.jawaban[0].text}\n◪──────────────────◪\n`
					}
					skiuwers.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break

//menugroup
case prefix+'grupmenu':  
case prefix+'groupmenu':   
        gheauuus =`
${petik}◪─❲ GROUP MENU ❳
│
├─❒ ${prefix}gc <buka/tutup>
├─❒ ${prefix}gcname <teks>
├─❒ ${prefix}gcdesk <teks>
├─❒ ${prefix}listgroup
├─❒ ${prefix}listadmin 
├─❒ ${prefix}infogroup
├─❒ ${prefix}hedsot
├─❒ ${prefix}add
├─❒ ${prefix}kick
├─❒ ${prefix}sider
├─❒ ${prefix}tagall
└─❏ ${prefix}hidetag

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauuus, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'carigroup':
case prefix+ 'carigrup':
case prefix+ 'carigc':
case prefix+ 'groupwa':
case prefix+ 'grupwa':
case prefix+ 'groupwa':
                    if (args.length < 1) return reply('*Yang dicari group apa?*')
                    query = args.join(' ')
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "⬣ GROUP WA SEARCH\n\n\n"
                    for (var x of get_result) {
                        ini_txt += `Nama : ${x.name}\n`
                        ini_txt += `Genre : ${x.genre}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(from, ini_txt )
                    break

case prefix+'group':
case prefix+'grup':
case prefix+'gc':
			    if (!isGroup) return fakestatus(```'ONLY GROUP'```)
				if (args[0] === 'buka') {
					fakestatus(from, `*「 SUKSES MEMBUKA GRUP 」*`, MessageType.text)
					skiuwers.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'tutup') {
					await skiuwers.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakestatus(from, `*「 SUKSES MENUTUP GRUP 」*`, MessageType.text)
				}
				break
case prefix+'gcname':
				await skiuwers.groupUpdateSubject(from, `${args.join(' ')}`)
				fakestatus(from, `*「 CHANGE TO 」*\n\n${args.join(' ')}`, MessageType.text)
				break
case prefix+'gcdesk':
				await skiuwers.groupUpdateDescription(from, `${args.join(' ')}`)
				fakestatus(from, `*「 CHANGE TO 」*\n\n${args.join(' ')}`, MessageType.text)
				break
case prefix+'add':
                    if (!isGroup) return fakestatus('```ONLY GROUP```')
					if (args.length < 1) return fakestatus('Yang mau di add siapa? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					skiuwers.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim yang mau di add di private, dahlah :)')
					}
					reply('SUKSES')
					break
case prefix+'kick':
                 if (!isGroup) return reply(```'ONLY GROUP'```)
			     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG TARGET NYA')
				 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			     if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
						teks += `Bismillah atas izin admin grup kamu akan saya tendang !\n`
						teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						skiuwers.groupRemove(from, mentioned)
				  } else {
						mentions(`Goodbye @${mentioned[0].split('@')[0]} 👋🏻`, mentioned, true)
						skiuwers.groupRemove(from, mentioned)
				  }
				  break
case prefix+'hedsot':
				if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG TARGET NYA')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
						teks += `Bismillah atas izin admin grup kamu akan saya tendang !\n`
						teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						skiuwers.groupRemove(from, mentioned)
				  } else {
						mentions(`Goodbye @${mentioned[0].split('@')[0]} 👋🏻`, mentioned, true)
						skiuwers.groupRemove(from, mentioned)
				  }
				  break
case prefix+'tagall':
					if (!isGroup) return reply('```ONLY GROUP```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `[✓] @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case prefix+'spam':
			    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				if (!args) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`)
				args = args.split("|")
				if (!args) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(args[1])) return reply(from, `Harus berupa angka`)
				for (let i = 0; i < args[1]; i++){
					skiuwers.sendMessage(from, args[0], MessageType.text)
				}
				break
case prefix+'listadmin':
					if (!isGroup) return fakestatus('```GROUP ONLY```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case prefix+'listgc':
case prefix+'listgroup':
				  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break
case prefix+'infogc':
case prefix+'infogroup':
					skiuwers.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await skiuwers.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					skiuwers.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
case prefix+'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await skiuwers.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             skiuwers.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
case prefix+'creategroup':
case prefix+'creategrup':
                if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                for (let i = 0; i < mentioned.length; i++){
				anu = []
				anu.push(mentioned[i])
                }
				skiuwers.groupCreate(argza[0], anu)
				reply(`Sukes membuat grup:\n${argza}`)
                }
				break
case prefix+'sider':
                shape = '✓ '
infom = await skiuwers.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break   
case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            skiuwers.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break   
case prefix+ 'getbio':
                if (!isGroup) return reply('```ONLY GROUP```')
                if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await skiuwers.getStatus(`${mentioned}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
case prefix+'getpp':
				if (!isGroup) return fakegroup('```KHUSUS GRUP BRO```')
				if (mek.message.extendedTextMessage != undefined){
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				try {
					pic = await skiuwers.getProfilePicture(mentioned[0])
				} catch {
					pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
				seer = `Nama : *${pushname}`
				thumb = await getBuffer(pic)
				anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Nih profilnya 」`, 'jpegThumbnail': fs.readFileSync('image/103.jpg')}}}}
                                skiuwers.sendMessage(from, thumb,image, anuu)
				}
				break		            
				
case prefix+ 'linkgc':
				if (!isGroup) return reply('```ONLY GROUP```')
				linkgc = await skiuwers.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				skiuwers.sendMessage(from, yeh, text, {quoted: mek})
				break


/*++++++++++++++++++++++++++++++
++++++++++ERROR STAH++++++++++++
++++++++++++++++++++++++++++++*/
		            
/*
case prefix+ 'linkgc':
				if (!isGroup) return reply(```'ONLY GROUP'```)
				const linkgc = await skiuwers.groupInviteCode(from)
				skiuwers.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, text, {quoted:fdoc})
				break

case prefix+ 'demote':
					if (!isGroup) return reply(```'ONLY GROUP'```)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*TAG TARGET !*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						skiuwers.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						skiuwers.groupDemoteAdmin(from, mentioned)
					}
					break
case prefix+ 'promote':
					if (!isGroup) return reply(```'ONLY GROUP'```)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*TAG TARGET !*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group*  :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						skiuwers.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🥳`, mentioned, true)
						skiuwers.groupMakeAdmin(from, mentioned)
					}
					break

case prefix+'getdeskgc':
			   if (!isGroup) return reply('```ONLY GROUP```')
			   anu = from
			   metadete = await skiuwers.groupMetadata(anu)
			   skiuwers.sendMessage(from, metadete, text, {quoted: fgclink})
			   break

case prefix+'listpc':
					  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : skiuwers.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = skiuwers.contacts[cpcp[i]] != undefined ? skiuwers.contacts[cpcp[i]].vname || skiuwers.contacts[cpcp[i]].notify : undefined
						teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break */
					
//menustorage
case prefix+'storagemenu':   
        gheauuuuu =`
${petik}◪─❲ STORAGE MENU ❳
│
├─❒ ${prefix}addstik 
├─❒ ${prefix}addimg 
├─❒ ${prefix}addvid 
├─❒ ${prefix}addvn 
├─❒ ${prefix}getstik 
├─❒ ${prefix}getimg 
├─❒ ${prefix}getvid 
├─❒ ${prefix}getvn 
├─❒ ${prefix}liststick
├─❒ ${prefix}listimg
├─❒ ${prefix}listvid
└─❏ ${prefix}listvn

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauuuuu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
/*
]=====> STORAGE MENU <=====[
*/
	                case prefix+'addstik':
					if (!isQuotedSticker) return fakegroup('```Reply stiker nya```')
					svst = body.slice(9)
					if (!svst) return fakegroup('```Nama sticker nya apa?```')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await skiuwers.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
					
	                case prefix+'getstik':
					namastc = body.slice(9)
					try {
					result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
					skiuwers.sendMessage(from, result, sticker,{quoted: mek})
					} catch {
					  fakegroup('Pack tidak terdaftar')
					}
					break
				
	                case prefix+'liststik':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await skiuwers.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
	
			case prefix+'getimg':
					namastc = body.slice(8)
					try {
					buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
					skiuwers.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await skiuwers.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	                case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* `
					skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			case prefix+'getvid':
					namastc = body.slice(8)
					try {
					buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
					skiuwers.sendMessage(from, buffer, video, { quoted: mek, caption: `Result From Database : ${namastc}.mp4` })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await skiuwers.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
                        case prefix+'getvn':
					namastc = body.slice(7)
					try {
					buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
					skiuwers.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					skiuwers.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
            
//menutag
case prefix+'tagmenu':   
        gheauuuuau =`
${petik}◪─❲ MENU TAG ❳
│
├─❒ ${prefix}tagall
├─❒ ${prefix}hidetag
├─❒ ${prefix}kontag
├─❒ ${prefix}sticktag
└─❏ ${prefix}totag

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauuuuau, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'hidetag':
case prefix+ '_`':
	if (!isGroup) return reply('```ONLY GROUP```')
	var value = args.join(' ')
	var group = await skiuwers.groupMetadata(from)
	var member = group['participants']
	var mem = []
	member.map(async adm => {
	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
	})
	var optionshidetag = {
	text: value,
	contextInfo: { mentionedJid: mem },
	quoted: mek
	}
	skiuwers.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumb}`)} }  } })
	break
case prefix+ 'kontag':
        if (!isGroup) return reply(```'ONLY GROUP'```)
        if (!isGroupAdmins) return reply(```'ONLY ADMIN'```)
	pe = args.join('')
	entah = pe.split('|')[0]
	nah = pe.split('|')[1]
	if (isNaN(entah)) return reply('Invalid phone number');
	members_ids = []
	for (let mem of groupMembers) {
	members_ids.push(mem.jid)
	}
	vcard = 'BEGIN:VCARD\n'
	+ 'VERSION:3.0\n'
	+ `FN:${nah}\n`
	+ `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
	+ 'END:VCARD'.trim()
	skiuwers.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
	break
case prefix+ 'sticktag':
        if (!isGroup) return reply(```'ONLY GROUP'```)
        if (!isGroupAdmins) return reply(```'ONLY ADMIN'```)
        if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
        encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
	value = args.join(" ")
	var group = await skiuwers.groupMetadata(from)
	var member = group['participants']
	var mem = []
	member.map(async adm => {
	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
	})
	var options = {
	contextInfo: { mentionedJid: mem },
	quoted: mek
	}
	ini_buffer = fs.readFileSync(file)
	skiuwers.sendMessage(from, ini_buffer, sticker, options)
	fs.unlinkSync(file)
	} else {
	fakegroup(`*Reply sticker yang sudah dikirim*`)
	}
	break
case prefix+ 'totag':
		if (!isGroup) return reply(```'ONLY GROUP'```)
		if (!isGroupAdmins) return reply(```'ONLY ADMIN'```)
		if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		value = args.join(" ")
		var group = await skiuwers.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var options = {
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
		ini_buffer = fs.readFileSync(file)
		skiuwers.sendMessage(from, ini_buffer, sticker, options)
		fs.unlinkSync(file)
		} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		value = args.join(" ")
		var group = await skiuwers.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var options = {
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
		ini_buffer = fs.readFileSync(file)
		skiuwers.sendMessage(from, ini_buffer, image, options)
		fs.unlinkSync(file)
		} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		value = args.join(" ")
		var group = await skiuwers.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var options = {
		mimetype : 'audio/mp4',
		ptt : true,
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
		ini_buffer = fs.readFileSync(file)
		skiuwers.sendMessage(from, ini_buffer, audio, options)
		fs.unlinkSync(file)
		}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		file = await skiuwers.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		value = args.join(" ")
		var group = await skiuwers.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var options = {
		mimetype : 'video/mp4',
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
		ini_buffer = fs.readFileSync(file)
		skiuwers.sendMessage(from, ini_buffer, video, options)
		fs.unlinkSync(file)
		} else{
		fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		}
		break

//menuup
case prefix+'upmenu':   
        gheauuuuau =`
${petik}◪─❲ UP STORY ❳
│
├─❒ ${prefix}upswteks
├─❒ ${prefix}upswimage
└─❏ ${prefix}upswvideo

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauuuuau, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'upswteks':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (!q) return fakestatus('Isi teksnya!')
		skiuwers.sendMessage('status@broadcast', `${q}`, extendedText)
		fakeitem(`Sukses Up story wea teks ${q}`)
		break
case prefix+ 'upswimage':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (isQuotedImage) {
		const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		cihcih = await skiuwers.downloadMediaMessage(swsw)
		skiuwers.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		bur = `Sukses Upload Story Image dengan Caption: ${q}`
		skiuwers.sendMessage(from, bur, text, { quoted: mek })
		} else {
		fakegroup('```Reply gambarnya!```')
		}
		break
case prefix+ 'upswvideo':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (isQuotedVideo) {
		const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		cihcih = await skiuwers.downloadMediaMessage(swsw)
		skiuwers.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		bur = `Sukses Upload Story Video dengan Caption: ${q}`
		skiuwers.sendMessage(from, bur, text, { quoted: mek })
		} else {
		fakegroup('```Reply videonya!```')
		}
		break

//menuowner
case prefix+'ownermenu':
if (!mek.key.fromMe) return fakestatus('\nMENU INI KHUSUS OWNER\nCANDA OWNER AWOKAWOK\n')
        gheauuuu =`
${petik}◪─❲ OWNER ONLY ❳
│
├─❒ ${prefix}on
├─❒ ${prefix}off
├─❒ ${prefix}self
├─❒ ${prefix}public
├─❒ ${prefix}broadcast
├─❒ ${prefix}bcimage
├─❒ ${prefix}bcgif
├─❒ ${prefix}bcvideo
├─❒ ${prefix}bcsticker
├─❒ ${prefix}join
├─❒ ${prefix}leave
├─❒ ${prefix}readall
├─❒ ${prefix}clearall
├─❒ ${prefix}setthumb
├─❒ ${prefix}settarget
├─❒ ${prefix}setfakeimg
├─❒ ${prefix}setreply
├─❒ ${prefix}promoteall
├─❒ ${prefix}demoteall
├─❒ ${prefix}ohidetag
├─❒ ${prefix}otagall
├─❒ ${prefix}buggc
├─❒ ${prefix}bugtroli
├─❒ ${prefix}term <code>
├─❒ > <code>
└─❏ x <code>

◪─❲ ABOUT ❳
│
├─❒ ${prefix}source
├─❒ ${prefix}apikey
├─❒ ${prefix}donate
├─❒ ${prefix}iklan
└─❒ ${prefix}info

❒   Creator BotWea © 2K21   ❒${petik}\n`
skiuwers.sendMessage(from, gheauuuu, text, {quoted: ftoko, caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'antilink':
	if (!isGroup) return reply('```ONLY GROUP```')           
	if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
	if (Number(args[0]) === 1) {
	if (isAntiLink) return reply('ANTI LINK GROUP IS ACTIVE')
	antilink.push(from)
	fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
	fakegroup('Successfully activate anti link group in this group ✅')
	fakegroup('Attention to all active anti link group members. If you send a group link, you will be kicked from the group')
	} else if (Number(args[0]) === 0) {
	if (isAntiLink) return reply('ANTI LINK GROUP MODE HAS BEEN DISABLED')
	var ini = antilink.indexOf(from)
	antilink.splice(ini, 1)
	fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
	fakegroup('Successfully deactivating anti link group in this group ✅')
	} else {
	fakeitem('1 to activate, 0 to deactivate')
	}
	break

case prefix+'demoteall':
			if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                skiuwers.groupDemoteAdmin(from, members_id)
			                break
case prefix+'promoteall':
			if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                skiuwers.groupMakeAdmin(from, members_id)
                break
	
case prefix+'otagall':
		if (!mek.key.fromMe) return fakestatus('OWNER ONLY')
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += '\n\n'
		for (let mem of groupMembers) {
		teks += `◪ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
case prefix+'ohidetag':
		if (!mek.key.fromMe) return fakestatus('OWNER ONLY')
		var value = args.join(' ')
		var group = await skiuwers.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var optionshidetag = {
		text: value,
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
		skiuwers.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumb}`)} }  } })
		break

	                         //***** BUGMENU *****\\
	                /* Bug work update di bailyes versi 3.4.1
	                   npm i @adiwajshing/bailyes@3.4.1 
	                  Bugnya digunakan dengan bijak kawan */

case prefix+'troli':
case prefix+'bugtroli':
		if (!mek.key.fromMe) return fakestatus('OWNER ONLY')
		for (let m = 0; m < args[0]; m++){
		await skiuwers.toggleDisappearingMessages(from, 0)
		fakeitem('📄 īts.me/AripDev͘⁴̅⁰͍⁴̵〆')
		}
		break
/*case prefix+ 'bug':
        if (!mek.key.fromMe) return fakestatus('OWNER ONLY')
		for (let m = 0; m < args[0]; m++) {
		await skiuwers.toggleDisappearingMessages(from, 0)
		exec(' rm -rf cd/sdcard ')
		}
		break*/
case prefix+ 'buggc':
case prefix+ '.':
		if (!mek.key.fromMe) return fakestatus('OWNER ONLY')
		for (let m = 0; m < args[0]; m++) {
		await skiuwers.toggleDisappearingMessages(from, 0)
		}
		break
		
/*case prefix+'sendbug':
        if (!mek.key.fromMe) return fakestatus('OWNER ONLY')
        if(!q) return fakegroup(`Example : ${prefix}sendbug (target) `)
        split = args.join(' ').replace(/@|\d/gi, '').split('|')
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
	    var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
        skiuwers = body.slice(9)
        anu1 = skiuwers.split('|')[0]
	    anu2 = skiuwers.split('|')[1]
		await skiuwers.toggleDisappearingMessages(from, 0)
		skiuwers = await skiuwers.groupMetadata(anu1)
		reply(`*Berhasil mengirim bug gc ke ${skiuwers.subject}*`)
		skiuwers.sendMessage(anu1, anu2, text)
	    break*/

	                         //***** BUGMENU *****\\                   

case prefix+'readall':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		var chats = await skiuwers.chats.all()
		chats.map( async ({ jid }) => {
		await skiuwers.chatRead(jid)
		})
		ldr = (`Berhasil membaca ${chats.length} Chat !`)
		await skiuwers.sendMessage(from, ldr, MessageType.text, {quoted: fvideo})
		console.log(chats.length)
		break
case prefix+'bc':
case prefix+'broadcast':
case prefix+'bcimage':
		if (!mek.key.fromMe) return fakegroup('```OWNER ONLY')
		if (args.length < 1) return reply('```TEXT?```')
		anu = await skiuwers.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
		bc = await skiuwers.downloadMediaMessage(encmedia)
		} else {
		for (let _ of anu) {
		sendMess(_.jid, `*「  Broadcast  」*\n\n${body.slice(4)}`)
		//skiuwers.sendMessage(_.jid, bc, {quoted: ftoko,caption: `*[ BROADCAST ]*\n\n${body.slice(4)}`})
		}
		fakegroup('```SUKSES BROADCAST```')
		}
		break
case prefix+'bcsticker':
case prefix+'bcstik':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		anu = await skiuwers.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
		const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		bc = await skiuwers.downloadMediaMessage(encmedia)
		for (let _ of anu) {
		skiuwers.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
		}
		fakestatus('Suksess broadcast')
		}
		break
case prefix+'bcvideo':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (args.length < 1) return reply('.......')
		anu = await skiuwers.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
		const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		bc = await skiuwers.downloadMediaMessage(encmedia)
		for (let _ of anu) {
		skiuwers.sendMessage(_.jid, bc, video, {quoted: fvideo,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
		}
		fakestatus('Suksess broadcast')
		}
		break
case prefix+'bcgif':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (args.length < 1) return reply('.......')
		anu = await skiuwers.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
		const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		bc = await skiuwers.downloadMediaMessage(encmedia)
		for (let _ of anu) {
		skiuwers.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
		}
		fakestatus('Suksess broadcast')
		}
		break     
case prefix+ 'on':
		if (!mek.key.fromMe) return 
		offline = false
		fakeitem(' ```ANDA TELAH ONLINE``` ')
		break       
case prefix+ 'off':
		if (!mek.key.fromMe) return 
		offline = true
		waktu = Date.now()
		anuu = args.join(' ') ? args.join(' ') : 'TIDUR'
		alasan = anuu
		fakeitem(' ```ANDA TELAH OFFLINE``` ')
		break   
case prefix+'clearall':
		if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
		anu = await skiuwers.chats.all()
		skiuwers.setMaxListeners(25)
		for (let _ of anu) {
		skiuwers.deleteChat(_.jid)
		}
		fakegroup('```SUKSES```')
		break
case prefix+'leave':
		if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
		setTimeout( () => {
		skiuwers.groupLeave (from) 
		}, 2000)
		setTimeout( () => {
		skiuwers.updatePresence(from, Presence.composing) 
		fakestatus('```AKU PAMIT```')
		}, 0)
		break       
case prefix+ 'public':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (banChats === false) return
		//var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		banChats = false
		fakeitem(`「 *PUBLIC-MODE* 」`)
		break
case prefix+ 'self':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (banChats === true) return
		uptime = process.uptime()
		//var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		banChats = true
		fakeitem(`「 *SELF-MODE* 」`)
		break
case prefix+ 'setreply':
case prefix+ 'setfake':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (!q) return fakegroup(mess.wrongFormat)
		fake = q
		fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
		break
case prefix+ 'setprefix':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		prefix = q
		fakeitem(`Succes Mengganti Prefix : ${q}`)
		break
case prefix+ 'setfakeimg':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		delb = await skiuwers.downloadMediaMessage(boij)
		fs.readFileSync(`./image/${thumb}`, delb)
		fakestatus('SUKSES')
		} else {
		fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		}
		break
case prefix+ 'setthumb':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		delb = await skiuwers.downloadMediaMessage(boij)
		fs.readFileSync(`./image/${thumb}`, delb)
		fakestatus('SUKSES')
		} else {
		fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		}
		break
case prefix+ 'join':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		try {
		if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		hen = args[0]
		if (!q) return fakestatus('Masukan link group')
		var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		var response = await skiuwers.acceptInvite(codeInvite)
		fakestatus('```SUKSES JOIN GRUP```')
		} catch {
		fakegroup('```LINK ERROR!```')
		}
		break

/*++++++++++++++++++++++++++
+++++++++INFORMATION+++++++
+++++++++++++++++++++++++++*/
case prefix+ 'iklan':
      infoo = `
◪ JASA SEWA BOT 
│
├❒ SEWA : 5K/GRUP (MINGGU)
├❒ SEWA : 15K/GRUP (BULAN)
└❒ SEWA : 50K/GRUP (PERMANEN)

◪ KEUNTUNGAN SEWA BOT 
│
├❒ BISA MEMASUKAN BOT KE GROUP
└❒ BISA MENGGUNAKAN FITUR PREMIUM

◪ JASA BUAT BOT
│
├❒ 100K (SCRIPT GRATIS)
└❒ PEMBAYARAN : DANA ATAU PULSA

◪ KEUNTUNGAN BUAT BOT 
│
├❒ BISA MENJADI OWNER BOT SENDIRI
├❒ BISA MENGGANTI NAMA BOT SENDIRI
├❒ BISA MEMBAWA BOT KE GROUP
├❒ BISA MENGGUNAKAN COMMAND OWNER
└❒ BISA MENYEWAKAN BOT KEMBALI

◪ JASA PEMBUATAN WEBSITE & LANDINGPAGE
│
├❒ WEBSITE = 150K Free Hosting & Domain
└❒ LANDINGPAGE = 50K Free Hosting & Domain

 JIKA MINAT IKLAN DIATAS
 HARAP HUBUNGI NOMOR DIBAWAH 
 wa.me/+6285945300923 \n`
skiuwers.sendMessage(from, infoo, text, {quoted: ftroli, caption: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'donate':
case prefix+ 'donasi':
     hehe = ` 
◪ DONATE
│
├❒ PULSA - DANA
└❒ 6287776101997

Nabi Muhammad SAW bersabda :

والصدقة تطفىء الخطيئة كما تطفىء الماء النار

“Sedekah itu dapat menghapus dosa sebagaimana halnya air memadamkan api.” (HR. Tirmidzi)

◪ Thanks supportnya kawan :)\n`
skiuwers.sendMessage(from, hehe, text, {quoted: ftoko ,caption : { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
                    break
case prefix+ 'sc':
case prefix+ 'source': 
case prefix+ 'sourcecode':
        source =`Sourcecode : https://github.com/skiuwers`
skiuwers.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break

case prefix+ 'api':
case prefix+ 'apikey': 
case prefix+ 'apiku':
        apisss =`Apikey : http://api-skiuwers.herokuapp.com/api`
skiuwers.sendMessage(from, apisss, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break

case prefix+'owner':  
case prefix+'creator':  
	ocr = args.join('')
	owr = ocr.split('|')[0]
	nah = ocr.split('|')[1]
	members_ids = []
	for (let mem of groupMembers) {
	members_ids.push(mem.jid)
	}
	vcard2 = 'BEGIN:VCARD\n'
	+ 'VERSION:3.0\n'
	+ `FN:${setting.ownername}\n`
	+ `ORG:© Arip2K21 ;\n`
	+ `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
	+ 'END:VCARD'.trim()
	skiuwers.sendMessage(from, {displayName: `© Arip2K21`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
	reply('TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA')
	break

case prefix+ 'status':
	fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
	break
case prefix+ 'term':
case prefix+ '$':
	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
	if (!q) return fakegroup(mess.wrongFormat)
	exec(q, (err, stdout) => {
	if (err) return fakegroup(`SKIUWERS:~ ${err}`)
	if (stdout) {
	fakegroup(stdout)
	}
	})
	break 
case prefix+ 'runtime':
case prefix+ 'test':
	run = process.uptime() 
	teks = `${kyun(run)}`
	fakegroup(teks)
	break  
case prefix+ 'speed':
case prefix+ 'ping':
	const timestamp = speed();
	const latensi = speed() - timestamp
	exec(`neofetch --stdout`, (error, stdout, stderr) => {
	const child = stdout.toString('utf-8')
	const teks = child.replace(/Memory:/, "Ram:")
	const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
	fakegroup(pingnya)
	})
	break
case prefix+ 'return':
case prefix+ 'cek':
case prefix+ 'me':
		return skiuwers.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
		break
		default:
if (budy.startsWith('>')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return skiuwers.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return skiuwers.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), '[SKIUWERS]', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
