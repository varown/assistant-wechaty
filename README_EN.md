<h1 align="center">Welcome to assistant-wechaty</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Use ChatGPT On Wechat via wechaty
> [中文文档](README.md) | English

## 🌟 Feature

- [x] Use ChatGPT on WeChat with [wechaty](https://github.com/varown/assistant-wechaty.git)
      and [Official API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)
- [x] Add conversation Support
- [x] Add Dockerfile, you can use it with [docker](#use-with-docker---recommended-)
- [x] Deploy using [docker compose](#use-with-docker-compose---recommended-)

## 🚀 Usage

- [Use with docker compose](#use-with-docker-compose)(Self-hosted, Stable, ✅Recommended)
- [Use with nodejs](#use-with-nodejs)(Self-hosted)

## Use with docker compose

```sh
# Copy the configuration file according to the template
cp .env.example .env
# Edit the configuration file
vim .env
# Start the container
docker-compose up -d
# View the QR code to log in to wechat
docker logs -f assistant-wechaty
```

## Use with nodejs

> You need NodeJS 18.0.0 version and above

```sh
# Clone the project
https://github.com/varown/assistant-wechaty.git && cd assistant-wechaty
# Install dependencies
npm install
# Copy the configuration file according to the template
cp .env.example .env
# Edit the configuration file
vim .env
# Start project
npm run dev
```

> Please make sure your WeChat account can log in [WeChat on web](https://wx.qq.com/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to
check [issues page](https://github.com/varown/assistant-wechaty/issues).

## Show your support

Give a ⭐️ if this project helped you!
