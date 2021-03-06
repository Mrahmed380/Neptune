module.exports = {
  aliases: ["leaderboard", "lb"],
  use: process.conf.prefix + "leaderboard",
  desc: "View the leaderboard of your guild and your position",
  disabled: !(process.conf.economy && process.conf.economy.enabled),
};
const { parse } = require("../../utils");
module.exports.run = async (client, message, args) => {
  const target = parse.member(client, message, args) || message.member;
  var members = [];
  message.guild.members.cache.forEach((x) => {
    if (x.user.bot) return;
    const E = Plugins.economy.init(x, message.guild);
    members.push(E);
  });
  members = members.sort((a, b) => a.position() - b.position());
  const targetE = members.find((x) => x.member.id == message.author.id);
  members = members.slice(0, 9);
  message.channel.send(`\`\`\`py
@ Leaderboard of ${message.guild.name}

${members
  .map(
    (x) =>
      `${x.position()}. ${x.member.displayName}\n   ${x.balance()}${
        process.conf.economy.currency
      }`
  )
  .join("\n")}

@ ${targetE.position()}. ${target.displayName} - ${
    targetE.balance() + process.conf.economy.currency
  } @\`\`\`
  `);
};
