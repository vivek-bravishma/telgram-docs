// ============================== Stickers ==============================
// The following methods and objects allow your bot to handle stickers and sticker sets.

import {
	ForceReply,
	InlineKeyboardMarkup,
	InputFile,
	MessageEntity,
	PhotoSize,
	ReplyKeyboardMarkup,
	ReplyKeyboardRemove,
	ReplyParameters,
} from './AvailableTypes';

// This object represents a sticker.
export interface Sticker {
	file_id: string; //	Identifier for this file, which can be used to download or reuse the file
	file_unique_id: string; //	Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
	type: string; //	Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.
	width: number; //	Sticker width
	height: number; //	Sticker height
	is_animated: boolean; //	True, if the sticker is animated
	is_video: boolean; //	True, if the sticker is a video sticker
	thumbnail?: PhotoSize; // Sticker thumbnail in the .WEBP or .JPG format
	emoji?: string; // Emoji associated with the sticker
	set_name?: string; // Name of the sticker set to which the sticker belongs
	premium_animation?: File; // For premium regular stickers, premium animation for the sticker
	mask_position?: MaskPosition; // For mask stickers, the position where the mask should be placed
	custom_emoji_id?: string; // For custom emoji stickers, unique identifier of the custom emoji
	needs_repainting?: true; // True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places
	file_size?: number; // File size in bytes
}

// This object represents a sticker set.
export interface StickerSet {
	name: string; //Sticker set name
	title: string; //Sticker set title
	sticker_type: string; //of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”
	stickers: Sticker[]; //List of all set stickers
	thumbnail?: PhotoSize; // Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
}

// This object describes the position on faces where a mask should be placed by default.
export interface MaskPosition {
	point: string; //part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
	x_shift: number; //by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
	y_shift: number; //Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
	scale: number; //Mask scaling coefficient. For example, 2.0 means double size.
}

// This object describes a sticker to be added to a sticker set.
export interface InputSticker {
	sticker: InputFile | string; //The added sticker. Pass a file_id as a string to send a file that already exists on the Telegram servers, pass an HTTP URL as a string for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files »
	format: string; //Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a .WEBM video
	emoji_list: string[]; //List of 1-20 emoji associated with the sticker
	mask_position?: MaskPosition; // Position where the mask should be placed on faces. For “mask” stickers only.
	keywords?: string[]; // List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.
}

// Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
export interface sendSticker {
	business_connection_id?: string; //	Unique identifier of the business connection on behalf of which the message will be sent
	chat_id: number | string; //	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
	message_thread_id?: number; //	Unique identifier for the target message thread(topic) of the forum; for forum supergroups only
	sticker: InputFile | string; //	Sticker to send.Pass a file_id as string to send a file that exists on the Telegram servers(recommended), pass an HTTP URL as a string for Telegram to get a.WEBP sticker from the Internet, or upload a new.WEBP, .TGS, or.WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL.
	emoji?: string; //	Emoji associated with the sticker; only for just uploaded stickers
	disable_notification?: boolean; //	Sends the message silently.Users will receive a notification with no sound.
	protect_content?: boolean; //	Protects the contents of the sent message from forwarding and saving
	allow_paid_broadcast?: boolean; //	Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message.The relevant Stars will be withdrawn from the bot's balance
	message_effect_id?: string; //	Unique identifier of the message effect to be added to the message; for private chats only
	reply_parameters?: ReplyParameters; //	Description of the message to reply to
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; //	Additional interface options. A JSON - serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
}

// Use this method to get a sticker set. On success, a StickerSet object is returned.
export interface getStickerSet {
	name: string; //	Name of the sticker set
}

// Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
export interface getCustomEmojiStickers {
	custom_emoji_ids: string[]; //	A JSON - serialized list of custom emoji identifiers.At most 200 custom emoji identifiers can be specified.
}

// Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.
export interface uploadStickerFile {
	user_id: number; //	User identifier of sticker file owner
	sticker: InputFile; //	A file with the sticker in .WEBP, .PNG, .TGS, or.WEBM format.See https://core.telegram.org/stickers for technical requirements. More information on Sending Files »
	sticker_format: string; //	Format of the sticker, must be one of “static”, “animated”, “video”
}

// Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
export interface createNewStickerSet {
	user_id: number; //	User identifier of created sticker set owner
	name: string; //	Short name of sticker set, to be used in t.me / addstickers / URLs(e.g., animals).Can contain only English letters, digits and underscores.Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
	title: string; //	Sticker set title, 1 - 64 characters
	stickers: InputSticker[]; //	A JSON - serialized list of 1 - 50 initial stickers to be added to the sticker set
	sticker_type?: string; //	Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
	needs_repainting?: boolean; //	Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
}

// Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
export interface addStickerToSet {
	user_id: number; //	User identifier of sticker set owner
	name: string; //	Sticker set name
	sticker: InputSticker; //	A JSON - serialized object with information about the added sticker.If exactly the same sticker had already been added to the set, then the set isn't changed.
}

// Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
export interface setStickerPositionInSet {
	sticker: string; //	File identifier of the sticker
	position: number; //	New sticker position in the set, zero - based
}

// Use this method to delete a sticker from a set created by the bot. Returns True on success.
export interface deleteStickerFromSet {
	sticker: string; //	File identifier of the sticker
}

// Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
export interface replaceStickerInSet {
	user_id: number; //	User identifier of the sticker set owner
	name: string; //	Sticker set name
	old_sticker: string; //	File identifier of the replaced sticker
	sticker: InputSticker; //	A JSON - serialized object with information about the added sticker.If exactly the same sticker had already been added to the set, then the set remains unchanged.
}

// Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
export interface setStickerEmojiList {
	sticker: string; //	File identifier of the sticker
	emoji_list: string[]; //	A JSON - serialized list of 1 - 20 emoji associated with the sticker
}

// Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
export interface setStickerKeywords {
	sticker: string; //	File identifier of the sticker
	keywords?: string[]; //	A JSON - serialized list of 0 - 20 search keywords for the sticker with total length of up to 64 characters
}

// Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
export interface setStickerMaskPosition {
	sticker: string; //	File identifier of the sticker
	mask_position?: MaskPosition; //	A JSON - serialized object with the position where the mask should be placed on faces.Omit the parameter to remove the mask position.
}

// Use this method to set the title of a created sticker set. Returns True on success.
export interface setStickerSetTitle {
	name: string; //	Sticker set name
	title: string; //	Sticker set title, 1 - 64 characters
}

// Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
export interface setStickerSetThumbnail {
	name: string; //	Sticker set name
	user_id: number; //	User identifier of the sticker set owner
	thumbnail?: InputFile | string; //	A.WEBP or.PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a.TGS animation with a thumbnail up to 32 kilobytes in size(see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a string to send a file that already exists on the Telegram servers, pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
	format: string; //	Format of the thumbnail, must be one of “static” for a.WEBP or.PNG image, “animated” for a.TGS animation, or “video” for a.WEBM video
}

// Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
export interface setCustomEmojiStickerSetThumbnail {
	name: string; //	Sticker set name
	custom_emoji_id?: string; //	Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
}

// Use this method to delete a sticker set that was created by the bot. Returns True on success.
export interface deleteStickerSet {
	name: string; //	Sticker set name
}

// This object represents a gift that can be sent by the bot.
export interface Gift {
	id: string; //identifier of the gift
	sticker: Sticker; //sticker that represents the gift
	star_count: number; //number of Telegram Stars that must be paid to send the sticker
	upgrade_star_count: number; //The number of Telegram Stars that must be paid to upgrade the gift to a unique one
	total_count: number; //The total number of the gifts of this type that can be sent; for limited gifts only
	remaining_count: number; //The number of remaining gifts of this type that can be sent; for limited gifts only
}

// This object represent a list of gifts.
export interface Gifts {
	gifts: Gift[]; //list of gifts
}

// Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.
export interface getAvailableGifts {}

// Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success.
export interface sendGift {
	user_id?: number; //	Required if chat_id is not specified.Unique identifier of the target user who will receive the gift.
	chat_id?: number | string; //	Required if user_id is not specified.Unique identifier for the chat or username of the channel(in the format @channelusername) that will receive the gift.
	gift_id: string; //	Identifier of the gift
	pay_for_upgrade?: boolean; //	Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver
	text?: string; //	Text that will be shown along with the gift; 0 - 128 characters
	text_parse_mode?: string; //	Mode for parsing entities in the text.See formatting options for more details.Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
	text_entities?: MessageEntity[]; //	A JSON - serialized list of special entities that appear in the gift text.It can be specified instead of text_parse_mode.Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.
}

// Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
export interface verifyUser {
	user_id: number; //	Unique identifier of the target user
	custom_description?: string; //	Custom description for the verification; 0 - 70 characters.Must be empty if the organization isn't allowed to provide a custom verification description.
}

// Verifies a chat on behalf of the organization which is represented by the bot.Returns True on success.
export interface verifyChat {
	chat_id: number | string; //	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
	custom_description?: string; //	Custom description for the verification; 0 - 70 characters.Must be empty if the organization isn't allowed to provide a custom verification description.
}

// Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
export interface removeUserVerification {
	user_id: number; //	Unique identifier of the target user
}

// Removes verification from a chat that is currently verified on behalf of the organization represented by the bot.Returns True on success.
export interface removeChatVerification {
	chat_id: number | string; //	Unique identifier for the target chat or username of the target channel(in the format @channelusername)
}
