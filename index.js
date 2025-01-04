const Discord = require("discord.js-selfbot-v11"); // Discord.js patched for selfbots
const chalk = require("chalk"); // Color
require("dotenv").config(); // .env

// حسابات متعددة - توكنات من ملف .env أو مصفوفة
const tokens = [process.env.TOKEN1, process.env.TOKEN2, process.env.TOKEN3]; // أضف هنا التوكنات

tokens.forEach(token => {
  const client = new Discord.Client({
    ws: { properties: { $browser: "Discord iOS" } },
  });

  client.on("ready", () => {
    console.clear();
    console.log(chalk.magentaBright`Detected user ${client.user.tag}`);
  });

  client.login(token).catch(err => {
    console.error(chalk.red(`Failed to login with token: ${token}`));
  });
});
