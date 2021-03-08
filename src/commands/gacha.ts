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

    const pick = require('pick-random-weighted');
 
    const pool = [
      ['0', 30],
      ['10', 30],
      ['20', 30],
      ['30', 30],
      ['50', 30],
      ['100', 20],
      ['200', 20],
      ['500', 10],
    ];
    const text = pick(pool);
    ctx.reply(loc('500', chat.language), {
    disable_notification: true,})

})
}
