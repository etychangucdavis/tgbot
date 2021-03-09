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
  bot.command(['gacha', 'open'], async (ctx) => {
    // Check if admin
    const isAdmin = await checkIfAdmin(ctx)
    if (!isAdmin) return
    // Get chat
    const chat = await findChat(ctx.chat.id)
    // Reply
    const pick = require('pick-random-weighted');
 
    const pool = [
      ['2800', 1],
      ['1400', 1],
      ['700', 10],
      ['350', 10],
      ['140', 20],
      ['70', 20],
      ['0', 38],
    ];
    const text = pick(pool);
    ctx.reply(loc(text, chat.language), {
    disable_notification: true,})
  })
}
