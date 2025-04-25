import {
	ForceReply,
	InlineKeyboardMarkup,
	MessageEntity,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
	ReplyParameters,
} from './AvailableTypes';

// ============================== Available Types ==============================
export type ChatTypes = 'private' | 'group' | 'supergroup' | 'channel';

export interface MessageId {
	message_id: number; // Unique message identifier.In specific instances(e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately.In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
}

export type MessageEntityType =
	| 'mention'
	| 'hashtag'
	| 'url'
	| 'bot_command'
	| 'email'
	| 'phone_number'
	| 'bold'
	| 'italic'
	| 'code'
	| 'pre'
	| 'text_link'
	| 'text_mention';

export interface BaseMessageOrigin {
	type: string;
	date: number;
}

export interface Dimensions {
	width: number;
	height: number;
}

export interface Coordinates {
	latitude: number; // Location latitude in degrees
	longitude: number; // Location longitude in degrees
}

export interface TgFile {
	file_id: string;
	file_unique_id: string;
	file_size?: number;
	file_path?: string;
	file_name?: string;
	mime_type?: string;
}

export type ParseMode = 'MarkdownV2' | 'HTML';

export interface WithCaption {
	caption?: string; //	0-1024 characters after entities parsing
	parse_mode?: string; //	Mode for parsing entities in the caption. See formatting options for more details.
	caption_entities?: MessageEntity[]; //	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
}

export interface WithCaptionAndPosition extends WithCaption {
	show_caption_above_media?: boolean; //	Pass True, if the caption must be shown above the message media
}

export type PollType = 'regular' | 'quiz';

// ============================== Available Methods ==============================

export interface ReplyParamAndMarkup {
	reply_parameters?: ReplyParameters; //	Description of the message to reply to
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; //	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

export interface SendMessageBase extends ReplyParamAndMarkup {
	business_connection_id?: string; //	Unique identifier of the business connection on behalf of which the message will be sent
	chat_id: number | string; //	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
	message_thread_id?: number; //	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
	disable_notification?: boolean; //	Sends the message silently. Users will receive a notification with no sound.
	protect_content?: boolean; //	Protects the contents of the sent message from forwarding and saving
	allow_paid_broadcast?: boolean; //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
	message_effect_id?: string; //	Unique identifier of the message effect to be added to the message; for private chats only
}

// ============================== Inline Mode ==============================
export interface IInlineQueryResult {
	type: string;
	id: string; //	Unique identifier for this result, 1 - 64 Bytes
	reply_markup: InlineKeyboardMarkup; //Inline keyboard attached to the message
}
