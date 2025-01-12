module.exports.config = {
  name: "hi",
  version: "3.0.0",
  hasPermssion: 0,
  credit: "Vtuan",
  description: "hi gửi sticker and hinh anh",
  commandCategory: "Nhóm",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event,Threads, Users }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
  if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
  if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
  if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
  if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
  if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
  if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'
  let KEY = [ "hello","hi","hai","chào","chao","hí","híí","hì","hìì","lô","hii","helo","hê nhô","haii m.n","Hai m.n","nhé nhô","nhô","chào m.n","he lo",
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = ["526214684778630","526220108111421","526220308111401","526220484778050","526220691444696","526220814778017","526220978111334","526221104777988","526221318111300","526221564777942","526221711444594","526221971444568","2523892817885618","2523892964552270","2523893081218925","2523893217885578","2523893384552228","2523892544552312","2523892391218994","2523891461219087","2523891767885723","2523891204552446","2523890691219164","2523890981219135","2523890374552529","2523889681219265","2523889851219248","2523890051219228","2523886944552872","2523887171219516","2523888784552688","2523888217886078","2523888534552713","2523887371219496","2523887771219456","2523887571219476"
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "𝐇𝐚𝐩𝐩𝐲=))","𝐯𝐮𝐢 𝐯𝐞̉:𝟑","𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 ❤","𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐢𝐞̂̀𝐦 𝐯𝐮𝐢 😘"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "𝐬𝐚́𝐧𝐠 𝐭𝐢𝐧𝐡 𝐦𝐨̛" : 
    hours > 401 && hours <= 700 ? "𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" :
    hours > 701 && hours <= 1000 ? "𝐬𝐚́𝐧𝐠" :
    hours > 1001 && hours <= 1200 ? "𝐭𝐫𝐮̛𝐚" : 
    hours > 1201 && hours <= 1700 ? "𝐜𝐡𝐢𝐞̂̀𝐮" : 
    hours > 1701 && hours <= 1800 ? "𝐜𝐡𝐢𝐞̂̀𝐮 𝐭𝐚̀" : 
    hours > 1801 && hours <= 2100 ? "𝐭𝐨̂́𝐢" : 
    hours > 2101 && hours <= 2400 ? "𝐭𝐨̂́𝐢 𝐦𝐮𝐨̣̂𝐧" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    const tdung = require('./../../anhbotzeno/anh.json');
    var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();
    var image2 = tdung[Math.floor(Math.random() * tdung.length)].trim();
    function vtuanhihi(image,vtuandz,callback){
      request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);
    }
          let callback = function () {
           return api.sendMessage({
                body: `❤️✨『 𝐀𝐔𝐓𝐎𝐍𝐎𝐓𝐈 』✨❤️\n━━━━━━━━━━━━━\n➜ 𝐇𝐞𝐥𝐥𝐨 ${name} 𝐜𝐮𝐭𝐢 𝐩𝐡𝐨̂ 𝐦𝐚𝐢 𝐪𝐮𝐞\n『 🌱 』 ➜𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}\n[⏰] 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}`,
             attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
               }, event.threadID, () => {
                 fs.unlinkSync(__dirname + `/1.png`);
                 fs.unlinkSync(__dirname + `/2.png`);
               },event.messageID);
             };
                 vtuanhihi(image1,'1.png',()=>{vtuanhihi(image2,'2.png',callback)})

          let msg = {}
              api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 1500)
    }, event.messageID)
             }                                                                
            }
           }

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }
