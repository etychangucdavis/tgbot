// Dependencies
import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { checkIfAdmin } from '../helpers/checkAdmin'
import { findChat } from '../models/chat'
import { loc } from '../helpers/locale'

/**
 * Setting up the start and help commands
 * @param bot Bot to setup the commands
 */
export function setupStartAndHelp(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(['gacha', 'help'], async (ctx) => {
    // Check if admin
    const isAdmin = await checkIfAdmin(ctx)
    if (!isAdmin) return
    // Get chat
    const chat = await findChat(ctx.chat.id)
    // Reply
    const pick = require('pick-random-weighted');
 
    const pool = [
      ['zero', 30],
      ['ten', 30],
      ['twenty', 30],
      ['thirty', 30],
      ['fifty', 30],
      ['oneh', 20],
      ['twoh', 20],
      ['fiveh', 10],
    ];
    const text = pick(pool);
    ctx.reply(loc(text, chat.language), {
    disable_notification: true,})
  })
}
