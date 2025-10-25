import TelegramBot from "node-telegram-bot-api";

const token = "7991213930:AAGjm6JxpExsNaqnI5Kr31HFKsi7S4sb04A";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text || "";
  const chatId = msg.chat.id;

  console.log("Yangi xabar:", text);
  bot.sendMessage(chatId, `--> ${text}`);
});

console.log("🤖 Bot ishga tushdi...");
