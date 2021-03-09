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
      ['2800', 2],
      ['1400', 2],
      ['700', 60],
      ['350', 100],
      ['140', 220],
      ['70', 220],
      ['0', 380],
    ];
    const text = pick(pool);
    ctx.reply(loc(text, chat.language), {
    disable_notification: true,})
    if(text=='0')
        ctx.replyWithPhoto('https://i.imgur.com/wBLIQbh.png');
    else if(text=='70')
        ctx.replyWithPhoto('https://i.imgur.com/k9JHGJE.png');
    else{
        ctx.replyWithPhoto('https://i.imgur.com/uJiDKVQ.png');}
  })
}
