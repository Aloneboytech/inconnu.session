const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Inconnu_boy,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function INCONNU_BOY_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Inconnu_boy = Inconnu_boy({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Inconnu_boy.ev.on('creds.update', saveCreds)
			Qr_Code_By_Inconnu_boy.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Inconnu_boy.sendMessage(Qr_Code_By_Inconnu_boy.user.id, { text: '' + b64data });
	
				   let INCONNU_BOY_TEXT = `
┏━━━━━━━━━━━━━━
┃BUTTERFLY-MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = ©INCONNU BOY
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vb5OsKz7dmeeDsoYbz3c
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/263780166288
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/Aloneboytech/BUTTERFLY-MD
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/@Buttetfly_18_familly 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ©INCONNU BOY_`
	 await Qr_Code_By_inconnu_boy.sendMessage(Qr_Code_By_inconnu_boy.user.id,{text:INCONN_BOY_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_inconnu_boy.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					INCONNU_BOY_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await INCONNU_BOY_QR_CODE()
});
module.exports = router
                                  
