import TelegramBot from "node-telegram-bot-api";

const token = "7991213930:AAGjm6JxpExsNaqnI5Kr31HFKsi7S4sb04A";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text || "";
  const chatId = msg.chat.id;
  const firstName = msg.chat.first_name

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${ firstName }`, {
      reply_markup: {
        keyboard: [ 
          [ { text: "Boshlash" } ],
          [{ text: "Menu" }, { text:"Til" }]
        ],
        rezise_keyboard:true,
      }
    });
  } else if (text == "/help") {
    bot.sendMessage(chatId, `Sizga qanday yordam kerak , ${firtsName}?`)
  } else if (text =="/sozlamalar") {
    bot.sendMesseage(chatId,`Bu sozlamalar,${fisrtName}`);
  }else if (text =="Boshlash 👍") {
    bot.sendMessege(chatId, `Boshlayapti....`)
  }else if(text == "menu 🍔") {
    bot.sendMessege(chatId, `Menyuuu..`)
  }else if(text == "Til🌍") {
    bot.sendMessege(chatId,`Tilni tanlang....`)
  }

  console.log("Yangi xabar:", text);
});

console.log("🤖 Bot ishga tushdi...");