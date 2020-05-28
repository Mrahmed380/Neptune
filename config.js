module.exports = {
  prefix: "t!",
  owner: ["312551747027468290", "209300151485988864"], // your discord id
  color: "#00ffe1",
  emojis: {
    err: {
      id: "🔴",
      full: ":red_circle:",
    },
    success: {
      id: "✅",
      full: ":white_check_mark:",
    },
  },
  persistent: true,
  economy: {
    enabled: true,
  },
  mods: {
    enabled: true,
  },
  welcome: {
    enabled: true,
    channel: "bot-testing-zone",
    accentColor: "#7289DA",
    fontPath: path.resolve(
      __dirname,
      "src",
      "assets",
      "fonts",
      "OpenSans-Regular.ttf"
    ),
  },
  // settings: {
  //   enabled: false,
  //   autoRole: false,
  // },
  // tickets: {
  //   enabled: true,
  // },
  // reactionRoles: {
  //   enabled: true,
  // },
};
