import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { checkIfAdmin } from '../helpers/checkAdmin'
import { startRaffle } from '../helpers/raffle'
import { findChat } from '../models/chat'
import { loc } from '../helpers/locale'

export function setupSubscribe(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(['carry', 'imsohandsome'], async (ctx) => {
    // Check if admin
    const isAdmin = await checkIfAdmin(ctx)
    if (!isAdmin) return
    // Get chat
    const chat = await findChat(ctx.chat.id)
    // Reply
    var sleep = require('system-sleep');
    ctx.reply('教主在招喚我．．．')
    sleep(1000);
    ctx.replyWithPhoto('https://i.imgur.com/BAC4jWk.png')
    sleep(2000);
    ctx.reply('凱瑞教主萬安！就讓風火輪來幫你抽獎，教主請下令！')
    
}
