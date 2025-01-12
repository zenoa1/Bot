module.exports.config = {
  name: "duyetbox",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "DungUwU",
  description: "Duyệt người dùng hoặc nhóm sử dụng Bot",
  commandCategory: "Hệ thống admin-bot",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;

  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));


  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "l") {
    msg = " 𝐙𝐞𝐧𝐨🦈\n→ Danh sách các nhóm đã duyệt";
    let count = 0;
    for (e of data) {
       let name = (await api.getThreadInfo(e)).name || "Nhóm Chat";
      msg += `\n→ ${count += 1}. ${name}\n→ ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "del") {
   let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage(" 𝐙𝐞𝐧𝐨🦈\n→ Không phải một con số", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage(" 𝐙𝐞𝐧𝐨🦈\n→ Nhóm không được duyệt từ trước", threadID, messageID);
    api.sendMessage(` 𝐙𝐞𝐧𝐨🦈\n→ Nhóm ${threadName}\n→ ID: ${idBox} đã bị gỡ khỏi danh sách được phép sử dụng Bot`, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "Z") {

    msg = " 𝐙𝐞𝐧𝐨🦈\n→ Danh sách nhóm đang chờ phê duyệt";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || " Nhóm Chat ";
      msg += `\n→ ${count += 1}. ${name}\n → ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }

  else if (isNaN(parseInt(idBox))) api.sendMessage(" 𝐙𝐞𝐧𝐨🦈\n→ ID bạn nhập không hợp lệ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(` 𝐙𝐞𝐧𝐨🦈\n→ ID ${idBox} đã được phê duyệt từ trước`, threadID, messageID);
  else api.sendMessage(" 𝐙𝐞𝐧𝐨🦈\n→ Nhóm đã được Admin duyệt để sử dụng", idBox, (error, info) => {
    if (error) return api.sendMessage(" 𝐙𝐞𝐧𝐨🦈\n→ Đã có lỗi xảy ra, đảm bảo rằng ID bạn nhập hợp lệ và Bot đang ở trong nhóm", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(` 𝐙𝐞𝐧𝐨🦈\n→ Phê duyệt thành công nhóm: ${idBox}`, threadID, messageID);
    }
  });
}  let _ = o.handleReply;
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);

  if (o.event.senderID != _.event.senderID)return;

  if (isFinite(o.event.args[0])) {
    let info = data[o.event.args[0]-1];

    if (!info)return send(`STT không tồn tại!`);

    return send(`== [ Thông Tin Thuê Bot ] ==\n─────────────────\n👤 Tên người thuê: ${global.data.userName.get(info.id)}\n🌐 link Facebook: https://www.facebook.com/profile.php?id=${info.id}\n👥 Nhóm: ${(global.data.threadInfo.get(info.t_id) || {}).threadName}\n⚡ ID Nhóm: ${info.t_id}\n📆 Ngày Thuê: ${info.time_start}\n⏳ Hết Hạn: ${info.time_end}\n📌 Còn ${(()=> {
      let time_diff = new Date(form_mm_dd_yyyy(info.time_end)).getTime()-(Date.now()+25200000);
      let days = (time_diff/(1000*60*60*24))<<0;
      let hour = (time_diff/(1000*60*60)%24)<<0;

      return `${days} ngày ${hour} giờ là hết hạn.`;
    })()}`);
  } else if (o.event.args[0].toLowerCase() == 'del') {
    o.event.args.slice(1).sort((a, b)=>b-a).forEach($=>data.splice($-1, 1));
    send(`Đã xóa thành công!`);
  } else if (o.event.args[0].toLowerCase() == 'giahan') {
    let STT = o.event.args[1];
    let time_start = o.event.args[2];
    let time_end = o.event.args[4];

    if (invalid_date(form_mm_dd_yyyy(time_start)) || invalid_date(form_mm_dd_yyyy(time_end)))return send(`Thời Gian Không Hợp Lệ!`);

    if (!data[STT-1])return send(`STT không tồn tại`);

    let $ = data[STT-1];

    $.time_start = time_start;
    $.time_end = time_end;
    send(`Đã gia hạn nhóm thành công!`);
  } else if (o.event.args[0].toLowerCase() == 'out') {
    for (let i of o.event.args.slice(1)) await o.api.removeUserFromGroup(o.api.getCurrentUserID(), data[i-1].t_id);

    send(`Đã out nhóm theo yêu cầu`);
  };
  save();
};
