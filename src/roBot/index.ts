import { sendWechatWorkMessage } from "./wechatWork.js";

// 自由发挥可加入其他机器人
export async function sendRoBotMessage(message: string) {
  sendWechatWorkMessage(message);
};