const fs = require("fs");
const chalk = require("chalk");

// TOKEN BOT TELEGRAM
global.token = ["6099209702:AAHTdqC6d9OUiJMXs_CnTDsJ9-jsTPmMvOM"];
// BOTNAME
global.botname = "JurigBOT";

//APIKEY XCODERS
global.xcoders = "pxp7YYCE7D8J9pU";

//APIKET RSNCHAT
global.rsnchat = "rsnai_65hummaIA8Pl4EeOyPLZf0iW";

//MONGODBURL
global.MONGODB_URI =
  "mongodb+srv://muhamadhaisyamkhairizmi:wanasalam@bot-tele.memphkh.mongodb.net/?retryWrites=true&w=majority&appName=Bot-Tele";

//OTHER
global.owner = "JurigVPN";
global.wait = "⏳ Mohon tunggu sebentar";

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
