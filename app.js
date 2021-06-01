const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config.json");
const { multiply } = require("./calculator");

client.on("ready", async () => {
  console.log("The bot is online");
});

client.on("message", async (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  if (cmd === "calci") {
    if (args[0].toLowerCase() === "multiply") {
      //  multiply, 10, 10
      args.shift();
      return message.channel.send(multiply(args)).catch((err) => {});
    }
    if (args[0].toLowerCase() === "add") {
      args.shift();
      return message.channel.send(multiply(args)).catch((err) => {});
    }
  }
});
client.login("ODQ5MzY0MDIyNjM2NzA3ODkw.YLaF4w.wa9RKHIFzs72pPQM5SfoMXQUN5k");
