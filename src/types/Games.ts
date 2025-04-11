// ============================== Games ==============================

import { InlineKeyboardMarkup, MessageEntity, PhotoSize, ReplyParameters, User } from "./AvailableTypes";

// Your bot can offer users HTML5 games to play solo or to compete against each other in groups and one-on-one chats. Create games via @BotFather using the /newgame command. Please note that this kind of power requires responsibility: you will need to accept the terms for each game that your bots will be offering.
//  - Games are a new type of content on Telegram, represented by the Game and InlineQueryResultGame objects.
//  - Once you've created a game via BotFather, you can send games to chats as regular messages using the sendGame method, or use inline mode with InlineQueryResultGame.
//  - If you send the game message without any buttons, it will automatically have a 'Play GameName' button. When this button is pressed, your bot gets a CallbackQuery with the game_short_name of the requested game. You provide the correct URL for this particular user and the app opens the game in the in-app browser.
//  - You can manually add multiple buttons to your game message. Please note that the first button in the first row must always launch the game, using the field callback_game in InlineKeyboardButton. You can add extra buttons according to taste: e.g., for a description of the rules, or to open the game's official community.
//  - To make your game more attractive, you can upload a GIF animation that demonstrates the game to the users via BotFather (see Lumberjack for example).
//  - A game message will also display high scores for the current chat. Use setGameScore to post high scores to the chat with the game, add the disable_edit_message parameter to disable automatic update of the message with the current scoreboard.
//  - Use getGameHighScores to get data for in-game high score tables.
//  - You can also add an extra sharing button for users to share their best score to different chats.
//  - For examples of what can be done using this new stuff, check the @gamebot and @gamee bots.




// Use this method to send a game. On success, the sent Message is returned.
export interface sendGame {
    business_connection_id?: string;   // Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number;   // Unique identifier for the target chat
    message_thread_id?: number;   // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    game_short_name: string;   // Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
    disable_notification?: boolean;   // Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   // Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   // Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   // Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup;   // A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
}







// This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
export interface Game {
    title: string;   // Title of the game
    description: string;   // ;   // Description of the game
    photo: PhotoSize[];   // ;   // Photo that will be displayed in the game message in chats.
    text?: string;   // Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
    text_entities?: MessageEntity[];   // Special entities that appear in text, such as usernames, URLs, bot commands, etc.
    animation?: Animation;   // Animation that will be displayed in the game message in chats. Upload via BotFather
}


// A placeholder, currently holds no information. Use BotFather to set up your game.
export interface CallbackGame { }




// Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
export interface setGameScore {
    user_id: number;   // User identifier
    score: number;   // New score, must be non-negative
    force?: boolean;   // Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
    disable_edit_message?: boolean;   // Pass True if the game message should not be automatically edited to include the current scoreboard
    chat_id?: number;   // Required if inline_message_id is not specified. Unique identifier for the target chat
    message_id?: number;   // Required if inline_message_id is not specified. Identifier of the sent message
    inline_message_id?: string;   // Required if chat_id and message_id are not specified. Identifier of the inline message
}













// Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
// This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.
export interface getGameHighScores {
    user_id: number;   // Target user id
    chat_id?: number;   // Required if inline_message_id is not specified. Unique identifier for the target chat
    message_id?: number;   // Required if inline_message_id is not specified. Identifier of the sent message
    inline_message_id?: string;   // Required if chat_id and message_id are not specified. Identifier of the inline message
}











// This object represents one row of the high scores table for a game.
export interface GameHighScore {
    position: number;   // Position in high score table for the game
    user: User;   // User
    score: number;   // Score
}











