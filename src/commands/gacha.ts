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
    var idx = Math.floor(Math.random() * gachas.length);
    var text = '';

    if (gachas[idx] == 0) text = '0';
    if (gachas[idx] == 10) text = '10';
    if (gachas[idx] == 20) text = '20';
    if (gachas[idx] == 30) text = '30';
    if (gachas[idx] == 50) text = '50';
    if (gachas[idx] == 100) text = '100';
    if (gachas[idx] == 200) text = '200';
    if (gachas[idx] == 500) text = '500';

    // Reply
    ctx.reply(loc(text, chat.language), {
      disable_notification: true,
    })

  })
}
