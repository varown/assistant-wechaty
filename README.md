<h1 align="center">欢迎使用 assistant-wechaty</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> 在微信上迅速接入 ChatGPT，让它成为你最好的助手！  
> 中文文档 | [English](README_EN.md)

## 🌟 功能点

- [x] 通过 [wechaty](https://github.com/varown/assistant-wechaty.git) 和 [官方 API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)，将 ChatGPT 接入微信
- [x] 加入了持续对话的功能
- [x] 支持科学上网，env 配置 `Proxy` 即可
- [x] 加入 Dockerfile, 通过 [Docker](#通过docker使用-推荐) 进行部署
- [x] 使用[docker compose](#通过docker-compose使用-推荐)进行部署

## 🚀 使用

- [使用 Docker Compose 部署](#通过docker-compose使用)(自托管, 稳定, ✅ 推荐)
- [使用 NodeJS 部署](#使用nodejs运行)

> 如何获取 OPENAI API KEY？请参考 [OpenAI API](https://platform.openai.com/account/api-keys)。

## 通过 docker compose 使用

```sh
# 根据模板拷贝配置文件 或者直接修改.env.example为.env
cp .env.example .env
# 使用你喜欢的文本编辑器修改配置文件
vim .env
# 在Linux或WindowsPowerShell上运行如下命令
docker compose up -d
# 使用二维码登陆
docker logs -f assistant-wechaty
```

## 使用 NodeJS 运行

> 请确认安装的 NodeJS 版本为 18.0.0 以上

```sh
# 克隆项目
git clone https://github.com/varown/assistant-wechaty.git && cd assistant-wechaty
# 安装依赖
npm install
# 编辑配置
cp .env.example .env
vim .env # 使用你喜欢的文本编辑器修改配置文件
# 启动项目
npm run dev
# 如果您是初次登陆，那么需要扫描二维码
```

> 请确保您的账号可以登陆 [网页版微信](https://wx.qq.com/)。

## 🤝 为项目添砖加瓦

欢迎提出 Contributions, issues 与 feature requests!<br />随时查看 [issues page](https://github.com/varown/assistant-wechaty/issues).

## 感谢支持 🙏

如果这个项目对你产生了一点的帮助，请为这个项目点上一颗 ⭐️
