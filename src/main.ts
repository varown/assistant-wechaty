import { WechatyBuilder } from 'wechaty'
import QRCode from 'qrcode'
import { ChatGPTBot } from "./chatGPT/index.js";

const chatGPTBot = new ChatGPTBot();
const name = 'assistant-wechat'

export const bot = WechatyBuilder.build({
  name,
  puppet: 'wechaty-puppet-wechat',
  puppetOptions: {
    uos: true  // 开启uos协议
  },
})

const main = async () => {
  const initializedAt = Date.now()
  bot
    .on('scan', async (qrcode, status) => {
      const url = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`
      console.log(`Scan QR Code to login: ${status}\n${url}`)
      const qrImage = await QRCode.toString(url, { type: 'terminal', small: true });
      console.log(qrImage)
    })
    .on('login', async (user) => {
      console.log(`User ${user} logged in`);
      chatGPTBot.setBotName(user.name());
    })
    .on('message', async (message) => {
      if (message.date().getTime() < initializedAt) {
        return;
      }
      if (message.text().startsWith("/ping")) {
        await message.say("pong");
        return;
      }
      try {
        await chatGPTBot.onMessage(message);
      } catch (e) {
        console.error(e);
      }
    })
  try {
    await bot.start()
  } catch (e) {
    console.error(`Failed to start bot: ${e}`)
  }
};
main();
