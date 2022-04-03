const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`${client.user.tag}이 실행했어요`);
});
client.on("message", msg => {

  if (msg.content === "누구 좋아해") {
    msg.reply("엄준식");
  }
  if (msg.content === "준식이는 누구 좋아해") {
    msg.reply("엄준식");
  }
  if (msg.content === "TESTEST") {
    msg.reply("안녕하세요 TESTEST입니다 아직 개발중에 있지만");
  }
});
client.login("토큰");