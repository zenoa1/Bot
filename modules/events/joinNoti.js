module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "HĐGN",//Update by ThanhAli
  description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`「 ${global.config.PREFIX} 」 » 𝐁𝐎𝐓${(!global.config.BOTNAME) ? "🐾" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━\n► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n━━━━━━━━━━━━━━━━━━\n[🐣] ⟶ 𝐇𝐢 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐨𝐭 𝐂𝐮̉𝐚 𝐓ấ𝐧 𝐓à𝐢\n[💌] ⟶ 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐮̛̉𝐢 𝐁𝐨𝐭 , 𝐒𝐩𝐚𝐦 , 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭\n[🌸] ⟶ 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 /𝐡𝐞𝐥𝐩 , /𝐦𝐞𝐧𝐮 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐂𝐚́𝐜 𝐋𝐞̣̂𝐧𝐡 𝐓𝐫𝐨𝐧𝐠 𝐁𝐨𝐭\n[🐉] ⟶ 𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐚̀𝐢 𝐁𝐨𝐭 𝐕𝐯 , 𝐕𝐚̀ 𝐂𝐨́ 𝐌𝐨̣̂𝐭 𝐍𝐠𝐚̀𝐲 𝐓𝐨̂́𝐭 𝐋𝐚̀𝐧𝐡\n━━━━━━━━━━━━━━━━━━\n[🛸] ⟶ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧:https://www.facebook.com/tantai3729 \n━━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "cache/de7ee19e51917d02f5934d667ef12e02.mp4")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache");
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
    const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      memLength.sort((a, b) => a - b);		
    (typeof threadData.customJoin == "undefined") ? msg = "𝗧𝗵𝗲̂𝗺 𝗧𝘃𝗺 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴\n━━━━━━━━━━━━\n⟶ 𝐂𝐡𝐚̀𝐨 𝐦𝐮̛̀𝐧𝐠 {name} 𝐭𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 {threadName}\n⟶ 𝐔𝐑𝐋 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤:\nhttps://fb.com/{iduser}\n⟶ {type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n⟶ Đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐛𝐨̛̉𝐢: {author}\n⟶ 𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢̣ đ𝐚́ 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐞́ 💤\n━━━━━━━━━━━━\n⟶ 〘 {time} 〙⟵": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
      msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'Các con zợ' : 'Con zợ')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
      } 
