const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Kingdavid3333/AKVID-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagFXfAATRSrUq8ROT1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagFXfAATRSrUq8ROT1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/78fe770577874437b97d8.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "254 773 440758";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263787453677";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "263,278,267";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://s222-97346bfd73f7.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVJbDlzblJMVyt1WTRDNVlvcFhBQ0p3ekxEaExHRndBV1UxZmN1KzBITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXg5YlhieHJQR2lUT3dIUVZpOGlreVgwQkd2T09VNTZzQjlPT2dmVGdDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS0d1M3R4QThZaHg5NDN4LzBqZWRKUXhPWHlVTVBnRy9CWEdEY1hIMUVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0aFJ6aVFTSDFnVGx3emtXQVJCbkRTWWZmWnNhSG01YVNxaXlseEdOdFJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLSDY1MUlva0h0ejRlYmlrdmRma0VONFc5bDVmWUVFeGF2VTEwN3dTMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIrajZ6SkhIRTIrRExxb1VlOUVYZXVOYUw0TkZwSjF5NWg1VkVxM0pkME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pPRkZ4QXd2R3lYcVNlNk1kUGpUN055dnhDZ2VYR3J2dVBtU1dXTGkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVS8vQnBWSWVwTCthMTVXTkJMRWpqVUlSNTBRVGV3bVkyRGZnanpmNXNtdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktERHRPdHRNaVpkQUE5M043TURBai85bWptUkdEUC9tcHNwbENhTEpTV0xHbW5sNTBSRTZ3QWpKVXpDcFYzQXlYa0lNMTIvOUJFSGFQcEZrWklVdGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJYcFRFcS9BNzM0ckdESFFZWm5wSjl3UjdudzNpMnBwcFVCekpPTlpFRldnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoQlpmZ3pGaVR2NlBaNUVsVVVEenB3IiwicGhvbmVJZCI6Ijk0NGE0MDhjLWY0ZDQtNGRlYy1iZTE0LTc3NTNjNWZiNjU0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQnZpcVNHeTBBcDFTaVNORzFEbldOZ01VREU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWZ6NlQ1alVmb0tneTNLREpLT1VKOVlmSjI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVCREc5MUVUIiwibWUiOnsiaWQiOiIyNTQ3NzM0NDA3NTg6OTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+OryBERUxCT1kgQU5JRVkgT0ZGSUNJQUwg8J+ljyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTJIbGNzQkVKTyt0ck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiejdyanJmSDJuaEJvN0owL2IzdGtDbXArblFUcUdMRnBZQXl6dHR0MFUzQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVTdsN1lNd2kvbWczc094bEIwbzFLc3hTWFN5M1N4THFqeFovbjZvVUZMRFlzdHVNMkpSRlp3N2NxUTlmSkRnbS9NakF3bkg4cytGRUFxZENLMXBnREE9PSIsImRldmljZVNpZ25hdHVyZSI6InZMeXMyZkRiQThSL2VBYUZSemUzSG9IeGJYRFFEY1RLRDArUW9wWjlrMEJXQzF2RnQ5ZlJhTWlLWnFBMVBZL1dFTVNZeUMrbTNwT2VlMHlLcCs5QWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzczNDQwNzU4Ojk3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMrNjQ2M3g5cDRRYU95ZFAyOTdaQXBxZnAwRTZoaXhhV0FNczdiYmRGTncifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg0NjAxOTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTBCIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "&#*$!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 DELBOY ANIEY-𝕄𝔻",
  author: process.env.PACK_AUTHER || "AKVID-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DELBOY-MD",
  ownername: process.env.OWNER_NAME || "DELBOY ANIEY ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "AKVID").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
