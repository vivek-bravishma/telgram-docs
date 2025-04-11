// ============================== Updating messages ==============================
// The following methods allow you to change an existing message in the message history instead of sending a new one with a result of an action.This is most useful for messages with inline keyboards using callback queries, but can also help reduce clutter in conversations with regular chat bots.
// Please note, that it is currently only possible to edit messages without reply_markup or with inline keyboards.

import { InlineKeyboardMarkup, InputMedia, LinkPreviewOptions, MessageEntity } from "./AvailableTypes"



// Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
export interface editMessageText {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id?: number | string	//	Required if inline_message_id is not specified.Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Required if inline_message_id is not specified.Identifier of the message to edit
    inline_message_id?: string	//	Required if chat_id and message_id are not specified.Identifier of the inline message
    text: string	//	New text of the message, 1 - 4096 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the message text.See formatting options for more details.
    entities?: MessageEntity[]	//	A JSON - serialized list of special entities that appear in message text, which can be specified instead of parse_mode
    link_preview_options?: LinkPreviewOptions	//	Link preview generation options for the message
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for an inline keyboard.
}


// Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
export interface editMessageCaption {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id?: number | string	//	Required if inline_message_id is not specified.Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Required if inline_message_id is not specified.Identifier of the message to edit
    inline_message_id?: string	//	Required if chat_id and message_id are not specified.Identifier of the inline message
    caption?: string	//	New caption of the message, 0 - 1024 characters after entities parsing
    parse_mode?: string	//	Mode for parsing entities in the message caption.See formatting options for more details.
    caption_entities?: MessageEntity[]	//	A JSON - serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: Boolean	//	Pass True, if the caption must be shown above the message media.Supported only for animation, photo and video messages.
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for an inline keyboard.
}


// Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
export interface editMessageMedia {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id?: number | string	//	Required if inline_message_id is not specified.Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Required if inline_message_id is not specified.Identifier of the message to edit
    inline_message_id?: string	//	Required if chat_id and message_id are not specified.Identifier of the inline message
    media: InputMedia	//	A JSON - serialized object for a new media content of the message
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for a new inline keyboard.
}


// Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
export interface editMessageLiveLocation {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id?: number | string	//	Required if inline_message_id is not specified.Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Required if inline_message_id is not specified.Identifier of the message to edit
    inline_message_id?: string	//	Required if chat_id and message_id are not specified.Identifier of the inline message
    latitude: number	//	Latitude of new location
    longitude: number	//	Longitude of new location
    live_period?: number	//	New period in seconds during which the location can be updated, starting from the message send date.If 0x7FFFFFFF is specified, then the location can be updated forever.Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days.If not specified, then live_period remains unchanged
    horizontal_accuracy?: number	//	The radius of uncertainty for the location, measured in meters; 0 - 1500
    heading?: number	//	Direction in which the user is moving, in degrees.Must be between 1 and 360 if specified.
    proximity_alert_radius?: number	//	The maximum distance for proximity alerts about approaching another chat member, in meters.Must be between 1 and 100000 if specified.
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for a new inline keyboard.
}


// Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
export interface stopMessageLiveLocation {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id?: number | string	//	Required if inline_message_id is not specified.Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Required if inline_message_id is not specified.Identifier of the message with live location to stop
    inline_message_id?: string	//	Required if chat_id and message_id are not specified.Identifier of the inline message
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for a new inline keyboard.
}


// Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
export interface editMessageReplyMarkup {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id?: number | string	//	Required if inline_message_id is not specified.Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id?: number	//	Required if inline_message_id is not specified.Identifier of the message to edit
    inline_message_id?: string	//	Required if chat_id and message_id are not specified.Identifier of the inline message
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for an inline keyboard.
}


// Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
export interface stopPoll {
    business_connection_id?: string	//	Unique identifier of the business connection on behalf of which the message to be edited was sent
    chat_id: number | string	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_id: number	//	Identifier of the original message with the poll
    reply_markup?: InlineKeyboardMarkup	//	A JSON - serialized object for a new message inline keyboard.
}






// Use this method to delete a message, including service messages, with the following limitations:
// - A message can only be deleted if it was sent less than 48 hours ago.
// - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
// - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
// - Bots can delete outgoing messages in private chats, groups, and supergroups.
// - Bots can delete incoming messages in private chats.
// - Bots granted can_post_messages permissions can delete outgoing messages in channels.
// - If the bot is an administrator of a group, it can delete any message there.
// - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
// Returns True on success.
export interface deleteMessage {
    chat_id: number | String	//	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id: number	//	Identifier of the message to delete
}



// Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.
export interface deleteMessages {
    chat_id: number | String	//	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
    message_ids: number[]	//	A JSON - serialized list of 1 - 100 identifiers of messages to delete.See deleteMessage for limitations on which messages can be deleted
}










