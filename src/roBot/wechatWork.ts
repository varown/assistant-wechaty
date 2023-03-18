import axios from "axios";
import { WEWORK_BOT_KEY } from "../config.js";

// 企业微信机器人配置

const weWorkBotKey = process.env.WEWORK_BOT_KEY || WEWORK_BOT_KEY

export async function sendWechatWorkMessage(message: any) {
  const response = await axios.post(`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${weWorkBotKey}`, {
    msgtype: 'text',
    text: {
      content: message
    }
  });
  if (response.data.errcode === 0) {
    console.log('企业微信通知发送成功！');
  } else {
    console.error('企业微信通知发送失败：', response.data.errmsg);
  }
};
