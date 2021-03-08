export function loc(text: string, language: string) {
  return localizations[text][language] || localizations[text].en
}

export const localizations: { [index: string]: { [index: string]: string } } = {
  public_help_start: {
    ru:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10 得獎人數設定成10人)",    
	en:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10得獎人數設定成10人)",
    pt:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10 得獎人數設定成10人)",
    tr:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10 得獎人數設定成10人)",
    uk:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10 得獎人數設定成10人)",
    ar:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10 得獎人數設定成10人)",
    es:
	  "使用/draw指令開始抽獎。/number可以修改得獎人數(如/draw 10 得獎人數設定成10人)",
  },
  no_work_private: {
    ru: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
    en: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
    pt: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
    tr: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
    uk: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
    ar: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
    es: '群組裡面才能用啦，這裡只有你是要抽三小朋友。',
  },
  select_language: {
    ru: 'Пожалуйста, выберите язык',
    en: 'Please, select the language',
    pt: 'Por favor, escolha o idioma',
    tr: 'Lütfen dilinizi seçiniz',
    uk: 'Будь ласка, оберіть мову',
    ar: 'الرجاء تحديد اللغة',
    es: 'Selecciones el lenguaje',
  },
  language_selected_randy: {
    ru: 'Спасибо, теперь я говорю по-русски!',
    en: 'Thank you! Now I speak English',
    pt: 'Obrigado! Agora eu falarei português',
    tr: 'Teşekkürler! Artık Türkçe konuşuyorum',
    uk: 'Дякую, тепер я говорю українською!',
    ar: 'شكرا! الآن أنا أتكلم العربية',
    es: 'Gracias! Ahora hablo Español',
  },
  raffle_text: {
    ru:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    en:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    pt:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    tr:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    uk:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    ar:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    es:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
  },
  raffle_text_multiple: {
    ru:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    en:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    pt:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    tr:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    uk:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    ar:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
    es:
      '教主下令啟動抽獎機! 按下按鈕即可參加，當管理員回覆這則信息時就會抽出得獎者!',
  },
  please_retry: {
    ru: '請稍後幾分鐘再試',
    en: '請稍後幾分鐘再試',
    pt: '請稍後幾分鐘再試',
    tr: '請稍後幾分鐘再試',
    uk: '請稍後幾分鐘再試',
    ar: '請稍後幾分鐘再試',
    es: '請稍後幾分鐘再試',
  },
  already_participating: {
    ru: '你已經加入抽獎了!',
    en: '你已經加入抽獎了!',
    pt: '你已經加入抽獎了!',
    tr: '你已經加入抽獎了!',
    uk: '你已經加入抽獎了!',
    ar: '你已經加入抽獎了!',
    es: '你已經加入抽獎了!',
  },
  participated: {
    ru: '你已經加入抽獎了!',
    en: '你已經加入抽獎了!',
    pt: '你已經加入抽獎了!',
    tr: '你已經加入抽獎了!',
    uk: '你已經加入抽獎了!',
    ar: '你已經加入抽獎了!',
    es: '你已經加入抽獎了!',
  },
  participants_number: {
    ru: '參加者數量',
    en: '參加者數量',
    pt: '參加者數量',
    tr: '參加者數量',
    uk: '參加者數量',
    ar: '參加者數量',
    es: '參加者數量',
  },
  participate_button: {
    ru: '參加!',
    en: '參加!',
    pt: '參加!',
    tr: '參加!',
    uk: '參加!',
    ar: '參加!',
    es: '參加!',
  },
  no_participants: {
    ru: '目前沒有參加者',
    en: '目前沒有參加者',
    pt: '目前沒有參加者',
    tr: '目前沒有參加者',
    uk: '目前沒有參加者',
    ar: '目前沒有參加者',
    es: '目前沒有參加者',
  },
  winner: {
    ru: '得獎者是',
    en: '得獎者是',
    pt: '得獎者是',
    tr: '得獎者是',
    uk: '得獎者是',
    ar: '得獎者是',
    es: '得獎者是',
  },
  winners: {
    ru: '得獎的有',
    en: '得獎的有',
    pt: '得獎的有',
    tr: '得獎的有',
    uk: '得獎的有',
    ar: '得獎的有',
    es: '得獎的有',
  },
  congratulations: {
    ru: 'Congratulations',
    en: 'Congratulations',
    pt: 'Congratulations',
    tr: 'Congratulations',
    uk: 'Congratulations',
    ar: 'Congratulations',
    es: 'Congratulations',
  },
  raffle_over: {
    ru: '抱歉，本次抽獎已結束',
    en: '抱歉，本次抽獎已結束',
    pt: '抱歉，本次抽獎已結束',
    tr: '抱歉，本次抽獎已結束',
    uk: '抱歉，本次抽獎已結束',
    ar: '抱歉，本次抽獎已結束',
    es: '抱歉，本次抽獎已結束',
  },
  select_number: {
    ru: 'Пожалуйста, выберите, сколько победителей должно быть в розыгрыше',
    en: 'Please, select number of winners for a raffle',
    pt: 'Por favor selecione o número de ganhadores do sorteio',
    tr: 'Lütfen çekiliş için kazanacak kişi sayısını seçiniz',
    uk: 'Будь ласка, виберіть, скільки переможців має бути в розіграші',
    ar: 'من فضلك، اختر عدد الفائزين للسحب',
    es: 'Por favor, seleccione el número de ganadores para el sorteo',
  },
  number_selected: {
    ru: 'Отлично, вы выбрали количество победителей!',
    en: "成功設定得獎者人數!",
    pt: 'Ótimo! Você selecionou o número de ganhadores!',
    tr: 'Harika! Kazanacak kişi sayısını belirledin!',
    uk: 'Чудово, ви вибрали кількість переможців!',
    ar: 'رائع ! لقد اخترت عدد الفائزين!',
    es: '¡Excelente! ¡Has seleccionado el número de ganadores!',
  },
  not_enough_participants: {
    ru: '目前參加者數量不足',
    en: '目前參加者數量不足',
    pt: '目前參加者數量不足',
    tr: '目前參加者數量不足',
    uk: '目前參加者數量不足',
    ar: '目前參加者數量不足',
    es: '目前參加者數量不足',
  },
  subscribe_format: {
    ru:
      'Пожалуйста, укажите хендл канала, на который надо проверять подписку, в формате `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    en:
      'Please, set the channel to check subscription to with the format `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    tr:
      'Lütfen, aboneliğini kontrol ettirmek istediğiniz kanalı/kanalları şu formatta belirleyiniz: `/subscribe @kameraonu`, `/subscribe @kanal_adi, @baska_kanal, @ve_baskabir_kanal`.',
    es:
      'Por favor, configure el canal para verificar la suscripción con el formato `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
  },
  nosubscribe_success: {
    ru: 'I will not check subscription.',
    en: 'I will not check subscription.',
    tr: 'I will not check subscription.',
    es: 'I will not check subscription.',
  },
  bot_not_admin: {
    ru: 'Please make @carryericbot an admin in this chat.',
    en: 'Please make @carryericbot an admin in this chat.',
    tr: 'Please make @carryericbot an admin in this chat.',
    es: 'Please make @carryericbot an admin in this chat.',
  },
  bot_not_admin_chat: {
    en: 'Please make @carryericbot an admin in this chat.',
    tr: 'Please make @carryericbot an admin in this chat.',
    es: 'Please make @carryericbot an admin in this chat.',
    ru: 'Please make @carryericbot an admin in this chat.',
  },
  subscribe_success: {
    ru:
      'Отлично, теперь бот будет проверять подписку пользователя на следующий канал перед разрешением участвовать в конкурсе: ',
    en:
      'Great, now bot will check if the participant is subscribed to the following channel before allowing to participate: ',
    tr:
      'Harika! şimdi bot, katılımcının çekilişe katılmasına izin vermeden önce aşağıdaki kanala abone olup olmadığını kontrol edecek:',
    es:
      'Genial, ahora el bot verificará si el participante está suscrito al siguiente canal antes de permitir participar:',
  },
  check_subscription: {
    ru: 'Вы должны быть подписаны на ',
    en: 'You should be subscribed to ',
    tr: 'Abone olmalısınız ',
    es: 'Deberías estar suscrito',
  },
  raffle_message: {
    en:
      'Reply to this message to setup a custom raffle message. Make sure to reply to this message (we hope everyone knows what the word "reply" means by now). Make sure to include "$numberOfParticipants" without quotation marks in your message — it won\'t work without it. Cheers! 💪 The current raffle message (if set) is below.',
    tr:
      'Özel bir çekiliş mesajı ayarlamak için bu iletiyi yanıtlayın. Bu iletiyi yanıtladığınızdan emin olun (umarız herkes "yanıt" kelimesinin ne anlama geldiğini biliyordur). İletinizde tırnak işaretleri olmadan "$numberOfParticipants" mesajının geçtiğinden emin olun — onsuz çalışmaz. Kapiş! 💪 Geçerli çekiliş mesajı (ayarlanmışsa) aşağıdadır:',
    es:
      'Responda a este mensaje para configurar un mensaje de rifa personalizado. Asegúrese de responder a este mensaje (esperamos que todos sepan lo que significa la palabra "responder" en este momento). Asegúrese de incluir "$ numberOfParticipants" sin comillas en su mensaje; no funcionará sin él. ¡Saludos! 💪 El mensaje de la rifa actual (si está configurado) está debajo.',
    ru:
      'Ответьте на это сообщение, чтобы установить новое сообщение розыгрыша. Именно ответьте (надеемся, что все понимают разницу между обычным сообщением и ответом). Обязательно используйте "$numberOfParticipants" без кавычек в сообщении — иначе установка не сработает. Удачи! 💪 Текущее сообщение (если оно установленно), приведено ниже.',
  },
  raffle_message_off: {
    ru: 'Will use standard raffle message now.',
    en: 'Will use standard raffle message now.',
    tr: 'Will use standard raffle message now.',
    es: 'Will use standard raffle message now.',
  },
  winner_message: {
    en:
      'Reply to this message to setup a custom winner message. Make sure to reply to this message (we hope everyone knows what the word "reply" means by now). Make sure to include "$numberOfParticipants" and "$winner" without quotation marks in your message — it won\'t work without it. Cheers! 🎉 The current winner message (if set) is below.',
    tr:
      'Özel bir kazanan mesajı ayarlamak için bu iletiyi yanıtlayın. Bu iletiyi yanıtladığınızdan emin olun (umarız herkes "yanıt" kelimesinin ne anlama geldiğini biliyordur). İletinizde tırnak işaretleri olmadan  "$numberOfParticipants" ve "$winner" mesajının geçtiğinden emin olun —  onlarsız çalışmaz. Kapiş! 🎉 Geçerli kazanan mesajı (ayarlanmışsa) aşağıdadır:',
    es:
      'Responda a este mensaje para configurar un mensaje de ganador personalizado. Asegúrese de responder a este mensaje (esperamos que todos sepan lo que significa la palabra "responder" en este momento). Asegúrese de incluir "$ numberOfParticipants" y "$ ganador" sin comillas en su mensaje; no funcionará sin él. ¡Saludos! 🎉 El mensaje del ganador actual (si está configurado) está debajo.',
    ru:
      'Ответьте на это сообщение, чтобы установить новое сообщение о победе. Именно ответьте (надеемся, что все понимают разницу между обычным сообщением и ответом). Обязательно используйте "$numberOfParticipants" и "$winner" без кавычек в сообщении — иначе установка не сработает. Удачи! 🎉 Текущее сообщение (если оно установленно), приведено ниже.',
  },
  winner_message_off: {
    ru: 'Теперь Ренди будет использовать стандартное сообщение о победе.',
    en: 'Randy will use standard winner message now.',
    tr: 'Randy, artık varsayılan kazanan mesajını kullanacak.',
    es: 'Randy usará el mensaje estándar del ganador ahora.',
  },
  success: {
    ru: 'Успех!',
    en: 'Success!',
    tr: 'Başarılı!',
    es: '¡Logrado!',
  },
  nodelete_true: {
    ru: 'Now not edit (delete) original message.',
    en: 'Now not edit (delete) original message.',
    es: 'Now not edit (delete) original message.',
    tr: 'Now not edit (delete) original message.',
  },
  nodelete_false: {
    ru: 'Now will edit (delete) original message.',
    en: 'Now will edit (delete) original message.',
    es: 'Now will edit (delete) original message.',
    tr: 'Now will edit (delete) original message.',
  },
  mustBeAnAdmin: {
    en: '你必須是管理員',
    ru: '你必須是管理員',
  },
  config_raffle_instructions: {
    en:
      'Success! Now select the chat or the channel you want to configure with /configRaffle',
    ru:
      'Успех! Теперь выберите канал или чат, который хотите настроить, при помощи команды /configRaffle',
  },
  config_raffle_no_chats: {
    en:
      'First, forward me a message from a channel or a chat you want to configure',
    ru:
      'Сначала перешлите мне форвард сообщения из чата или канала, который хотите настроить',
  },
  select_chat: {
    en: 'Select a chat or a channel to configure',
    ru: 'Выберите чат или канал, который хотите настроить',
  },
  private_messages: {
    en: 'Private messages',
    ru: 'Приватные сообщения',
  },
  now_editing_this_chat: {
    en: 'Great! Now you are editting the config of this chat',
    ru: 'Отлично! Теперь вы редактируете настройки этого чата',
  },
}
