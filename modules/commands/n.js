module.exports.config = {
  name: "\n",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sailenh",
  commandCategory: "Hệ Thống",
  usages: "Công cụ",
  cooldowns: 0
};

module.exports.run = async ({ api, event ,Users}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  const time = process.uptime(),hours = Math.floor(time / (60 * 60)),	minutes = Math.floor((time % (60 * 60)) / 60),seconds = Math.floor(time % 60);
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const timeStart = Date.now();
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;  
  const tdung = require('./cache/gaivip.json');
  var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  var image2 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  function vtuanhihi(image,vtuandz,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);
  }

  let callback = function () {
    return api.sendMessage({
      body: `===[ 𝐙 𝐄 𝐍 𝐎 ]===\n━━━━━━━━━━━━━━━━━━\n→𝐃𝐚̂𝐲 𝐥𝐚̀ 𝐛𝐨𝐭 𝐝𝐮̛𝐨̛̣𝐜 𝐝𝐢𝐞̂̀𝐮 𝐭𝐡𝐚̀𝐧𝐡 𝐛𝐨̛̉𝐢 𝐙𝐞𝐧𝐨\n→𝐜𝐡𝐚𝐭 "𝐚𝐝𝐦𝐢𝐧" 𝐝𝐞̂̉ 𝐛𝐢𝐞̂́𝐭 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐚𝐝𝐦𝐢𝐧!!\n━━━━━━━━━━━━━━━━━━\n→ 𝐓𝐢𝐦𝐞 𝐨𝐧𝐥 : ${hours} : ${minutes} : ${seconds}\n→𝐏𝐫𝐞𝐟𝐱 : ${global.config.PREFIX}\n→𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms\n→𝐁𝐨𝐭 𝐜𝐨́ : ${client.commands.size} 𝐋𝐞̣̂𝐧𝐡\n━━━━━━━━━━━━━━━━━━\n!!! 𝐓𝐡𝐚̉ 𝐢𝐜𝐨𝐧 "🦈" 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐛𝐨𝐭 𝐭𝐡𝐢̀ 𝐛𝐨𝐭 𝐬𝐞̃ 𝐭𝐮̛̣ 𝐝𝐨̣̂𝐧𝐠 𝐠𝐨̛̃ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 !!!\n━━━━━━━━━━━━━━━━━━\n𝐂𝐚̉𝐦 𝐨̛𝐧 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐝𝐚̃ 𝐭𝐢𝐧 𝐭𝐮̛𝐨̛̉𝐧𝐠 𝐯𝐚̀ 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭❤🎀\n𝐆𝐢𝐨̛̀ 𝐥𝐚̀ : ${gio}`,
      attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
    }, event.threadID, () => {
      fs.unlinkSync(__dirname + `/1.png`);
      fs.unlinkSync(__dirname + `/2.png`);
    }, event.messageID);
  };
      vtuanhihi(image1,'1.png',()=>{vtuanhihi(image2,'2.png',callback)})

}
