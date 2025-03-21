const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Inconnu_boy,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Inconnu_boy_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Inconnu_boy = Inconnu_boy({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Inconnu_boy.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Inconnu_boy.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Inconnu_boy.ev.on('creds.update', saveCreds)
            Pair_Code_By_Inconnu_boy.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Inconnu_boy.sendMessage(Pair_Code_By_Inconnu_boy.user.id, { text: '' + b64data });

               let Inconnu_boy_TEXT = `
┏━━━━━━━━━━━━━━
┃BUTTERFLY-MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = ©inconnu boy
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vb5OsKz7dmeeDsoYbz3c
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/243902632315
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/Aloneboytech/BUTTERFLY-MD
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/@Butterfly_18_familly
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ©INCONNU BOY_`
 await Pair_Code_By_inconnu_boy.sendMessage(Pair_Code_By_inconnu_boy.user.id,{text:INCONNU_BOY_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_inconnu_boy.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    INCONNU_BOY_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await INCONNU_BOY_PAIR_CODE()
});
module.exports = router
