// Dependencies
import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { checkIfAdmin } from '../helpers/checkAdmin'
import { findChat } from '../models/chat'
import { loc } from '../helpers/locale'


export function setupGacha(bot: Telegraf<ContextMessageUpdate>) {
  bot.command('gacha', async (ctx) => {
    // Check if admin
    const isAdmin = await checkIfAdmin(ctx)
    if (!isAdmin) return
    // Get chat
    const chat = await findChat(ctx.chat.id)

    var gachas = [0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 50, 50, 50, 100, 100, 200, 200, 500];
    var idx = Math.floor(Math.random() * notRandomNumbers.length);
    var text = ""

    if (gachas[idx] == 0) text = '殘念! 槓龜!'
    if (gachas[idx] == 10) text = '這次抽到的彩蛋是 10倍 !'
    if (gachas[idx] == 20) text = '這次抽到的彩蛋是 20倍 !'
    if (gachas[idx] == 30) text = '這次抽到的彩蛋是 30倍 !'
    if (gachas[idx] == 50) text = '這次抽到的彩蛋是 50倍 !'
    if (gachas[idx] == 100) text = '這次抽到的彩蛋是 100倍 !'
    if (gachas[idx] == 200) text = '這次抽到的彩蛋是 200倍 !'
    if (gachas[idx] == 500) text = '這次抽到的彩蛋是破天荒的 500倍 ! 佛心教主凱瑞!'

    // Reply
    ctx.replyWithMarkdown(text, {
      disable_notification: true,
      disable_web_page_preview: true,
    })

  })
}
