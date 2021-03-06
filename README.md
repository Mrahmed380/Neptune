# Neptune

> A template for a discord bot written with discordjs with reloadable events and commands along with a multitude of plugins

[![Discordjs Version][discordjs-image]][discordjs-url]
![Discord-Bot languages](https://img.shields.io/github/languages/count/dan-online/discord-bot)
![Discord-bot version](https://img.shields.io/github/package-json/v/dan-online/discord-bot)
![Neptune CI](https://github.com/dan-online/Neptune/workflows/Neptune%20CI/badge.svg)

## Downloads

The master branch is unstable and should be used with caution.

To use stable releases go to [releases](../../releases)

## To-do

- ~Economy / points system plugin~
- ~Webhook plugin~
- API plugin
- Updater plugin/system
- Points system
- ~Translate~
- Welcome/Leave messages (image jimp)
- ~Verification system (email/oauth)~
- ~Status page~
- Monitoring app
- CLI init

## Installation

Make sure to have FFmpeg/avconv installed for the youtube plugin

#### .env

```env
TOKEN=DISCORD_BOT_TOKEN
YANDEX_TOKEN=YANDEX_TOKEN (only if translation API is enabled)
```

#### Config

```js
module.exports = {
  prefix: "t!", // bot prefix
  owner: "312551747027468290", // your id
  emojis: {
    // emojis for success and errors
    err: {
      full: ":red_circle:",
      id: ":red_circle:",
    },
    success: {
      id: ":white_check_mark:",
      full: ":white_check_mark:",
    },
  },
  persistent: false, // persistent database or in memory database
};
```

#### Install

```sh
$ yarn
$ npm
```

## Usage example

```sh
$ yarn start
$ npm start
```

## Meta

DanCodes – [@dan-online](https://github.com/dan-online) – dan@dancodes.online

Distributed under the MIT license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/dan-online/discord-bot/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[discordjs-image]: https://img.shields.io/npm/v/discord.js?color=%232196f3&label=discord.js
[discordjs-url]: https://discord.js.org
