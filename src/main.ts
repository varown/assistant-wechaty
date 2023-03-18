import { WechatyBuilder } from 'wechaty'
import QRCode from 'qrcode'


const name = 'puppet-wechat'
export const bot = WechatyBuilder.build({
  name,
  puppet: 'wechaty-puppet-wechat',
  puppetOptions: {
    uos: true  // 开启uos协议
  },
})

bot
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login', user => { })
  .on('message', message => console.log(`Message: ${message}`))
bot.start()