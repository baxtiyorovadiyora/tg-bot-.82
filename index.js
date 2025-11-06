import TelegramBot from "node-telegram-bot-api";

const TOKEN = '7991213930:AAGjm6JxpExsNaqnI5Kr31HFKsi7S4sb04A';;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;
  console.log(msg);

  if (text == "/start") {
    bot.sendMessage(chatId, ` Xush kelibsiz, ${firstName}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🍔" }, { text: "Til 🌎" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "/help") {
    bot.sendMessage(chatId, ` Sizga qanday yordam kerak, ${firstName}?`);
  } else if (text == "/sozlamalar") {
    bot.sendMessage(chatId, ` Bu sozlamalar, ${firstName}`);
  } else if (text == "Boshlash 🔥") {
    const xabar = await bot.sendMessage(chatId, `Iltimos, kuting...`);

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);

      bot.sendPhoto(chatId, "./images/8.2.jpg", {
        caption: `Hello World — bu boshlanish.  
               Keyingi qadam — sening koding!`,
      reply_markup:{
        inline_keyboard: [
          [
            {text: "Rasmlar", callback_data :"phots"},
            {text:"Ma'lumot" , callback_data:"info"},
          ],
          [{text:"Sotib olish",callback_data:"buy"}

          ]
        ],
      }
      });

      console.log("3 sekund kechiktirildi");
    }, 1 * 1000);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, ` Menyuuuuu...`);
  } else if (text == "Til 🌎") {
    bot.sendMessage(chatId, ` Tilni tanlang...`);
  }
});

console.log("Bot ishga tushdi...");

'7991213930:AAGjm6JxpExsNaqnI5Kr31HFKsi7S4sb04A';