🖍️Building a basic Telegram bot using the node-telegram-bot-api library. The bot includes several 
functionalities, such as welcoming the user, providing basic info, and a number guessing game. Here’s a breakdown of what you've done and how it works:

## 1. Project Setup
🔶1]You initialized the project using npm init -y.
🔶1.2]Installed the necessary packages:
🔸1.2.1]node-telegram-bot-api: For interfacing with the Telegram Bot API.
🔸1.2.2]nodemon: For live reloading during development.

## 2. Bot Functionality

🔶2]Main Commands:
🔸2.1]/start: Sends a welcome message.
🔸2.2]/info: Provides the user's first and last name.
🔸2.3]game: Starts a number guessing game where the bot selects a random number between 0 and 9, and the user has to guess it.

🔶2.2]Message Handling
🔸2.2.1]Your bot listens for messages using bot.on('message', ...). When users send a command like /start, /info, or /game, the bot responds accordingly.
🔸2.2.3]If the message doesn't match any commands, the bot sends a fallback message: "Я тебя не понимаю попробуй еще раз!".

## 3. Number Guessing Game
🔸3.1]When the /game command is triggered, the bot generates a random number and asks the user to guess it.
🔸3.2]The game interface is created using an inline keyboard with buttons for numbers 0-9. This is implemented in the options.js file, which defines the gameOptions (for guessing) and againOptions (for retrying the game).

## 4. Handling User Guesses
🔶4]The bot listens for inline keyboard button clicks using bot.on('callback_query', ...).
🔶4.2]When the user clicks a button (representing their guess), the bot compares the selected number (callback data) with the randomly generated number stored in chats.chatId.
🔸4.2.1]If the user guesses correctly, the bot sends a success message with the option to play again.
🔸4.1.2]If the guess is incorrect, it informs the user of the correct answer and provides the option to retry.

## 5. Project Structure
🔸5.1]index.js: Main bot logic, including command handling and game functionality.
🔸5.2]options.js: Contains the inline keyboard options for the game and the "play again" button.


## Key Improvements and Details
💠Random Number Storage: The random number is stored in chats.chatId, but it should use chats[chatId] instead of chats.chatId, to allow multiple users to play the game independently.
💠Commands and Callback Handling: You've separated commands and callbacks effectively, but you can further modularize the bot by moving repeated logic into functions to keep index.js clean.

## Key Improvements and Details
💠Random Number Storage: The random number is stored in chats.chatId, but it should use chats[chatId] instead of chats.chatId, to allow multiple users to play the game independently.
💠Commands and Callback Handling: You've separated commands and callbacks effectively, but you can further modularize the bot by moving repeated logic into functions to keep index.js clean.

-----------------------------

Free hosting - https://www.pella.app/





