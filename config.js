module.exports = {
  prefix: "t!",
  owner: ["312551747027468290", "209300151485988864"], // your discord id
  color: "#00ffe1",
  // full: true,
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
  shard: {
    enabled: true,
  },
  persistent: true,
  economy: {
    enabled: true,
  },
  mods: {
    enabled: true,
  },
  website: {
    enabled: true,
    status: true,
  },
  //   port: 8080,
  //   status: true,
  // routes: [
  //   {
  //     route: "/",
  //     handler: "./src/webhooks/home.js",
  //   },
  //   {
  //     route: "/announce",
  //     handler: "./src/webhooks/announce.js",
  //   },
  // ],
  // },
  // email: {
  //   enabled: false,
  //   username: process.env.EMAIL_USERNAME,
  //   password: process.env.EMAIL_PASSWORD,
  //   service: "gmail",
  //   role: {
  //     data: {
  //       name: "Verified",
  //     },
  //   },
  // },
  webhooks: {
    enabled: true,
    paths: [
      {
        icon: "https://dancodes.online/assets/images/me.png",
        name: "Test",
        path: "test",
        map: `New test from {{name}}`,
        debug: true,
        secret: {
          key: "123", // should be replaced with a .env for production
        },
        channel: "596047625736814614",
        // Post/Get request to /webhooks/test with body/query: { name: "DanCodes", key: "123" }
      },
    ],
  },
  // translate: {
  //   enabled: true,
  // },
  // music: {
  //   enabled: true,
  // },
  settings: {
    enabled: true,
    autoRole: true,
  },
  tickets: {
    enabled: true,
  },
  reactionRoles: {
    enabled: true,
  },
};
