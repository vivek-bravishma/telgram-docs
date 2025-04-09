// All methods in the Bot API are case-insensitive. We support GET and POST HTTP methods. Use either URL query string or application/json or application/x-www-form-urlencoded or multipart/form-data for passing parameters in Bot API requests.
// On successful call, a JSON-object containing the result will be returned.

// A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
export interface getMe {
    // ok: boolean;
    // result: {
    //     id: number;
    //     is_bot: boolean;
    //     first_name: string;
    //     username: string;
    // };
}

// Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
export interface logOut {
    // ok: boolean;
    // result: true;
}


// Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
export interface close {
    // ok: boolean;
    // result: true;
}

// Use this method to send text messages. On success, the sent Message is returned.
export interface sendMessage {
    business_connection_id?: string; //Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number; //Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    text: string; //Text of the message to be sent, 1-4096 characters after entities parsing
    parse_mode?: string; //Mode for parsing entities in the message text. See formatting options for more details. Currently, only HTML and Markdown2 are supported when sending messages in channels.
    entities?: MessageEntity[]; //	A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
    link_preview_options?: LinkPreviewOptions; //Link preview generation options for the message
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean; //Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string; //Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters; //Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user




}




