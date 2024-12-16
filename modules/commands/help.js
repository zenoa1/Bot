module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam",
    description: "Xem danh sách lệnh và info",
    commandCategory: "Người dùng",
    usages: "[tên lệnh/all]",
    cooldowns: 0
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args
}) {
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 0
  const { events } = global.client;
    const vjp = process.uptime();
  var hieu = Math.floor(vjp / (60 * 60));
  var simp = Math.floor((vjp % (60 * 60)) / 60);
  var rin = Math.floor(vjp % 60);
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
    if (type == "all") {
        for (const cmd of cmds.values()) {
            msg += `${++i}. Tên lệnh: ${cmd.config.name}\n📌 Mô tả: ${cmd.config.description}\n\n`
        }
        return api.sendMessage(msg, tid, mid)
    }
   // if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `Không Tìm Thấy Lệnh '${type}'\nLệnh gần giống được tìm thấy => '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `=== HƯỚNG DẪN SỬ DỤNG ===\n🌟 Tên lệnh: ${cmd.name}\n📝 Phiên bản: ${cmd.version}\n👤 Quyền Hạn: ${TextPr(cmd.hasPermssion)}\n🧪 Credit: ${cmd.credits}\n✏ Mô Tả: ${cmd.description}\n📎 Nhóm: ${cmd.commandCategory}\n📌 Cách Dùng: ${cmd.usages}\n⏳ Cooldowns: ${cmd.cooldowns}s`
        api.sendMessage(msg, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
        for (const cmd of array) {
            msg += `⭐━━━━ 〈 ${cmd.cmdCategory.toUpperCase()} 〉 ━━━━⭐\n👤 Quyền Hạn: ${TextPr(cmd.permission)}\n📝 Tổng: ${cmd.nameModule.length} lệnh\n✏️ Mục ${++i} bao gồm các lệnh sau:\n${cmd.nameModule.join(" ,")}\n\n`
        }
       return api.sendMessage( msg += `──────────────────\n📥 Tổng lệnh: ${cmds.size}\n📝 Tổng events là: ${global.client.events.size}\n🔥 ${prefix}help + tên lệnh để xem chi tiết\n💧 ${prefix}help + all để xem tất cả lệnh\n⏳ Hiện tại bot đã online tổng cộng ${hieu} giờ ${simp} phút ${rin} giây.`,event.threadID, event.messageID)
        api.sendMessage(msg, tid)
        }
 global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Thành Viên" : p == 1 ? "Qtv Nhóm" : p = 2 ? "Admin Bot" : "Toàn Quyền"
}