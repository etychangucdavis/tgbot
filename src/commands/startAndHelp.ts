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
    var sleep = require('sleep');
    const pool = [
      ['2800', 2],
      ['1400', 5],
      ['700', 60],
      ['350', 103],
      ['140', 220],
      ['70', 220],
      ['1', 125],
      ['2', 125],
      ['3', 125],
    ];
    
    
    ctx.replyWithPhoto('https://i1.kknews.cc/SIG=k5e5i6/ctp-vzntr/or085o99q6sr466qn4p6ns46p40qq246.jpg');
    ctx.reply('各位觀眾！\n這次福袋裡面的獎品是．．．')
    sleep.sleep(4);
    
    const text = pick(pool);
    ctx.reply(loc(text, chat.language), {
    disable_notification: true,})
    if(text=='1')
        ctx.replyWithPhoto('https://i.imgur.com/wBLIQbh.png');
    else if(text=='2')
        ctx.replyWithPhoto('https://i.imgur.com/ak6avk8.png');
    else if(text=='3')
        ctx.replyWithPhoto('https://i.imgur.com/Y9z8sk3.png');
    else if(text=='140')
        ctx.replyWithPhoto('https://i.imgur.com/yIAUcO2.png');
    else if(text=='350')
        ctx.replyWithPhoto('https://i.imgur.com/NK4KJxP.png');
    else if(text=='700')
        ctx.replyWithPhoto('https://i.imgur.com/An79mpF.png');
    else if(text=='1400')
        ctx.replyWithPhoto('https://i.imgur.com/ZkkAjXB.jpg');
     else if(text=='2800')
        ctx.replyWithPhoto('https://i.imgur.com/qXMoSrE.png');
    else if(text=='70')
        ctx.replyWithPhoto('https://i.imgur.com/k9JHGJE.png');
    else{
        ctx.replyWithPhoto('https://i.imgur.com/uJiDKVQ.png');}
  })
}
