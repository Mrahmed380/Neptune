module.exports = {
  aliases: ["kick"],
  use: process.conf.prefix + "kick <member>",
  desc: "Kick a member",
  disabled: !(process.conf.mods && process.conf.mods.enabled),
  permissions: ["KICK_MEMBERS"],
};
const { parse, ask } = require("../../utils/utils");
module.exports.run = async (client, message, args) => {
  const target = parse.member(client, message, args);
  if (!target) {
    throw new Error("You need to mention a member to kick!");
  }

  if (target.hasPermission("KICK_MEMBERS")) {
    throw new Error("You can not kick user who can kick other members!");
  }

  ask(message, "What is the reason for kicking?", undefined, (err, res) => {
    if (err) {
      throw new Error("An error occured!", err.message);
    }
    try {
      target
        .kick(res.content)
        .then(() => {
          const embed = new Discord.MessageEmbed()
            .setColor(process.conf.color)
            .setThumbnail(target.user.avatarURL())
            .setTitle("Kicked " + target.displayName)
            .addField("Reason", res.content);
          message.channel.send(embed);
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err) {
      throw new Error(err);
    }
  });
};
