import { Client } from "undici";
import { WEWORK_BOT_KEY } from "../config.js";
// 企业微信机器人配置
const weWorkBotKey = process.env.WEWORK_BOT_KEY || WEWORK_BOT_KEY


export async function sendWechatWorkMessage(message: any) {
  const client = new Client('https://qyapi.weixin.qq.com');

  try {
    const { statusCode, body } = await client.request({
      path: `/cgi-bin/webhook/send?key=${weWorkBotKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        msgtype: 'text',
        text: {
          content: message
        }
      }),
    });

    const response = JSON.parse(await body.text());

    if (statusCode === 200 && response.errcode === 0) {
      console.log('企业微信通知发送成功！');
    } else {
      console.error('企业微信通知发送失败：', response.errmsg);
    }
  } finally {
    await client.close();
  }
};
