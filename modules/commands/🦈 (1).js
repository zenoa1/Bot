module.exports.config = {
	name: "🦈",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",//mod by QDuy
	description: "Khởi Động Lại Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("⟶ 𝐛𝐨𝐭 𝐤𝐡𝐨𝐢 𝐝𝐨𝐧𝐠 𝐥𝐚𝐢 𝐝𝐚𝐲, 𝐡𝐞𝐧 𝐠𝐚𝐩 𝐥𝐚𝐢 𝐬𝐚𝐮 𝐯𝐚𝐢 𝐠𝐢𝐚𝐲.",event.threadID, () =>process.exit(1))