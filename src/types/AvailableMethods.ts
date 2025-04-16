// ============================== Available Methods ==============================
// ===== all available methods along with is parameter, parameter type, required or not and description. =====

import { BotCommand, BotCommandScope, ChatAdministratorRights, ChatPermissions, ForceReply, InlineKeyboardMarkup, InputFile, InputMediaAudio, InputMediaDocument, InputMediaPhoto, InputMediaVideo, InputPaidMedia, InputPollOption, LinkPreviewOptions, MenuButton, MessageEntity, ReactionType, ReplyKeyboardMarkup, ReplyKeyboardRemove, ReplyParameters } from "./AvailableTypes";

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
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    text: string;   //	Text of the message to be sent, 1-4096 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the message text. See formatting options for more details.
    entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
    link_preview_options?: LinkPreviewOptions;   //	Link preview generation options for the message
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

// Formatting options
// The Bot API supports basic formatting for messages. You can use bold, italic, underlined, strikethrough, spoiler text, block quotations as well as inline links and pre-formatted code in your bots' messages. Telegram clients will render them accordingly. You can specify text entities directly, or use markdown-style or HTML-style formatting.

// Note that Telegram clients will display an alert to the user before opening an inline link ('Open this link?' together with the full URL).

// Message entities can be nested, providing following restrictions are met:
// - If two entities have common characters, then one of them is fully contained inside another.
// - bold, italic, underline, strikethrough, and spoiler entities can contain and can be part of any other entities, except pre and code.
// - blockquote and expandable_blockquote entities can't be nested.
// - All other entities can't contain each other.

// Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username. Please note:

// These links will work only if they are used inside an inline link or in an inline keyboard button. For example, they will not work, when used in a message text.
// Unless the user is a member of the chat where they were mentioned, these mentions are only guaranteed to work if the user has contacted the bot in private in the past or has sent a callback query to the bot via an inline button and doesn't have Forwarded Messages privacy enabled for the bot.
// You can find the list of programming and markup languages for which syntax highlighting is supported at libprisma#supported-languages.

// MarkdownV2 style
// To use this mode, pass MarkdownV2 in the parse_mode field. Use the following syntax in your message:

// *bold \*text*
// _italic \*text_
// __underline__
// ~strikethrough~
// ||spoiler||
// *bold _italic bold ~italic bold strikethrough ||italic bold strikethrough spoiler||~ __underline italic bold___ bold*
// [inline URL](http://www.example.com/)
// [inline mention of a user](tg://user?id=123456789)
// ![👍](tg://emoji?id=5368324170671202286)
// `inline fixed-width code`
// ```
// pre-formatted fixed-width code block
// ```
// ```python
// pre-formatted fixed-width code block written in the Python programming language
// ```
// >Block quotation started
// >Block quotation continued
// >Block quotation continued
// >Block quotation continued
// >The last line of the block quotation
// **>The expandable block quotation started right after the previous block quotation
// >It is separated from the previous block quotation by an empty bold entity
// >Expandable block quotation continued
// >Hidden by default part of the expandable block quotation started
// >Expandable block quotation continued
// >The last line of the expandable block quotation with the expandability mark||
// Please note:

// Any character with code between 1 and 126 inclusively can be escaped anywhere with a preceding '\' character, in which case it is treated as an ordinary character and not a part of the markup. This implies that '\' character usually must be escaped with a preceding '\' character.
// Inside pre and code entities, all '`' and '\' characters must be escaped with a preceding '\' character.
// Inside the (...) part of the inline link and custom emoji definition, all ')' and '\' must be escaped with a preceding '\' character.
// In all other places characters '_', '*', '[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!' must be escaped with the preceding character '\'.
// In case of ambiguity between italic and underline entities __ is always greadily treated from left to right as beginning or end of an underline entity, so instead of ___italic underline___ use ___italic underline_**__, adding an empty bold entity as a separator.
// A valid emoji must be provided as an alternative value for the custom emoji. The emoji will be shown instead of the custom emoji in places where a custom emoji cannot be displayed (e.g., system notifications) or if the message is forwarded by a non-premium user. It is recommended to use the emoji from the emoji field of the custom emoji sticker.
// Custom emoji entities can only be used by bots that purchased additional usernames on Fragment.
// HTML style
// To use this mode, pass HTML in the parse_mode field. The following tags are currently supported:

// <b>bold</b>, <strong>bold</strong>
// <i>italic</i>, <em>italic</em>
// <u>underline</u>, <ins>underline</ins>
// <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
// <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
// <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
// <a href="http://www.example.com/">inline URL</a>
// <a href="tg://user?id=123456789">inline mention of a user</a>
// <tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
// <code>inline fixed-width code</code>
// <pre>pre-formatted fixed-width code block</pre>
// <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
// <blockquote>Block quotation started\nBlock quotation continued\nThe last line of the block quotation</blockquote>
// <blockquote expandable>Expandable block quotation started\nExpandable block quotation continued\nExpandable block quotation continued\nHidden by default part of the block quotation started\nExpandable block quotation continued\nThe last line of the block quotation</blockquote>
// Please note:

// Only the tags mentioned above are currently supported.
// All <, > and & symbols that are not a part of a tag or an HTML entity must be replaced with the corresponding HTML entities (< with &lt;, > with &gt; and & with &amp;).
// All numerical HTML entities are supported.
// The API currently supports only the following named HTML entities: &lt;, &gt;, &amp; and &quot;.
// Use nested pre and code tags, to define programming language for pre entity.
// Programming language can't be specified for standalone code tags.
// A valid emoji must be used as the content of the tg-emoji tag. The emoji will be shown instead of the custom emoji in places where a custom emoji cannot be displayed (e.g., system notifications) or if the message is forwarded by a non-premium user. It is recommended to use the emoji from the emoji field of the custom emoji sticker.
// Custom emoji entities can only be used by bots that purchased additional usernames on Fragment.
// Markdown style
// This is a legacy mode, retained for backward compatibility. To use this mode, pass Markdown in the parse_mode field. Use the following syntax in your message:

// *bold text*
// _italic text_
// [inline URL](http://www.example.com/)
// [inline mention of a user](tg://user?id=123456789)
// `inline fixed-width code`
// ```
// pre-formatted fixed-width code block
// ```
// ```python
// pre-formatted fixed-width code block written in the Python programming language
// ```
// Please note:

// Entities must not be nested, use parse mode MarkdownV2 instead.
// There is no way to specify “underline”, “strikethrough”, “spoiler”, “blockquote”, “expandable_blockquote” and “custom_emoji” entities, use parse mode MarkdownV2 instead.
// To escape characters '_', '*', '`', '[' outside of an entity, prepend the characters '\' before them.
// Escaping inside entities is not allowed, so entity must be closed first and reopened again: use _snake_\__case_ for italic snake_case and *2*\**2=4* for bold 2*2=4.
// Paid Broadcasts
// By default, all bots are able to broadcast up to 30 messages per second to their users. Developers can increase this limit by enabling Paid Broadcasts in @Botfather - allowing their bot to broadcast up to 1000 messages per second.

// Each message broadcasted over the free amount of 30 messages per second incurs a cost of 0.1 Stars per message, paid with Telegram Stars from the bot's balance. In order to use this feature, a bot must have at least 10,000 Stars on its balance.

// Bots with increased limits are only charged for messages that are broadcasted successfully.



// Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.
export interface forwardMessage {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string;   //	Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
    video_start_timestamp?: number;   //	New start timestamp for the forwarded video in the message
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the forwarded message from forwarding and saving
    message_id: number;   //	Message identifier in the chat specified in from_chat_id
}


// Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
export interface forwardMessages {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string;   //	Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
    message_ids: number[];   //	A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
    disable_notification?: boolean;   //	Sends the messages silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the forwarded messages from forwarding and saving
}


// Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
export interface copyMessage {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string;   //	Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
    message_id: number;   //	Message identifier in the chat specified in from_chat_id
    video_start_timestamp?: number;   //	New start timestamp for the copied video in the message
    caption?: string;   //	New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
    parse_mode?: string;   //	Mode for parsing entities in the new caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;   //	Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified.
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
export interface copyMessages {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    from_chat_id: number | string;   //	Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
    message_ids: number[];   //	A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
    disable_notification?: boolean;   //	Sends the messages silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent messages from forwarding and saving
    remove_caption?: boolean;   //	Pass True to copy the messages without their captions
}


// Use this method to send photos. On success, the sent Message is returned.
export interface sendPhoto {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    photo: InputFile | string;   //	Photo to send. Pass a file_id as string to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
    caption?: string;   //	Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the photo caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;   //	Pass True, if the caption must be shown above the message media
    has_spoiler?: boolean;   //	Pass True if the photo needs to be covered with a spoiler animation
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}



// Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
// For sending voice messages, use the sendVoice method instead.
export interface sendAudio {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    audio: InputFile | string;   //	Audio file to send. Pass a file_id as string to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
    caption?: string;   //	Audio caption, 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the audio caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    duration?: number;   //	Duration of the audio in seconds
    performer?: string;   //	Performer
    title?: string;   //	Track name
    thumbnail?: InputFile | string;   //	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
export interface sendDocument {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    document: InputFile | string;   //	File to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
    thumbnail?: InputFile | string;   //	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    caption?: string;   //	Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the document caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    disable_content_type_detection?: boolean;   //	Disables automatic server-side content type detection for files uploaded using multipart/form-data
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
export interface sendVideo {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    video: InputFile | string;   //	Video to send. Pass a file_id as string to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
    duration?: number;   //	Duration of sent video in seconds
    width?: number;   //	Video width
    height?: number;   //	Video height
    thumbnail?: InputFile | string;   //	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    cover?: InputFile | string;   //	Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
    start_timestamp?: number;   //	Start timestamp for the video in the message
    caption?: string;   //	Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the video caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;   //	Pass True, if the caption must be shown above the message media
    has_spoiler?: boolean;   //	Pass True if the video needs to be covered with a spoiler animation
    supports_streaming?: boolean;   //	Pass True if the uploaded video is suitable for streaming
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
export interface sendAnimation {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    animation: InputFile | string;   //	Animation to send. Pass a file_id as string to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files »
    duration?: number;   //	Duration of sent animation in seconds
    width?: number;   //	Animation width
    height?: number;   //	Animation height
    thumbnail?: InputFile | string;   //	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    caption?: string;   //	Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the animation caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;   //	Pass True, if the caption must be shown above the message media
    has_spoiler?: boolean;   //	Pass True if the animation needs to be covered with a spoiler animation
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
export interface sendVoice {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    voice: InputFile | string;   //	Audio file to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
    caption?: string;   //	Voice message caption, 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the voice message caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    duration?: number;   //	Duration of the voice message in seconds
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.Use this method to send video messages.On success, the sent Message is returned.
export interface sendVideoNote {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    video_note: InputFile | string;   //	Video note to send. Pass a file_id as string to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
    duration?: number;   //	Duration of sent video in seconds
    length?: number;   //	Video width and height, i.e. diameter of the video message
    thumbnail?: InputFile | string;   //	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send paid media. On success, the sent Message is returned.
export interface sendPaidMedia {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
    star_count: number;   //	The number of Telegram Stars that must be paid to buy access to the media; 1-10000
    media: InputPaidMedia[];   //	A JSON-serialized array describing the media to be sent; up to 10 items
    payload?: string;   //	Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
    caption?: string;   //	Media caption, 0-1024 characters after entities parsing
    parse_mode?: string;   //	Mode for parsing entities in the media caption. See formatting options for more details.
    caption_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;   //	Pass True, if the caption must be shown above the message media
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
export interface sendMediaGroup {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    // media:	Array of InputMediaAudio, InputMediaDocument, InputMediaPhoto and InputMediaVideo	;   //	A JSON-serialized array describing messages to be sent, must include 2-10 items
    media: InputMediaAudio[] | InputMediaDocument[] | InputMediaPhoto[] | InputMediaVideo[];	//  A JSON-serialized array describing messages to be sent, must include 2-10 items
    disable_notification?: boolean;   //	Sends messages silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent messages from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
}


// Use this method to send point on the map. On success, the sent Message is returned.
export interface sendLocation {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    latitude: number;   //	Latitude of the location
    longitude: number;   //	Longitude of the location
    horizontal_accuracy?: number;   //	The radius of uncertainty for the location, measured in meters; 0-1500
    live_period?: number;   //	Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
    heading?: number;   //	For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
    proximity_alert_radius?: number;   //	For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send information about a venue. On success, the sent Message is returned.
export interface sendVenue {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    latitude: number;   //	Latitude of the venue
    longitude: number;   //	Longitude of the venue
    title: string;   //	Name of the venue
    address: string;   //	Address of the venue
    foursquare_id?: string;   //	Foursquare identifier of the venue
    foursquare_type?: string;   //	Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
    google_place_id?: string;   //	Google Places identifier of the venue
    google_place_type?: string;   //	Google Places type of the venue. (See supported types.)
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send phone contacts. On success, the sent Message is returned.
export interface sendContact {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    phone_number: string;   //	Contact's phone number
    first_name: string;   //	Contact's first name
    last_name?: string;   //	Contact's last name
    vcard?: string;   //	Additional data about the contact in the form of a vCard, 0-2048 bytes
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send a native poll. On success, the sent Message is returned.
export interface sendPoll {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    question: string;   //	Poll question, 1-300 characters
    question_parse_mode?: string;   //	Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
    question_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
    options: InputPollOption[];   //	A JSON-serialized list of 2-10 answer options
    is_anonymous?: boolean;   //	True, if the poll needs to be anonymous, defaults to True
    type?: string;   //	Poll type, “quiz” or “regular”, defaults to “regular”
    allows_multiple_answers?: boolean;   //	True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
    correct_option_id?: number;   //	0-based identifier of the correct answer option, required for polls in quiz mode
    explanation?: string;   //	Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
    explanation_parse_mode?: string;   //	Mode for parsing entities in the explanation. See formatting options for more details.
    explanation_entities?: MessageEntity[];   //	A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
    open_period?: number;   //	Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
    close_date?: number;   //	Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
    is_closed?: boolean;   //	Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding and saving
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
export interface sendDice {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
    emoji?: string;   //	Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲”
    disable_notification?: boolean;   //	Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean;   //	Protects the contents of the sent message from forwarding
    allow_paid_broadcast?: boolean;   //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
    message_effect_id?: string;   //	Unique identifier of the message effect to be added to the message; for private chats only
    reply_parameters?: ReplyParameters;   //	Description of the message to reply to
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;   //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}


// Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
// Example: The ImageBot needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use sendChatAction with action = upload_photo. The user will see a “sending photo” status for the bot.
// We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
export interface sendChatAction {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the action will be sent
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_thread_id?: number;   //	Unique identifier for the target message thread; for supergroups only
    action: string;   //	Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
}


// Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
export interface setMessageReaction {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id: number;   //	Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
    reaction?: ReactionType[];   //	A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
    is_big?: boolean;   //	Pass True to set the reaction with a big animation
}


// Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
export interface getUserProfilePhotos {
    user_id: number;   //	Unique identifier of the target user
    offset?: number;   //	Sequential number of the first photo to be returned. By default, all photos are returned.
    limit?: number;   //	Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
}


// Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.
export interface setUserEmojiStatus {
    user_id: number;   //	Unique identifier of the target user
    emoji_status_custom_emoji_id?: string;   //	Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
    emoji_status_expiration_date?: number;   //	Expiration date of the emoji status, if any
}


// Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
export interface getFile {
    file_id: string;   //	File identifier to get information about
}
// Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.



// Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface banChatMember {
    chat_id: number | string;   //	Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
    until_date?: number;   //	Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
    revoke_messages?: boolean;   //	Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
}


// Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
export interface unbanChatMember {
    chat_id: number | string;   //	Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
    only_if_banned?: boolean;   //	Do nothing if the user is not banned
}


// Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
export interface restrictChatMember {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    user_id: number;   //	Unique identifier of the target user
    permissions: ChatPermissions;   //	A JSON-serialized object for new user permissions
    use_independent_chat_permissions?: boolean;   //	Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
    until_date?: number;   //	Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
}


// Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
export interface promoteChatMember {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
    is_anonymous?: boolean;   //	Pass True if the administrator's presence in the chat is hidden
    can_manage_chat?: boolean;   //	Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
    can_delete_messages?: boolean;   //	Pass True if the administrator can delete messages of other users
    can_manage_video_chats?: boolean;   //	Pass True if the administrator can manage video chats
    can_restrict_members?: boolean;   //	Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
    can_promote_members?: boolean;   //	Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
    can_change_info?: boolean;   //	Pass True if the administrator can change chat title, photo and other settings
    can_invite_users?: boolean;   //	Pass True if the administrator can invite new users to the chat
    can_post_stories?: boolean;   //	Pass True if the administrator can post stories to the chat
    can_edit_stories?: boolean;   //	Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
    can_delete_stories?: boolean;   //	Pass True if the administrator can delete stories posted by other users
    can_post_messages?: boolean;   //	Pass True if the administrator can post messages in the channel, or access channel statistics; for channels only
    can_edit_messages?: boolean;   //	Pass True if the administrator can edit messages of other users and can pin messages; for channels only
    can_pin_messages?: boolean;   //	Pass True if the administrator can pin messages; for supergroups only
    can_manage_topics?: boolean;   //	Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
}


// Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
export interface setChatAdministratorCustomTitle {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    user_id: number;   //	Unique identifier of the target user
    custom_title: string;   //	New custom title for the administrator; 0-16 characters, emoji are not allowed
}


// Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
export interface banChatSenderChat {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    sender_chat_id: number;   //	Unique identifier of the target sender chat
}


// Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
export interface unbanChatSenderChat {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    sender_chat_id: number;   //	Unique identifier of the target sender chat
}


// Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
export interface setChatPermissions {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    permissions: ChatPermissions;   //	A JSON-serialized object for new default chat permissions
    use_independent_chat_permissions?: boolean;   //	Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
}


// Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as string on success.
export interface exportChatInviteLink {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
}
// Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using exportChatInviteLink or by calling the getChat method. If your bot needs to generate a new primary invite link replacing its previous one, use exportChatInviteLink again.



// Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
export interface createChatInviteLink {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    name?: string;   //	Invite link name; 0-32 characters
    expire_date?: number;   //	Point in time (Unix timestamp) when the link will expire
    member_limit?: number;   //	The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
    creates_join_request?: boolean;   //	True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
}


// Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
export interface editChatInviteLink {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    invite_link: string;   //	The invite link to edit
    name?: string;   //	Invite link name; 0-32 characters
    expire_date?: number;   //	Point in time (Unix timestamp) when the link will expire
    member_limit?: number;   //	The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
    creates_join_request?: boolean;   //	True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
}


// Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
export interface createChatSubscriptionInviteLink {
    chat_id: number | string;   //	Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)
    name?: string;   //	Invite link name; 0-32 characters
    subscription_period: number;   //	The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
    subscription_price: number;   //	The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
}


// Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
export interface editChatSubscriptionInviteLink {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    invite_link: string;   //	The invite link to edit
    name?: string;   //	Invite link name; 0-32 characters
}


// Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
export interface revokeChatInviteLink {
    chat_id: number | string;   //	Unique identifier of the target chat or username of the target channel (in the format @channelusername)
    invite_link: string;   //	The invite link to revoke
}


// Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
export interface approveChatJoinRequest {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
}


// Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
export interface declineChatJoinRequest {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
}


// Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface setChatPhoto {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    photo: InputFile;   //	New chat photo, uploaded using multipart/form-data
}


// Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface deleteChatPhoto {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
}


// Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface setChatTitle {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    title: string;   //	New chat title, 1-128 characters
}


// Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
export interface setChatDescription {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    description?: string;   //	New chat description, 0-255 characters
}


// Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
export interface pinChatMessage {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be pinned
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id: number;   //	Identifier of a message to pin
    disable_notification?: boolean;   //	Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
}


// Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
export interface unpinChatMessage {
    business_connection_id?: string;   //	Unique identifier of the business connection on behalf of which the message will be unpinned
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id?: number;   //	Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
}


// Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
export interface unpinAllChatMessages {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
}


// Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
export interface leaveChat {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
}


// Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
export interface getChat {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
}


// Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
export interface getChatAdministrators {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
}


// Use this method to get the number of members in a chat. Returns Int on success.
export interface getChatMemberCount {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
}


// Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
export interface getChatMember {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
}


// Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
export interface setChatStickerSet {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    sticker_set_name: string;   //	Name of the sticker set to be set as the group sticker set
}


// Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
export interface deleteChatStickerSet {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
export interface getForumTopicIconStickers {
}


// Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
export interface createForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    name: string;   //	Topic name, 1-128 characters
    icon_color?: number;   //	Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
    icon_custom_emoji_id?: string;   //	Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
}


// Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
export interface editForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    message_thread_id: number;   //	Unique identifier for the target message thread of the forum topic
    name?: string;   //	New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
    icon_custom_emoji_id?: string;   //	New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
}


// Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
export interface closeForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    message_thread_id: number;   //	Unique identifier for the target message thread of the forum topic
}


// Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
export interface reopenForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    message_thread_id: number;   //	Unique identifier for the target message thread of the forum topic
}


// Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
export interface deleteForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    message_thread_id: number;   //	Unique identifier for the target message thread of the forum topic
}


// Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
export interface unpinAllForumTopicMessages {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    message_thread_id: number;   //	Unique identifier for the target message thread of the forum topic
}


// Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
export interface editGeneralForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    name: string;   //	New topic name, 1-128 characters
}


// Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
export interface closeGeneralForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
export interface reopenGeneralForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
export interface hideGeneralForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
export interface unhideGeneralForumTopic {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
export interface unpinAllGeneralForumTopicMessages {
    chat_id: number | string;   //	Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}



// Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
// Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via @BotFather and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
export interface answerCallbackQuery {
    callback_query_id: string;   //	Unique identifier for the query to be answered
    text?: string;   //	Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
    show_alert?: boolean;   //	If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
    url?: string;   //	URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.
    // Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
    cache_time?: number;   //	The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
}


// Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
export interface getUserChatBoosts {
    chat_id: number | string;   //	Unique identifier for the chat or username of the channel (in the format @channelusername)
    user_id: number;   //	Unique identifier of the target user
}


// Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
export interface getBusinessConnection {
    business_connection_id: string;   //	Unique identifier of the business connection
}


// Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
export interface setMyCommands {
    commands: BotCommand[];   //	A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
    scope?: BotCommandScope;   //	A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
    language_code?: string;   //	A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
}


// Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
export interface deleteMyCommands {
    scope?: BotCommandScope;   //	A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
    language_code?: string;   //	A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
}


// Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
export interface getMyCommands {
    scope?: BotCommandScope;   //	A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
    language_code?: string;   //	A two-letter ISO 639-1 language code or an empty string
}


// Use this method to change the bot's name. Returns True on success.
export interface setMyName {
    name?: string;   //	New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
    language_code?: string;   //	A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
}


// Use this method to get the current bot name for the given user language. Returns BotName on success.
export interface getMyName {
    language_code?: string;   //	A two-letter ISO 639-1 language code or an empty string
}


// Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
export interface setMyDescription {
    description?: string;   //	New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
    language_code?: string;   //	A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
}


// Use this method to get the current bot description for the given user language. Returns BotDescription on success.
export interface getMyDescription {
    language_code?: string;   //	A two-letter ISO 639-1 language code or an empty string
}


// Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
export interface setMyShortDescription {
    short_description?: string;   //	New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
    language_code?: string;   //	A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
}


// Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
export interface getMyShortDescription {
    language_code?: string;   //	A two-letter ISO 639-1 language code or an empty string
}


// Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
export interface setChatMenuButton {
    chat_id?: number;   //	Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
    menu_button?: MenuButton;   //	A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
}


// Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
export interface getChatMenuButton {
    chat_id?: number;   //	Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
}


// Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
export interface setMyDefaultAdministratorRights {
    rights?: ChatAdministratorRights;   //	A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
    for_channels?: boolean;   //	Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
}


// Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
export interface getMyDefaultAdministratorRights {
    for_channels?: boolean;   //	Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
}

// Inline mode methods
// Methods and objects used in the inline mode are described in the Inline mode section.