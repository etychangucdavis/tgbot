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

    const gachas = [0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 50, 50, 50, 100, 100, 200, 200, 500];
    const idx = Math.floor(Math.random() * gachas.length);

    if (gachas[idx] == 0) 
    {
      const text = '0';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true,})
    }
    if (gachas[idx] == 10)
    {
      const text = '10';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }
    if (gachas[idx] == 20)    {
      const text = '10';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }
    if (gachas[idx] == 30)     {
      const text = '30';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }
    if (gachas[idx] == 50)     {
      const text = '50';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }
    if (gachas[idx] == 100)     {
      const text = '100';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }
    if (gachas[idx] == 200)     {
      const text = '200';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }
    if (gachas[idx] == 500)     {
      const text = '500';
      ctx.reply(loc(text, chat.language), {
      disable_notification: true})
    }

})
}
