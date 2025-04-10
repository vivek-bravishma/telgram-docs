// ===== all available methods along with is parameter, parameter type, required or not and description. =====

import { ChatPermissions, ForceReply, InlineKeyboardMarkup, InputFile, InputMediaAudio, InputMediaDocument, InputMediaPhoto, InputMediaVideo, InputPaidMedia, InputPollOption, LinkPreviewOptions, MessageEntity, ReactionType, ReplyKeyboardMarkup, ReplyKeyboardRemove, ReplyParameters } from "./AvailableTypes";

// All methods in the Bot API are case-insensitive. We support GET and POST HTTP methods. Use either URL query string or application/json or application/x-www-form-urlencoded or multipart/form-data for passing parameters in Bot API requests.
// On successful call, a JSON-object containing the result will be returned.

// A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
export interface getMe {
}

// Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
export interface logOut {
}


// Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
export interface close {
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




// Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.
export interface forwardMessage {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number; //Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string; //Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
    video_start_timestamp?: number;  //New start timestamp for the forwarded video in the message
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the forwarded message from forwarding and saving
    message_id: number; //Message identifier in the chat specified in from_chat_id
}


// Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
export interface forwardMessages {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number; //Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string; //Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
    message_ids: number[]; //A JSON-serialized list of 1-100 identifiers of 1-100 messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
    disable_notification?: boolean; //Sends the messages silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the forwarded messages from forwarding and saving
}



// Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
export interface copyMessage {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number; //Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string; //Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
    message_id: number; //Message identifier in the chat specified in from_chat_id
    video_start_timestamp?: number;  //New start timestamp for the forwarded video in the message
    caption?: string;   //New caption for media, 0-1024 characters after entities parsing
    parse_mode?: string;    //Mode for parsing entities in the new caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the forwarded message from forwarding and saving
    allow_paid_broadcast?: boolean; //Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    reply_parameters?: ReplyParameters; //Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
export interface copyMessages {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number; //Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string; //Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
    message_ids: number[]; //A JSON-serialized list of 1-100 identifiers of 1-100 messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
    disable_notification?: boolean; //Sends the messages silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the forwarded messages from forwarding and saving
    remove_caption?: boolean; //Pass True to copy the messages without their captions
}


// Use this method to send photos. On success, the sent Message is returned.
export interface sendPhoto {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   // Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
    photo: InputFile | string;   // Photo to send.Pass a file_id as String to send a photo that exists on the Telegram servers(recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
    caption?: string;   //	Photo caption(may also be used when resending photos by file_id), 0 - 1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the photo caption.See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON - serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: Boolean;   //	Pass True, if the caption must be shown above the message media
    has_spoiler?: Boolean;   //	Pass True if the photo needs to be covered with a spoiler animation
    disable_notification?: Boolean;   //	Sends the message silently.Users will receive a notification with no sound.
    protect_content?: Boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   // Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}



// Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
// For sending voice messages, use the sendVoice method instead.
export interface sendAudio {
    business_connection_id?: string;		//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    audio: InputFile | string	//	Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
    caption?: string	//	Audio caption, 0-1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the audio caption. See formatting options for more details.
    caption_entities?: MessageEntity[];		//	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    duration?: number	//	Duration of the audio in seconds
    performer?: string	//	Performer
    title?: string	//	Track name
    thumbnail?: InputFile | string	//	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply 		//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}




// Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
export interface sendDocument {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	// Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
    document: InputFile | string	// File to send.Pass a file_id as string to send a file that exists on the Telegram servers(recommended), pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
    thumbnail?: InputFile | string	//	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server - side.The thumbnail should be in JPEG format and less than 200 kB in size.A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    caption?: string	//	Document caption(may also be used when resending documents by file_id), 0 - 1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the document caption.See formatting options for more details.
    caption_entities?: MessageEntity[]	//	A JSON - serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    disable_content_type_detection?: Boolean	//	Disables automatic server - side content type detection for files uploaded using multipart/form-data
    disable_notification?: Boolean	//	Sends the message silently.Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

// Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
export interface sendVideo {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	// Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
    video: InputFile | string	// Video to send.Pass a file_id as string to send a video that exists on the Telegram servers(recommended), pass an HTTP URL as a string for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
    duration?: number	//	Duration of sent video in seconds
    width?: number	//	Video width
    height?: number	//	Video height
    thumbnail?: InputFile | string	//	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server - side.The thumbnail should be in JPEG format and less than 200 kB in size.A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    cover?: InputFile | string	//	Cover for the video in the message.Pass a file_id to send a file that exists on the Telegram servers(recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
    start_timestamp?: number	//	Start timestamp for the video in the message
    caption?: string	//	Video caption(may also be used when resending videos by file_id), 0 - 1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the video caption.See formatting options for more details.
    caption_entities?: MessageEntity[]	//	A JSON - serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: Boolean	//	Pass True, if the caption must be shown above the message media
    has_spoiler?: Boolean	//	Pass True if the video needs to be covered with a spoiler animation
    supports_streaming?: Boolean	//	Pass True if the uploaded video is suitable for streaming
    disable_notification?: Boolean	//	Sends the message silently.Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

// Use this method to send animation files(GIF or H.264 / MPEG - 4 AVC video without sound).On success, the sent Message is returned.Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
export interface sendAnimation {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	// Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
    animation: InputFile | string	// Animation to send.Pass a file_id as string to send an animation that exists on the Telegram servers(recommended), pass an HTTP URL as a string for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files »
    duration?: number	//	Duration of sent animation in seconds
    width?: number	//	Animation width
    height?: number	//	Animation height
    thumbnail?: InputFile | string	//	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server - side.The thumbnail should be in JPEG format and less than 200 kB in size.A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    caption?: string	//	Animation caption(may also be used when resending animation by file_id), 0 - 1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the animation caption.See formatting options for more details.
    caption_entities?: MessageEntity[]	//	A JSON - serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: Boolean	//	Pass True, if the caption must be shown above the message media
    has_spoiler?: Boolean	//	Pass True if the animation needs to be covered with a spoiler animation
    disable_notification?: Boolean	//	Sends the message silently.Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

// Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
export interface sendVoice {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	// Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
    voice: InputFile | string	// Audio file to send.Pass a file_id as string to send a file that exists on the Telegram servers(recommended), pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
    caption?: string	//	Voice message caption, 0 - 1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the voice message caption.See formatting options for more details.
    caption_entities?: MessageEntity[]	//	A JSON - serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    duration?: number	//	Duration of the voice message in seconds
    disable_notification?: Boolean	//	Sends the message silently.Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

// As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
export interface sendVideoNote {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	// Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
    video_note: InputFile | string	// Video note to send.Pass a file_id as string to send a video note that exists on the Telegram servers(recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
    duration?: number	//	Duration of sent video in seconds
    length?: number	//	Video width and height, i.e.diameter of the video message
    thumbnail?: InputFile | string	//	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server - side.The thumbnail should be in JPEG format and less than 200 kB in size.A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    disable_notification?: Boolean	//	Sends the message silently.Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}




// Use this method to send paid media. On success, the sent Message is returned.
export interface sendPaidMedia {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
    star_count: number	//  The number of Telegram Stars that must be paid to buy access to the media; 1-2500
    media: InputPaidMedia[]	//  A JSON-serialized array describing the media to be sent; up to 10 items
    payload?: string	//	Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
    caption?: string	//	Media caption, 0-1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the media caption. See formatting options for more details.
    caption_entities?: MessageEntity[]	//	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: Boolean	//	Pass True, if the caption must be shown above the message media
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}



// Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
export interface sendMediaGroup {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    media: InputMediaAudio[] | InputMediaDocument[] | InputMediaPhoto | InputMediaVideo	//  A JSON-serialized array describing messages to be sent, must include 2-10 items
    disable_notification?: Boolean	//	Sends messages silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent messages from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
}











// Use this method to send point on the map. On success, the sent Message is returned.
export interface sendLocation {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    latitude: number	//  Latitude of the location
    longitude: number	//  Longitude of the location
    horizontal_accuracy?: number	//	The radius of uncertainty for the location, measured in meters; 0-1500
    live_period?: number	//	Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
    heading?: number	//	For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
    proximity_alert_radius?: number	//	For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send information about a venue. On success, the sent Message is returned.
export interface sendVenue {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    latitude: number	//  Latitude of the venue
    longitude: number	//  Longitude of the venue
    title: string	//  Name of the venue
    address: string	//  Address of the venue
    foursquare_id?: string	//	Foursquare identifier of the venue
    foursquare_type?: string	//	Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
    google_place_id?: string	//	Google Places identifier of the venue
    google_place_type?: string	//	Google Places type of the venue. (See supported types.)
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send phone contacts. On success, the sent Message is returned.
export interface sendContact {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    phone_number: string	//  Contact's phone number
    first_name: string	//  Contact's first name
    last_name?: string	//	Contact's last name
    vcard?: string	//	Additional data about the contact in the form of a vCard, 0-2048 bytes
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send a native poll. On success, the sent Message is returned.
export interface sendPoll {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    question: string	//  Poll question, 1-300 characters
    question_parse_mode?: string	//	Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
    question_entities?: MessageEntity[]	//	A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
    options: InputPollOption[]	//  A JSON-serialized list of 2-10 answer options
    is_anonymous?: Boolean	//	True, if the poll needs to be anonymous, defaults to True
    type?: string	//	Poll type, “quiz” or “regular”, defaults to “regular”
    allows_multiple_answers?: Boolean	//	True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
    correct_option_id?: number	//	0-based identifier of the correct answer option, required for polls in quiz mode
    explanation?: string	//	Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
    explanation_parse_mode?: string	//	Mode for parsing entities in the explanation. See formatting options for more details.
    explanation_entities?: MessageEntity[]	//	A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
    open_period?: number	//	Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
    close_date?: number	//	Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
    is_closed?: Boolean	//	Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
export interface sendDice {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    emoji?: string	//	Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲”
    disable_notification?: Boolean	//	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: Boolean	//	Protects the contents of the sent message from forwarding
    allow_paid_broadcast?: Boolean	//	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string	//	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters	//	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply	//	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.

// Example: The ImageBot  needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use sendChatAction with action = upload_photo. The user will see a “sending photo” status for the bot.

// We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
export interface sendChatAction {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the action will be sent
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number	//	Unique identifier for the target message thread; for supergroups only
    action: string	//  Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
}


// Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
export interface setMessageReaction {
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id: number	//  Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
    reaction?: ReactionType[]	//	A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
    is_big?: Boolean	//	Pass True to set the reaction with a big animation
}


// Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
export interface getUserProfilePhotos {
    user_id: number	//  Unique identifier of the target user
    offset?: number	//	Sequential number of the first photo to be returned. By default, all photos are returned.
    limit?: number	//	Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
}

//  : Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.
export interface setUserEmojiStatus {
    user_id: number	//  Unique identifier of the target user
    emoji_status_custom_emoji_id?: string	//	Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
    emoji_status_expiration_date?: number	//	Expiration date of the emoji status, if any
}


// Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
export interface getFile {
    file_id: string	//  File identifier to get information about
}
// Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.



// Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface banChatMember {
    chat_id: number | string	//  Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
    user_id: number	//  Unique identifier of the target user
    until_date?: number	//	Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
    revoke_messages?: Boolean	//	Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
}


// Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
export interface unbanChatMember {
    chat_id: number | string	//  Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
    user_id: number	//  Unique identifier of the target user
    only_if_banned?: Boolean	//	Do nothing if the user is not banned
}


// Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
export interface restrictChatMember {
    chat_id: number | string	//  Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    user_id: number	//  Unique identifier of the target user
    permissions: ChatPermissions	//  A JSON-serialized object for new user permissions
    use_independent_chat_permissions?: Boolean	//	Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
    until_date?: number	//	Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
}


// Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
export interface promoteChatMember {
    chat_id: number | string	//  Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    user_id: number	//  Unique identifier of the target user
    is_anonymous?: Boolean	//	Pass True if the administrator's presence in the chat is hidden
    can_manage_chat?: Boolean	//	Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
    can_delete_messages?: Boolean	//	Pass True if the administrator can delete messages of other users
    can_manage_video_chats?: Boolean	//	Pass True if the administrator can manage video chats
    can_restrict_members?: Boolean	//	Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
    can_promote_members?: Boolean	//	Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
    can_change_info?: Boolean	//	Pass True if the administrator can change chat title, photo and other settings
    can_invite_users?: Boolean	//	Pass True if the administrator can invite new users to the chat
    can_post_stories?: Boolean	//	Pass True if the administrator can post stories to the chat
    can_edit_stories?: Boolean	//	Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
    can_delete_stories?: Boolean	//	Pass True if the administrator can delete stories posted by other users
    can_post_messages?: Boolean	//	Pass True if the administrator can post messages in the channel, or access channel statistics; for channels only
    can_edit_messages?: Boolean	//	Pass True if the administrator can edit messages of other users and can pin messages; for channels only
    can_pin_messages?: Boolean	//	Pass True if the administrator can pin messages; for supergroups only
    can_manage_topics?: Boolean	//	Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
}









// Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
export interface setChatAdministratorCustomTitle {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target supergroup(in the format @supergroupusername)
    user_id: number	//	Unique identifier of the target user
    custom_title: string	//	New custom title for the administrator; 0 - 16 characters, emoji are not allowed
}


// Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
export interface banChatSenderChat {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    sender_chat_id: number	//	Unique identifier of the target sender chat
}


// Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
export interface unbanChatSenderChat {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    sender_chat_id: number	//	Unique identifier of the target sender chat
}


// Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
export interface setChatPermissions {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target supergroup(in the format @supergroupusername)
    permissions: ChatPermissions	//	A JSON - serialized object for new default chat permissions
    use_independent_chat_permissions?: Boolean	//	Pass True if chat permissions are set independently.Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
}


// Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as string on success.
export interface exportChatInviteLink {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
}
// Note: Each administrator in a chat generates their own invite links.Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using exportChatInviteLink or by calling the getChat method. If your bot needs to generate a new primary invite link replacing its previous one, use exportChatInviteLink again.



// Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
export interface createChatInviteLink {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    name?: string	//	Invite link name; 0 - 32 characters
    expire_date?: number	//	Point in time(Unix timestamp) when the link will expire
    member_limit?: number	//	The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1 - 99999
    creates_join_request?: Boolean	//	True, if users joining the chat via the link need to be approved by chat administrators.If True, member_limit can't be specified
}


// Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
export interface editChatInviteLink {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    invite_link: string	//	The invite link to edit
    name?: string	//	Invite link name; 0 - 32 characters
    expire_date?: number	//	Point in time(Unix timestamp) when the link will expire
    member_limit?: number	//	The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1 - 99999
    creates_join_request?: Boolean	//	True, if users joining the chat via the link need to be approved by chat administrators.If True, member_limit can't be specified
}


// Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
export interface createChatSubscriptionInviteLink {
    chat_id: number | string	//	Unique identifier for the target channel chat or username of the target channel(in the format @channelusername)
    name?: string	//	Invite link name; 0 - 32 characters
    subscription_period: number	//	The number of seconds the subscription will be active for before the next payment.Currently, it must always be 2592000(30 days).
    subscription_price: number	//	The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1 - 2500
}


// Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
export interface editChatSubscriptionInviteLink {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    invite_link: string	//	The invite link to edit
    name?: string	//	Invite link name; 0 - 32 characters
}


// Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
export interface revokeChatInviteLink {
    chat_id: number | string	//	Unique identifier of the target chat or username of the target channel(in the format @channelusername)
    invite_link: string	//	The invite link to revoke
}


// Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
export interface approveChatJoinRequest {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    user_id: number	//	Unique identifier of the target user
}


// Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
export interface declineChatJoinRequest {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    user_id: number	//	Unique identifier of the target user
}


// Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface setChatPhoto {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    photo: InputFile	//	New chat photo, uploaded using multipart/form-data
}


// Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface deleteChatPhoto {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
}


// Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface setChatTitle {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    title: string	//	New chat title, 1 - 128 characters
}


// Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface setChatDescription {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    description?: string	//	New chat description, 0 - 255 characters
}


// Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
export interface pinChatMessage {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be pinned
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id: number	//	Identifier of a message to pin
    disable_notification?: Boolean	//	Pass True if it is not necessary to send a notification to all chat members about the new pinned message.Notifications are always disabled in channels and private chats.
}


// Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
export interface unpinChatMessage {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message will be unpinned
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Identifier of the message to unpin.Required if business_connection_id is specified.If not specified, the most recent pinned message(by sending date) will be unpinned.
}


// Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
export interface unpinAllChatMessages {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
}


// Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
export interface leaveChat {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target supergroup or channel(in the format @channelusername)
}


// Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
export interface getChat {
    chat_id: number | string	//	Unique identifier for the target chat or username of the target supergroup or channel(in the format @channelusername)
}











