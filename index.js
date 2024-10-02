const TelegramApi = require('node-telegram-bot-api') 

const token = '8171369003:AAGSA33hdyVSVX2sqN1zeO1_trFOpNoistU'

const bot = new TelegramApi(token, {polling: true})

const chats = {}

const {gameOptions, againOptions} = require('./options')

const startGame = async (chatId)=>{
 await bot.sendMessage(chatId, `Cейчас я загадаю цифру от 0 до 9, а ты должен ее угадать`);
 const randomNumber = Math.floor(Math.random() * 10);
 chats.chatId = randomNumber;
 await bot.sendMessage(chatId, 'оТГАДЫВФЙ', gameOptions)
}

const start = ()=> {
 
 bot.setMyCommands([
  {command: '/start', description: 'Начальное приветствие'},
  {command: '/info', description: 'Получть информацию о поьзователье'},
  {command: '/game', description: 'Угадай цифру игра'}
 ])



 // повесим слушатель собитый на обработку полученных сообщений / npm rn dev
 bot.on('message', async msg=> {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === '/start') {
   // await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/3.jpg')
   return bot.sendMessage(chatId, `Дабро Пожаловать`)
  }
  if (text ==='/info') {
   return bot.sendMessage(chatId, `Вась зовут ${msg.from.first_name} ${msg.from.last_name}`)
  }
  if (text ==='/game') {
   return startGame(chatId)
  }
  return bot.sendMessage(chatId, 'Я тебя не понимаю попробуй еще раз!')
 })

 bot.on('callback_query', async msg => {
  const data = msg.data;
  const chatId = msg.message.chat.id;
  if (data == '/again') {
   return startGame(chatId)
  }
  if (data === chats.chatId) {
   return  bot.sendMessage(chatId, `Поздравляю ты отгадал цифру ${chats.chatId}`, againOptions)
  } else {
   return  bot.sendMessage(chatId, `К сожалению ты не угадал, бот загадывал цифру ${chats.chatId}`, againOptions)
  }
  bot.sendMessage(chatId, `Ты выбрал цифру ${data}`)
  console.log(msg);
  
 })
}
start()


