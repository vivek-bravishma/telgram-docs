// ============================== Available types ==============================
// All types used in the Bot API responses are represented as JSON-objects.
// It is safe to use 32-bit signed integers for storing all integer fields unless otherwise noted.
// Optional fields may be not returned when irrelevant.

import {
	BaseMessageOrigin,
	ChatTypes,
	Coordinates,
	Dimensions,
	MessageEntityType,
	ParseMode,
	PollType,
	TgFile,
} from './Common';
import { CallbackGame, Game } from './Games';
import { Invoice, RefundedPayment, SuccessfulPayment } from './Payments';
import { Sticker } from './Stickers';
import { PassportData } from './TelegramPassport';

// This object represents a Telegram user or bot.
export interface User {
	id: number; // Unique identifier for this user or bot.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so a 64 - bit integer or double - precision float type are safe for storing this identifier.
	is_bot: boolean; // True, if this user is a bot
	first_name: string; // User's or bot's first name
	last_name?: string; // User's or bot's last name
	username?: string; // User's or bot's username
	language_code?: string; // IETF language tag of the user's language
	is_premium?: boolean; // True, if this user is a Telegram Premium user
	added_to_attachment_menu?: boolean; // True, if this user added the bot to the attachment menu
	can_join_groups?: boolean; // True, if the bot can be invited to groups.Returned only in getMe.
	can_read_all_group_messages?: boolean; // True, if privacy mode is disabled for the bot.Returned only in getMe.
	supports_inline_queries?: boolean; // True, if the bot supports inline queries.Returned only in getMe.
	can_connect_to_business?: boolean; // True, if the bot can be connected to a Telegram Business account to receive its messages.Returned only in getMe.
	has_main_web_app?: boolean; // True, if the bot has a main Web App.Returned only in getMe.
}

// This object represents a chat.
export interface Chat {
	id: number; // Unique identifier for this chat.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so a signed 64 - bit integer or double - precision float type are safe for storing this identifier.
	type: ChatTypes; // Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
	title?: string; // Title, for supergroups, channels and group chats
	username?: string; // Username, for private chats, supergroups and channels if available
	first_name?: string; // First name of the other party in a private chat
	last_name?: string; // Last name of the other party in a private chat
	is_forum?: boolean; // True, if the supergroup chat is a forum(has topics enabled)
}

// This object contains full information about a chat.
export interface ChatFullInfo extends Chat {
	accent_color_id: number; // Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview.See accent colors for more details.
	max_reaction_count: number; // The maximum number of reactions that can be set on a message in the chat
	photo?: ChatPhoto; // Chat photo
	active_usernames?: string[]; // If non - empty, the list of all active chat usernames; for private chats, supergroups and channels
	birthdate?: Birthdate; // For private chats, the date of birth of the user
	business_intro?: BusinessIntro; // For private chats with business accounts, the intro of the business
	business_location?: BusinessLocation; // For private chats with business accounts, the location of the business
	business_opening_hours?: BusinessOpeningHours; // For private chats with business accounts, the opening hours of the business
	personal_chat?: Chat; // For private chats, the personal channel of the user
	available_reactions?: ReactionType[]; // List of available reactions allowed in the chat.If omitted, then all emoji reactions are allowed.
	background_custom_emoji_id?: string; // Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
	profile_accent_color_id?: number; // Identifier of the accent color for the chat's profile background. See profile accent colors for more details.
	profile_background_custom_emoji_id?: string; // Custom emoji identifier of the emoji chosen by the chat for its profile background
	emoji_status_custom_emoji_id?: string; // Custom emoji identifier of the emoji status of the chat or the other party in a private chat
	emoji_status_expiration_date?: number; // Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
	bio?: string; // Bio of the other party in a private chat
	has_private_forwards?: boolean; // True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user
	has_restricted_voice_and_video_messages?: boolean; // True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
	join_to_send_messages?: boolean; // True, if users need to join the supergroup before they can send messages
	join_by_request?: boolean; // True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators
	description?: string; // Description, for groups, supergroups and channel chats
	invite_link?: string; // Primary invite link, for groups, supergroups and channel chats
	pinned_message?: Message; // The most recent pinned message(by sending date)
	permissions?: ChatPermissions; // Default chat member permissions, for groups and supergroups
	accepted_gift_types: AcceptedGiftTypes; // Information about types of gifts that are accepted by the chat or by the corresponding user for private chats
	can_send_paid_media?: boolean; // True, if paid media messages can be sent or forwarded to the channel chat.The field is available only for channel chats.
	slow_mode_delay?: number; // For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
	unrestrict_boost_count?: number; // For supergroups, the minimum number of boosts that a non - administrator user needs to add in order to ignore slow mode and chat permissions
	message_auto_delete_time?: number; // The time after which all messages sent to the chat will be automatically deleted; in seconds
	has_aggressive_anti_spam_enabled?: boolean; // True, if aggressive anti - spam checks are enabled in the supergroup.The field is only available to chat administrators.
	has_hidden_members?: boolean; // True, if non - administrators can only get the list of bots and administrators in the chat
	has_protected_content?: boolean; // True, if messages from the chat can't be forwarded to other chats
	has_visible_history?: boolean; // True, if new chat members will have access to old messages; available only to chat administrators
	sticker_set_name?: string; // For supergroups, name of the group sticker set
	can_set_sticker_set?: boolean; // True, if the bot can change the group sticker set
	custom_emoji_sticker_set_name?: string; // For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
	linked_chat_id?: number; // Unique identifier for the linked chat, i.e.the discussion group identifier for a channel and vice versa; for supergroups and channel chats.This identifier may be greater than 32 bits and some programming languages may have difficulty / silent defects in interpreting it.But it is smaller than 52 bits, so a signed 64 bit integer or double - precision float type are safe for storing this identifier.
	location?: ChatLocation; // For supergroups, the location to which the supergroup is connected
}

// This object represents a message.
export interface Message extends MessageId {
	message_thread_id?: number; // Unique identifier of a message thread to which the message belongs; for supergroups only
	from?: User; // Sender of the message; may be empty for messages sent to channels.For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non - channel chats
	sender_chat?: Chat; // Sender of the message when sent on behalf of a chat.For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.
	sender_boost_count?: number; // If the sender of the message boosted the chat, the number of boosts added by the user
	sender_business_bot?: User; // The bot that actually sent the message on behalf of the business account.Available only for outgoing messages sent on behalf of the connected business account.
	date: number; // Date the message was sent in Unix time.It is always a positive number, representing a valid date.
	business_connection_id?: string; // Unique identifier of the business connection from which the message was received.If non - empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
	chat: Chat; // Chat the message belongs to
	forward_origin?: MessageOrigin; // Information about the original message for forwarded messages
	is_topic_message?: boolean; // True, if the message is sent to a forum topic
	is_automatic_forward?: boolean; // True, if the message is a channel post that was automatically forwarded to the connected discussion group
	reply_to_message?: Message; // For replies in the same chat and message thread, the original message.Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
	external_reply?: ExternalReplyInfo; // Information about the message that is being replied to, which may come from another chat or forum topic
	quote?: TextQuote; // For replies that quote part of the original message, the quoted part of the message
	reply_to_story?: Story; // For replies to a story, the original story
	via_bot?: User; // Bot through which the message was sent
	edit_date?: number; // Date the message was last edited in Unix time
	has_protected_content?: boolean; // True, if the message can't be forwarded
	is_from_offline?: boolean; // True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message
	media_group_id?: string; // The unique identifier of a media message group this message belongs to
	author_signature?: string; // Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
	paid_star_count?: number; // The number of Telegram Stars that were paid by the sender of the message to send it
	text?: string; // For text messages, the actual UTF - 8 text of the message
	entities?: MessageEntity[]; // For text messages, special entities like usernames, URLs, bot commands, etc.that appear in the text
	link_preview_options?: LinkPreviewOptions; // Options used for link preview generation for the message, if it is a text message and link preview options were changed
	effect_id?: string; // Unique identifier of the message effect added to the message
	animation?: Animation; // Message is an animation, information about the animation.For backward compatibility, when this field is set, the document field will also be set
	audio?: Audio; // Message is an audio file, information about the file
	document?: Document; // Message is a general file, information about the file
	paid_media?: PaidMediaInfo; // Message contains paid media; information about the paid media
	photo?: PhotoSize[]; // Message is a photo, available sizes of the photo
	sticker?: Sticker; // Message is a sticker, information about the sticker
	story?: Story; // Message is a forwarded story
	video?: Video; // Message is a video, information about the video
	video_note?: VideoNote; // Message is a video note, information about the video message
	voice?: Voice; // Message is a voice message, information about the file
	caption?: string; // Caption for the animation, audio, document, paid media, photo, video or voice
	caption_entities?: MessageEntity[]; // For messages with a caption, special entities like usernames, URLs, bot commands, etc.that appear in the caption
	show_caption_above_media?: boolean; // True, if the caption must be shown above the message media
	has_media_spoiler?: boolean; // True, if the message media is covered by a spoiler animation
	contact?: Contact; // Message is a shared contact, information about the contact
	dice?: Dice; // Message is a dice with random value
	game?: Game; // Message is a game, information about the game.More about games »
	poll?: Poll; // Message is a native poll, information about the poll
	venue?: Venue; // Message is a venue, information about the venue.For backward compatibility, when this field is set, the location field will also be set
	location?: Location; // Message is a shared location, information about the location
	new_chat_members?: User[]; // New members that were added to the group or supergroup and information about them(the bot itself may be one of these members)
	left_chat_member?: User; // A member was removed from the group, information about them(this member may be the bot itself)
	new_chat_title?: string; // A chat title was changed to this value
	new_chat_photo?: PhotoSize[]; // A chat photo was change to this value
	delete_chat_photo?: boolean; // Service message: the chat photo was deleted
	group_chat_created?: boolean; // Service message: the group has been created
	supergroup_chat_created?: boolean; // Service message: the supergroup has been created.This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created.It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
	channel_chat_created?: boolean; // Service message: the channel has been created.This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created.It can only be found in reply_to_message if someone replies to a very first message in a channel.
	message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged; // Service message: auto - delete timer settings changed in the chat
	migrate_to_chat_id?: number; // The group has been migrated to a supergroup with the specified identifier.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so a signed 64 - bit integer or double - precision float type are safe for storing this identifier.
	migrate_from_chat_id?: number; // The supergroup has been migrated from a group with the specified identifier.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so a signed 64 - bit integer or double - precision float type are safe for storing this identifier.
	pinned_message?: MaybeInaccessibleMessage; // Specified message was pinned.Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
	invoice?: Invoice; // Message is an invoice for a payment, information about the invoice.More about payments »
	successful_payment?: SuccessfulPayment; // Message is a service message about a successful payment, information about the payment.More about payments »
	refunded_payment?: RefundedPayment; // Message is a service message about a refunded payment, information about the payment.More about payments »
	users_shared?: UsersShared; // Service message: users were shared with the bot
	chat_shared?: ChatShared; // Service message: a chat was shared with the bot
	gift?: GiftInfo; // Service message: a regular gift was sent or received
	unique_gift?: UniqueGiftInfo; // Service message: a unique gift was sent or received
	connected_website?: string; // The domain name of the website on which the user has logged in.More about Telegram Login »
	write_access_allowed?: WriteAccessAllowed; // Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess
	passport_data?: PassportData; // Telegram Passport data
	proximity_alert_triggered?: ProximityAlertTriggered; // Service message.A user in the chat triggered another user's proximity alert while sharing Live Location.
	boost_added?: ChatBoostAdded; // Service message: user boosted the chat
	chat_background_set?: ChatBackground; // Service message: chat background set
	forum_topic_created?: ForumTopicCreated; // Service message: forum topic created
	forum_topic_edited?: ForumTopicEdited; // Service message: forum topic edited
	forum_topic_closed?: ForumTopicClosed; // Service message: forum topic closed
	forum_topic_reopened?: ForumTopicReopened; // Service message: forum topic reopened
	general_forum_topic_hidden?: GeneralForumTopicHidden; // Service message: the 'General' forum topic hidden
	general_forum_topic_unhidden?: GeneralForumTopicUnhidden; // Service message: the 'General' forum topic unhidden
	giveaway_created?: GiveawayCreated; // Service message: a scheduled giveaway was created
	giveaway?: Giveaway; // The message is a scheduled giveaway message
	giveaway_winners?: GiveawayWinners; // A giveaway with public winners was completed
	giveaway_completed?: GiveawayCompleted; // Service message: a giveaway without public winners was completed
	paid_message_price_changed?: PaidMessagePriceChanged; // Service message: the price for paid messages has changed in the chat
	video_chat_scheduled?: VideoChatScheduled; // Service message: video chat scheduled
	video_chat_started?: VideoChatStarted; // Service message: video chat started
	video_chat_ended?: VideoChatEnded; // Service message: video chat ended
	video_chat_participants_invited?: VideoChatParticipantsInvited; // Service message: new participants invited to a video chat
	web_app_data?: WebAppData; // Service message: data sent by a Web App
	reply_markup?: InlineKeyboardMarkup; // Inline keyboard attached to the message.login_url buttons are represented as ordinary url buttons.
}

// This object represents a unique message identifier.
export interface MessageId {
	message_id: number; // Unique message identifier.In specific instances(e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately.In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
}

// This object describes a message that was deleted or is otherwise inaccessible to the bot.
export interface InaccessibleMessage extends MessageId {
	chat: Chat; // Chat the message belonged to
	date: number; // Always 0. The field can be used to differentiate regular and inaccessible messages.
}

// This object describes a message that can be inaccessible to the bot. It can be one of
export type MaybeInaccessibleMessage = Message | InaccessibleMessage;

// This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
export interface MessageEntity {
	type: MessageEntityType; // Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag or #hashtag@chatusername), “cashtag” ($USD or $USD@chatusername), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)
	offset: number; // Offset in UTF-16 code units to the start of the entity
	length: number; // Length of the entity in UTF-16 code units
	url?: string; // For “text_link” only, URL that will be opened after user taps on the text
	user?: User; // For “text_mention” only, the mentioned user
	language?: string; // For “pre” only, the programming language of the entity text
	custom_emoji_id?: string; // For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
}

// This object contains information about the quoted part of a message that is replied to by the given message.
export interface TextQuote {
	text: string; // Text of the quoted part of a message that is replied to by the given message
	entities?: MessageEntity[]; // Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes.
	position: number; // Approximate quote position in the original message in UTF-16 code units as specified by the sender
	is_manual?: boolean; // True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
}

// This object contains information about a message that is being replied to, which may come from another chat or forum topic.
export interface ExternalReplyInfo {
	origin: MessageOrigin; // Origin of the message replied to by the given message
	chat?: Chat; // Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
	message_id?: number; // Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
	link_preview_options?: LinkPreviewOptions; // Options used for link preview generation for the original message, if it is a text message
	animation?: Animation; // Message is an animation, information about the animation
	audio?: Audio; // Message is an audio file, information about the file
	document?: Document; // Message is a general file, information about the file
	paid_media?: PaidMediaInfo; // Message contains paid media; information about the paid media
	photo?: PhotoSize[]; // Message is a photo, available sizes of the photo
	sticker?: Sticker; // Message is a sticker, information about the sticker
	story?: Story; // Message is a forwarded story
	video?: Video; // Message is a video, information about the video
	video_note?: VideoNote; // Message is a video note, information about the video message
	voice?: Voice; // Message is a voice message, information about the file
	has_media_spoiler?: boolean; // True, if the message media is covered by a spoiler animation
	contact?: Contact; // Message is a shared contact, information about the contact
	dice?: Dice; // Message is a dice with random value
	game?: Game; // Message is a game, information about the game. More about games »
	giveaway?: Giveaway; // Message is a scheduled giveaway, information about the giveaway
	giveaway_winners?: GiveawayWinners; // A giveaway with public winners was completed
	invoice?: Invoice; // Message is an invoice for a payment, information about the invoice. More about payments »
	location?: Location; // Message is a shared location, information about the location
	poll?: Poll; // Message is a native poll, information about the poll
	venue?: Venue; // Message is a venue, information about the venue
}

// Describes reply parameters for the message that is being sent.
export interface ReplyParameters extends MessageId {
export interface ReplyParameters extends MessageId {
	chat_id?: number | string; // If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account.
	allow_sending_without_reply?: boolean; // Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.
	quote?: string; // Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message.
	quote_parse_mode?: ParseMode; // Mode for parsing entities in the quote. See formatting options for more details.
	quote_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.
	quote_position?: number; // Position of the quote in the original message in UTF-16 code units
}

// This object describes the origin of a message.It can be one of
export type MessageOrigin =
	| MessageOriginUser
	| MessageOriginHiddenUser
	| MessageOriginChat
	| MessageOriginChannel;

// The message was originally sent by a known user.
export interface MessageOriginUser extends BaseMessageOrigin {
	type: 'user'; // Type of the message origin, always “user”
	sender_user: User; // User that sent the message originally
}

// The message was originally sent by an unknown user.
export interface MessageOriginHiddenUser extends BaseMessageOrigin {
	type: 'hidden_user'; // Type of the message origin, always “hidden_user”
	sender_user_name: string; // Name of the user that sent the message originally
}

// The message was originally sent on behalf of a chat to a group chat.
export interface MessageOriginChat {
	type: string; // Type of the message origin, always “chat”
	date: number; // Date the message was sent originally in Unix time
	sender_chat: Chat; // Chat that sent the message originally
	author_signature?: string; // For messages originally sent by an anonymous chat administrator, original message author signature
}

// The message was originally sent to a channel chat.
export interface MessageOriginChannel extends MessageId, BaseMessageOrigin {
	type: 'channel'; // Type of the message origin, always “channel”
	chat: Chat; // Channel chat to which the message was originally sent
	author_signature?: string; // Signature of the original post author
}

// This object represents one size of a photo or a file / sticker thumbnail.
export interface PhotoSize {
	file_id: string; // Identifier for this file, which can be used to download or reuse the file
	file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots.Can't be used to download or reuse the file.
	width: number; // Photo width
	height: number; // Photo height
	file_size?: number; // File size in bytes
}

// This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
export interface Animation extends Dimensions, Omit<TgFile, 'file_path'> {
	duration: number; // Duration of the video in seconds as defined by the sender
	thumbnail?: PhotoSize; // Animation thumbnail as defined by the sender
}

// This object represents an audio file to be treated as music by the Telegram clients.
export interface Audio extends Omit<TgFile, 'file_path'> {
	duration: number; // Duration of the audio in seconds as defined by the sender
	performer?: string; // Performer of the audio as defined by the sender or by audio tags
	title?: string; // Title of the audio as defined by the sender or by audio tags
	thumbnail?: PhotoSize; // Thumbnail of the album cover to which the music file belongs
}

// This object represents a general file (as opposed to photos, voice messages and audio files).
export interface Document extends Omit<TgFile, 'file_path'> {
	thumbnail?: PhotoSize; // Document thumbnail as defined by the sender
}

// This object represents a story.
export interface Story {
	chat: Chat; // Chat that posted the story
	id: number; // Unique identifier for the story in the chat
}

// This object represents a video file.
export interface Video extends Dimensions, Omit<TgFile, 'file_path'> {
	duration: number; // Duration of the video in seconds as defined by the sender
	thumbnail?: PhotoSize; // Video thumbnail
	cover?: PhotoSize[]; // Available sizes of the cover of the video in the message
	start_timestamp?: number; // Timestamp in seconds from which the video will play in the message
}

// This object represents a video message (available in Telegram apps as of v.4.0).
export interface VideoNote extends Omit<TgFile, 'file_path' | 'file_name' | 'mime_type'> {
	length: number; // Video width and height(diameter of the video message) as defined by the sender
	duration: number; // Duration of the video in seconds as defined by the sender
	thumbnail?: PhotoSize; // Video thumbnail
}

// This object represents a voice note.
export interface Voice extends Omit<TgFile, 'file_path' | 'file_name'> {
	duration: number; // Duration of the audio in seconds as defined by the sender
}

// Describes the paid media added to a message.
export interface PaidMediaInfo {
	star_count: number; // The number of Telegram Stars that must be paid to buy access to the media
	paid_media: PaidMedia[]; // Information about the paid media
}

// ====================

// This object describes paid media. Currently, it can be one of
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

// The paid media isn't available before the payment.
export interface PaidMediaPreview extends Partial<Dimensions> {
	type: 'preview'; // Type of the paid media, always “preview”
	duration?: number; // Duration of the media in seconds as defined by the sender
}

// The paid media is a photo.
export interface PaidMediaPhoto {
	type: 'photo'; // Type of the paid media, always “photo”
	photo: PhotoSize[]; // The photo
}

// The paid media is a video.
export interface PaidMediaVideo {
	type: 'video'; // Type of the paid media, always “video”
	video: Video; // The video
}

// This object represents a phone contact.
export interface Contact {
	phone_number: string; // Contact's phone number
	first_name: string; // Contact's first name
	last_name?: string; // Contact's last name
	user_id?: number; // Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
	vcard?: string; // Additional data about the contact in the form of a vCard
}

// This object represents an animated emoji that displays a random value.
export interface Dice {
	emoji: string; // Emoji on which the dice throw animation is based
	value: number; // Value of the dice, 1 - 6 for “🎲”, “🎯” and “🎳” base emoji, 1 - 5 for “🏀” and “⚽” base emoji, 1 - 64 for “🎰” base emoji
}

// This object contains information about one answer option in a poll.
export interface PollOption {
	text: string; // Option text, 1 - 100 characters
	text_entities?: MessageEntity[]; // Special entities that appear in the option text.Currently, only custom emoji entities are allowed in poll option texts
	voter_count: number; // Number of users that voted for this option
}

// This object contains information about one answer option in a poll to be sent.
export interface InputPollOption {
	text: string; // Option text, 1 - 100 characters
	text_parse_mode?: string; // Mode for parsing entities in the text.See formatting options for more details.Currently, only custom emoji entities are allowed
	text_entities?: MessageEntity[]; // A JSON - serialized list of special entities that appear in the poll option text.It can be specified instead of text_parse_mode
}

// This object represents an answer of a user in a non-anonymous poll.
export interface PollAnswer {
	poll_id: string; // Unique poll identifier
	voter_chat?: Chat; // The chat that changed the answer to the poll, if the voter is anonymous
	user?: User; // The user that changed the answer to the poll, if the voter isn't anonymous
	option_ids: number[]; // 0 - based identifiers of chosen answer options.May be empty if the vote was retracted.
}

// This object contains information about a poll.
export interface Poll {
	id: string; // Unique poll identifier
	question: string; // Poll question, 1 - 300 characters
	question_entities?: MessageEntity[]; // Special entities that appear in the question.Currently, only custom emoji entities are allowed in poll questions
	options: PollOption[]; // List of poll options
	total_voter_count: number; // Total number of users that voted in the poll
	is_closed: boolean; // True, if the poll is closed
	is_anonymous: boolean; // True, if the poll is anonymous
	type: PollType; // Poll type, currently can be “regular” or “quiz”
	allows_multiple_answers: boolean; // True, if the poll allows multiple answers
	correct_option_id?: number; //  0 - based identifier of the correct answer option.Available only for polls in the quiz mode, which are closed, or was sent(not forwarded) by the bot or to the private chat with the bot.
	explanation?: string; // Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz - style poll, 0 - 200 characters
	explanation_entities?: MessageEntity[]; // Special entities like usernames, URLs, bot commands, etc.that appear in the explanation
	open_period?: number; // Amount of time in seconds the poll will be active after creation
	close_date?: number; // Point in time(Unix timestamp) when the poll will be automatically closed
}

// This object represents a point on the map.
export interface Location extends Coordinates {
	horizontal_accuracy?: number; // The radius of uncertainty for the location, measured in meters; 0 - 1500
	live_period?: number; // Time relative to the message sending date, during which the location can be updated; in seconds.For active live locations only.
	heading?: number; // The direction in which user is moving, in degrees; 1 - 360. For active live locations only.
	proximity_alert_radius?: number; // The maximum distance for proximity alerts about approaching another chat member, in meters.For sent live locations only.
}

// This object represents a venue.
export interface Venue {
	location: Location; // Venue location.Can't be a live location
	title: string; // Name of the venue
	address: string; // Address of the venue
	foursquare_id?: string; // Foursquare identifier of the venue
	foursquare_type?: string; // Foursquare type of the venue. (For example, “arts_entertainment /default”, “arts_entertainment / aquarium” or “food / icecream”.)
	google_place_id?: string; // Google Places identifier of the venue
	google_place_type?: string; // Google Places type of the venue. (See supported types.)
}

// Describes data sent from a Web App to the bot.
export interface WebAppData {
	data: string; // The data.Be aware that a bad client can send arbitrary data in this field.
	button_text: string; // Text of the web_app keyboard button from which the Web App was opened.Be aware that a bad client can send arbitrary data in this field.
}

// This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
export interface ProximityAlertTriggered {
	traveler: User; // User that triggered the alert
	watcher: User; // User that set the alert
	distance: number; // The distance between the users
}

// This object represents a service message about a change in auto-delete timer settings.
export interface MessageAutoDeleteTimerChanged {
	message_auto_delete_time: number; // New auto - delete time for messages in the chat; in seconds
}

// This object represents a service message about a user boosting a chat.
export interface ChatBoostAdded {
	boost_count: number; // Number of boosts added by the user
}

// =======================

// This object describes the way a background is filled based on the selected colors. Currently, it can be one of
export type BackgroundFill =
	| BackgroundFillSolid
	| BackgroundFillGradient
	| BackgroundFillFreeformGradient;

// The background is filled using the selected color.
export interface BackgroundFillSolid {
	type: 'solid'; // Type of the background fill, always “solid”
	color: number; // The color of the background fill in the RGB24 format
}

// The background is a gradient fill.
export interface BackgroundFillGradient {
	type: 'gradient'; // Type of the background fill, always “gradient”
	top_color: number; // Top color of the gradient in the RGB24 format
	bottom_color: number; // Bottom color of the gradient in the RGB24 format
	rotation_angle: number; // Clockwise rotation angle of the background fill in degrees; 0 - 359
}

// The background is a freeform gradient that rotates after every message in the chat.
export interface BackgroundFillFreeformGradient {
	type: 'freeform_gradient'; // Type of the background fill, always “freeform_gradient”
	colors: number[]; // A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
}

// =======================

// This object describes the type of a background. Currently, it can be one of

export type BackgroundType =
	| BackgroundTypeFill
	| BackgroundTypeWallpaper
	| BackgroundTypePattern
	| BackgroundTypeChatTheme;

// The background is automatically filled based on the selected colors.
export interface BackgroundTypeFill {
	type: 'fill'; // Type of the background, always “fill”
	fill: BackgroundFill; // The background fill
	dark_theme_dimming: number; // Dimming of the background in dark themes, as a percentage; 0 - 100
}

// The background is a wallpaper in the JPEG format.
export interface BackgroundTypeWallpaper {
	type: 'wallpaper'; // Type of the background, always “wallpaper”
	document: Document; // Document with the wallpaper
	dark_theme_dimming: number; // Dimming of the background in dark themes, as a percentage; 0 - 100
	is_blurred?: boolean; // True, if the wallpaper is downscaled to fit in a 450x450 square and then box - blurred with radius 12
	is_moving?: boolean; // True, if the background moves slightly when the device is tilted
}

// The background is a .PNG or .TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.
export interface BackgroundTypePattern {
	type: 'pattern'; // Type of the background, always “pattern”
	document: Document; // Document with the pattern
	fill: BackgroundFill; // The background fill that is combined with the pattern
	intensity: number; // Intensity of the pattern when it is shown above the filled background; 0 - 100
	is_inverted?: boolean; // True, if the background fill must be applied only to the pattern itself.All other pixels are black in this case. For dark themes only
	is_moving?: boolean; // True, if the background moves slightly when the device is tilted
}

// The background is taken directly from a built-in chat theme.
export interface BackgroundTypeChatTheme {
	type: 'chat_theme'; // Type of the background, always “chat_theme”
	theme_name: string; // Name of the chat theme, which is usually an emoji
}

// This object represents a chat background.
export interface ChatBackground {
	type: BackgroundType; // Type of the background
}

// This object represents a service message about a new forum topic created in the chat.
export interface ForumTopicCreated {
	name: string; // Name of the topic
	icon_color: number; // Color of the topic icon in RGB format
	icon_custom_emoji_id?: string; // Unique identifier of the custom emoji shown as the topic icon
}

// This object represents a service message about a forum topic closed in the chat. Currently holds no information.
export interface ForumTopicClosed {}

// This object represents a service message about an edited forum topic.
export interface ForumTopicEdited {
	name?: string; // New name of the topic, if it was edited
	icon_custom_emoji_id?: string; // New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
}

// ==============

// This object represents a service message about a forum topic reopened in the chat. Currently holds no information.
export interface ForumTopicReopened {}

// This object represents a service message about General forum topic hidden in the chat. Currently holds no information.
export interface GeneralForumTopicHidden {}

// This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.
export interface GeneralForumTopicUnhidden {}

// This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.
export interface SharedUser {
	user_id: number; // Identifier of the shared user.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so 64 - bit numbers or double - precision float types are safe for storing these identifiers.The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.
	first_name?: string; // First name of the user, if the name was requested by the bot
	last_name?: string; // Last name of the user, if the name was requested by the bot
	username?: string; // Username of the user, if the username was requested by the bot
	photo?: PhotoSize[]; // Available sizes of the chat photo, if the photo was requested by the bot
}

// This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.
export interface UsersShared {
	request_id: number; // Identifier of the request
	users: SharedUser[]; // Information about users shared with the bot.
}

// This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.
export interface ChatShared {
	request_id: number; // Identifier of the request
	chat_id: number; // Identifier of the shared chat.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so a 64 - bit number or double - precision float type are safe for storing this identifier.The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.
	title?: string; // Title of the chat, if the title was requested by the bot.
	username?: string; // Username of the chat, if the username was requested by the bot and available.
	photo?: PhotoSize[]; // Available sizes of the chat photo, if the photo was requested by the bot
}

// This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
export interface WriteAccessAllowed {
	from_request?: boolean; // True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess
	web_app_name?: string; // Name of the Web App, if the access was granted when the Web App was launched from a link
	from_attachment_menu?: boolean; // True, if the access was granted when the bot was added to the attachment or side menu
}

// This object represents a service message about a video chat scheduled in the chat.
export interface VideoChatScheduled {
	start_date: number; // Point in time(Unix timestamp) when the video chat is supposed to be started by a chat administrator
}

// This object represents a service message about a video chat started in the chat. Currently holds no information.
export interface VideoChatStarted {}

// This object represents a service message about a video chat ended in the chat.
export interface VideoChatEnded {
	duration: number; // Video chat duration in seconds
}

// This object represents a service message about new members invited to a video chat.
export interface VideoChatParticipantsInvited {
	users: User[]; // New members that were invited to the video chat
}

// Describes a service message about a change in the price of paid messages within a chat.
export interface PaidMessagePriceChanged {
	paid_message_star_count: number; // The new number of Telegram Stars that must be paid by non - administrator users of the supergroup chat for each sent message
}

// This object represents a service message about the creation of a scheduled giveaway.
export interface GiveawayCreated {
	prize_star_count?: number; // The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
}

// This object represents a message about a scheduled giveaway.
export interface Giveaway {
	chats: Chat[]; // The list of chats which the user must join to participate in the giveaway
	winners_selection_date: number; // Point in time(Unix timestamp) when winners of the giveaway will be selected
	winner_count: number; // The number of users which are supposed to be selected as winners of the giveaway
	only_new_members?: boolean; // True, if only users who join the chats after the giveaway started should be eligible to win
	has_public_winners?: boolean; // True, if the list of giveaway winners will be visible to everyone
	prize_description?: string; // Description of additional giveaway prize
	country_codes?: string[]; // A list of two - letter ISO 3166 - 1 alpha - 2 country codes indicating the countries from which eligible users for the giveaway must come.If empty, then all users can participate in the giveaway.Users with a phone number that was bought on Fragment can always participate in giveaways.
	prize_star_count?: number; // The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
	premium_subscription_month_count?: number; // The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
}

// This object represents a message about the completion of a giveaway with public winners.
export interface GiveawayWinners {
	chat: Chat; // The chat that created the giveaway
	giveaway_message_id: number; // Identifier of the message with the giveaway in the chat
	winners_selection_date: number; // Point in time(Unix timestamp) when winners of the giveaway were selected
	winner_count: number; // Total number of winners in the giveaway
	winners: User[]; // List of up to 100 winners of the giveaway
	additional_chat_count?: number; // The number of other chats the user had to join in order to be eligible for the giveaway
	prize_star_count?: number; // The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
	premium_subscription_month_count?: number; // The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
	unclaimed_prize_count?: number; // Number of undistributed prizes
	only_new_members?: boolean; // True, if only users who had joined the chats after the giveaway started were eligible to win
	was_refunded?: boolean; // True, if the giveaway was canceled because the payment for it was refunded
	prize_description?: string; // Description of additional giveaway prize
}

// This object represents a service message about the completion of a giveaway without public winners.
export interface GiveawayCompleted {
	winner_count: number; // Number of winners in the giveaway
	unclaimed_prize_count?: number; // Number of undistributed prizes
	giveaway_message?: Message; // Message with the giveaway that was completed, if it wasn't deleted
	is_star_giveaway?: boolean; // True, if the giveaway is a Telegram Star giveaway.Otherwise, currently, the giveaway is a Telegram Premium giveaway.
}

// Describes the options used for link preview generation.
export interface LinkPreviewOptions {
	is_disabled?: boolean; // True, if the link preview is disabled
	url?: string; // URL to use for the link preview.If empty, then the first URL found in the message text will be used
	prefer_small_media?: boolean; // True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
	prefer_large_media?: boolean; // True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
	show_above_text?: boolean; // True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text
}

// This object represent a user's profile pictures.
export interface UserProfilePhotos {
	total_count: number; // Total number of profile pictures the target user has
	photos: PhotoSize[][]; // Requested profile pictures(in up to 4 sizes each)
}

// This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
// The maximum file size to download is 20 MB
export interface File extends Omit<TgFile, 'file_name' | 'mime_type'> {}

// Describes a Web App.
export interface WebAppInfo {
	url: string; // An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps
}

// This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
export interface ReplyKeyboardMarkup {
	keyboard: KeyboardButton[]; // Array of button rows, each represented by an Array of KeyboardButton objects
	is_persistent?: boolean; // Requests clients to always show the keyboard when the regular keyboard is hidden.Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
	resize_keyboard?: boolean; // Requests clients to resize the keyboard vertically for optimal fit(e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
	one_time_keyboard?: boolean; // Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
	input_field_placeholder?: string; // The placeholder to be shown in the input field when the keyboard is active; 1 - 64 characters
	selective?: boolean; // Use this parameter if you want to show the keyboard to specific users only.Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
	//: Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
}

// This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, string can be used instead of this object to specify the button text.
export interface KeyboardButton {
	text: string; // Text of the button.If none of the optional fields are used, it will be sent as a message when the button is pressed
	request_users?: KeyboardButtonRequestUsers; // If specified, pressing the button will open a list of suitable users.Identifiers of selected users will be sent to the bot in a “users_shared” service message.Available in private chats only.
	request_chat?: KeyboardButtonRequestChat; // If specified, pressing the button will open a list of suitable chats.Tapping on a chat will send its identifier to the bot in a “chat_shared” service message.Available in private chats only.
	request_contact?: boolean; // If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
	request_location?: boolean; // If True, the user's current location will be sent when the button is pressed. Available in private chats only.
	request_poll?: KeyboardButtonPollType; // If specified, the user will be asked to create a poll and send it to the bot when the button is pressed.Available in private chats only.
	web_app?: WebAppInfo; // If specified, the described Web App will be launched when the button is pressed.The Web App will be able to send a “web_app_data” service message.Available in private chats only.
}
// Note: request_users and request_chat options will only work in Telegram versions released after 3 February, 2023. Older clients will display unsupported message.

// This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »
export interface KeyboardButtonRequestUsers {
	request_id: number; // Signed 32 - bit identifier of the request that will be received back in the UsersShared object.Must be unique within the message
	user_is_bot?: boolean; // Pass True to request bots, pass False to request regular users.If not specified, no additional restrictions are applied.
	user_is_premium?: boolean; // Pass True to request premium users, pass False to request non - premium users.If not specified, no additional restrictions are applied.
	max_quantity?: number; // The maximum number of users to be selected; 1 - 10. Defaults to 1.
	request_name?: boolean; // Pass True to request the users' first and last names
	request_username?: boolean; // Pass True to request the users' usernames
	request_photo?: boolean; // Pass True to request the users' photos
}

// This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ».
export interface KeyboardButtonRequestChat {
	request_id: number; // Signed 32 - bit identifier of the request, which will be received back in the ChatShared object.Must be unique within the message
	chat_is_channel: boolean; // Pass True to request a channel chat, pass False to request a group or a supergroup chat.
	chat_is_forum?: boolean; // Pass True to request a forum supergroup, pass False to request a non - forum chat.If not specified, no additional restrictions are applied.
	chat_has_username?: boolean; // Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username.If not specified, no additional restrictions are applied.
	chat_is_created?: boolean; // Pass True to request a chat owned by the user.Otherwise, no additional restrictions are applied.
	user_administrator_rights?: ChatAdministratorRights; // A JSON - serialized object listing the required administrator rights of the user in the chat.The rights must be a superset of bot_administrator_rights.If not specified, no additional restrictions are applied.
	bot_administrator_rights?: ChatAdministratorRights; // A JSON - serialized object listing the required administrator rights of the bot in the chat.The rights must be a subset of user_administrator_rights.If not specified, no additional restrictions are applied.
	bot_is_member?: boolean; // Pass True to request a chat with the bot as a member.Otherwise, no additional restrictions are applied.
	request_title?: boolean; // Pass True to request the chat's title
	request_username?: boolean; // Pass True to request the chat's username
	request_photo?: boolean; // Pass True to request the chat's photo
}

// This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
export interface KeyboardButtonPollType {
	type?: string; // If quiz is passed, the user will be allowed to create only polls in the quiz mode.If regular is passed, only regular polls will be allowed.Otherwise, the user will be allowed to create a poll of any type.
}

// Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.
export interface ReplyKeyboardRemove {
	remove_keyboard: boolean; // Requests clients to remove the custom keyboard(user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
	selective?: boolean; // Use this parameter if you want to remove the keyboard for specific users only.Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
	//: Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
}

// This object represents an inline keyboard that appears right next to the message it belongs to.
export interface InlineKeyboardMarkup {
	inline_keyboard: InlineKeyboardButton[][]; // Array of button rows, each represented by an Array of InlineKeyboardButton objects
}

// This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
export interface InlineKeyboardButton {
	text: string; // Label text on the button
	url?: string; // HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
	callback_data?: string; // Data to be sent in a callback query to the bot when the button is pressed, 1 - 64 bytes
	web_app?: WebAppInfo; // Description of the Web App that will be launched when the user presses the button.The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery.Available only in private chats between a user and the bot.Not supported for messages sent on behalf of a Telegram Business account.
	login_url?: LoginUrl; // An HTTPS URL used to automatically authorize the user.Can be used as a replacement for the Telegram Login Widget.
	switch_inline_query?: string; // If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted.Not supported for messages sent on behalf of a Telegram Business account.
	switch_inline_query_current_chat?: string; // If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field.May be empty, in which case only the bot's username will be inserted.
	//: This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account.
	switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat; // If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account.
	copy_text?: CopyTextButton; // Description of the button that copies the specified text to the clipboard.
	callback_game?: CallbackGame; // Description of the game that will be launched when the user presses the button.
	//: NOTE: This type of button must always be the first button in the first row.
	pay?: boolean; // Specify True, to send a Pay button.Substrings “⭐” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.
	//: NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
}

// This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:

// Telegram apps support these buttons as of version 5.7.
export interface LoginUrl {
	url: string; // An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed.If the user refuses to provide authorization data, the original URL without information about the user will be opened.The data added is the same as described in Receiving authorization data.
	//: NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
	forward_text?: string; // New text of the button in forwarded messages.
	bot_username?: string; // Username of a bot, which will be used for user authorization.See Setting up a bot for more details.If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot.See Linking your domain to the bot for more details.
	request_write_access?: boolean; // Pass True to request the permission for your bot to send messages to the user.
}

// This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
export interface SwitchInlineQueryChosenChat {
	query?: string; // The default inline query to be inserted in the input field.If left empty, only the bot's username will be inserted
	allow_user_chats?: boolean; // True, if private chats with users can be chosen
	allow_bot_chats?: boolean; // True, if private chats with bots can be chosen
	allow_group_chats?: boolean; // True, if group and supergroup chats can be chosen
	allow_channel_chats?: boolean; // True, if channel chats can be chosen
}

// This object represents an inline keyboard button that copies specified text to the clipboard.
export interface CopyTextButton {
	text: string; // The text to be copied to the clipboard; 1 - 256 characters
}

// This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
export interface CallbackQuery {
	id: string; // Unique identifier for this query
	from: User; // Sender
	message?: MaybeInaccessibleMessage; // Message sent by the bot with the callback button that originated the query
	inline_message_id?: string; // Identifier of the message sent via the bot in inline mode, that originated the query.
	chat_instance: string; // Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.Useful for high scores in games.
	data?: string; // Data associated with the callback button.Be aware that the message originated the query can contain no callback buttons with this data.
	game_short_name?: string; // Short name of a Game to be returned, serves as the unique identifier for the game
}
// NOTE: After the user presses a callback button, Telegram clients will display a progress bar until you call answerCallbackQuery. It is, therefore, necessary to react by calling answerCallbackQuery even if no notification to the user is needed (e.g., without specifying any of the optional parameters).

// Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.
export interface ForceReply {
	force_reply: boolean; // Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
	input_field_placeholder?: string; // The placeholder to be shown in the input field when the reply is active; 1 - 64 characters
	selective?: boolean; // Use this parameter if you want to force reply from specific users only.Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
}

// Example: A poll bot for groups runs in privacy mode (only receives commands, replies to its messages and mentions). There could be two ways to create a new poll:
// - Explain the user how to send a command with parameters (e.g. /newpoll question answer1 answer2). May be appealing for hardcore users but lacks modern day polish.
// - Guide the user through a step-by-step process. 'Please send me your question', 'Cool, now let's add the first answer option', 'Great. Keep adding answer options, then send /done when you're ready'.
// The last option is definitely more attractive. And if you use ForceReply in your bot's questions, it will receive the user's answers even if it only receives replies, commands and mentions - without any extra work for the user.

// This object represents a chat photo.
export interface ChatPhoto {
	small_file_id: string; // File identifier of small(160x160) chat photo.This file_id can be used only for photo download and only for as long as the photo is not changed.
	small_file_unique_id: string; // Unique file identifier of small(160x160) chat photo, which is supposed to be the same over time and for different bots.Can't be used to download or reuse the file.
	big_file_id: string; // File identifier of big(640x640) chat photo.This file_id can be used only for photo download and only for as long as the photo is not changed.
	big_file_unique_id: string; // Unique file identifier of big(640x640) chat photo, which is supposed to be the same over time and for different bots.Can't be used to download or reuse the file.
}

// Represents an invite link for a chat.
export interface ChatInviteLink {
	invite_link: string; // The invite link.If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
	creator: User; // Creator of the link
	creates_join_request: boolean; // True, if users joining the chat via the link need to be approved by chat administrators
	is_primary: boolean; // True, if the link is primary
	is_revoked: boolean; // True, if the link is revoked
	name?: string; // Invite link name
	expire_date?: number; // Point in time(Unix timestamp) when the link will expire or has been expired
	member_limit?: number; // The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1 - 99999
	pending_join_request_count?: number; // Number of pending join requests created using this link
	subscription_period?: number; // The number of seconds the subscription will be active for before the next payment
	subscription_price?: number; // The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
}

// Represents the rights of an administrator in a chat.
export interface ChatAdministratorRights {
	is_anonymous: boolean; // True, if the user's presence in the chat is hidden
	can_manage_chat: boolean; // True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode.Implied by any other administrator privilege.
	can_delete_messages: boolean; // True, if the administrator can delete messages of other users
	can_manage_video_chats: boolean; // True, if the administrator can manage video chats
	can_restrict_members: boolean; // True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
	can_promote_members: boolean; // True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly(promoted by administrators that were appointed by the user)
	can_change_info: boolean; // True, if the user is allowed to change the chat title, photo and other settings
	can_invite_users: boolean; // True, if the user is allowed to invite new users to the chat
	can_post_stories: boolean; // True, if the administrator can post stories to the chat
	can_edit_stories: boolean; // True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
	can_delete_stories: boolean; // True, if the administrator can delete stories posted by other users
	can_post_messages?: boolean; // True, if the administrator can post messages in the channel, or access channel statistics; for channels only
	can_edit_messages?: boolean; // True, if the administrator can edit messages of other users and can pin messages; for channels only
	can_pin_messages?: boolean; // True, if the user is allowed to pin messages; for groups and supergroups only
	can_manage_topics?: boolean; // True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
}

// This object represents changes in the status of a chat member.
export interface ChatMemberUpdated {
	chat: Chat; // Chat the user belongs to
	from: User; // Performer of the action, which resulted in the change
	date: number; // Date the change was done in Unix time
	old_chat_member: ChatMember; // Previous information about the chat member
	new_chat_member: ChatMember; // New information about the chat member
	invite_link?: ChatInviteLink; // Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
	via_join_request?: boolean; // True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator
	via_chat_folder_invite_link?: boolean; // True, if the user joined the chat via a chat folder invite link
}

// This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
export type ChatMember =
	| ChatMemberOwner
	| ChatMemberAdministrator
	| ChatMemberMember
	| ChatMemberRestricted
	| ChatMemberLeft
	| ChatMemberBanned;

// Represents a chat member that owns the chat and has all administrator privileges.
export interface ChatMemberOwner {
	status: 'creator'; // The member's status in the chat, always “creator”
	user: User; // Information about the user
	is_anonymous: boolean; // True, if the user's presence in the chat is hidden
	custom_title?: string; // Custom title for this user
}

// Represents a chat member that has some additional privileges.
export interface ChatMemberAdministrator {
	status: 'administrator'; // The member's status in the chat, always “administrator”
	user: User; // Information about the user
	can_be_edited: boolean; // True, if the bot is allowed to edit administrator privileges of that user
	is_anonymous: boolean; // True, if the user's presence in the chat is hidden
	can_manage_chat: boolean; // True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode.Implied by any other administrator privilege.
	can_delete_messages: boolean; // True, if the administrator can delete messages of other users
	can_manage_video_chats: boolean; // True, if the administrator can manage video chats
	can_restrict_members: boolean; // True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
	can_promote_members: boolean; // True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly(promoted by administrators that were appointed by the user)
	can_change_info: boolean; // True, if the user is allowed to change the chat title, photo and other settings
	can_invite_users: boolean; // True, if the user is allowed to invite new users to the chat
	can_post_stories: boolean; // True, if the administrator can post stories to the chat
	can_edit_stories: boolean; // True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
	can_delete_stories: boolean; // True, if the administrator can delete stories posted by other users
	can_post_messages?: boolean; // True, if the administrator can post messages in the channel, or access channel statistics; for channels only
	can_edit_messages?: boolean; // True, if the administrator can edit messages of other users and can pin messages; for channels only
	can_pin_messages?: boolean; // True, if the user is allowed to pin messages; for groups and supergroups only
	can_manage_topics?: boolean; // True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
	custom_title?: string; // Custom title for this user
}

// Represents a chat member that has no additional privileges or restrictions.
export interface ChatMemberMember {
	status: 'member'; // The member's status in the chat, always “member”
	user: User; // Information about the user
	until_date?: number; // Date when the user's subscription will expire; Unix time
}

// Represents a chat member that is under certain restrictions in the chat. Supergroups only.
export interface ChatMemberRestricted {
	status: 'restricted'; // The member's status in the chat, always “restricted”
	user: User; // Information about the user
	is_member: boolean; // True, if the user is a member of the chat at the moment of the request
	can_send_messages: boolean; // True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
	can_send_audios: boolean; // True, if the user is allowed to send audios
	can_send_documents: boolean; // True, if the user is allowed to send documents
	can_send_photos: boolean; // True, if the user is allowed to send photos
	can_send_videos: boolean; // True, if the user is allowed to send videos
	can_send_video_notes: boolean; // True, if the user is allowed to send video notes
	can_send_voice_notes: boolean; // True, if the user is allowed to send voice notes
	can_send_polls: boolean; // True, if the user is allowed to send polls
	can_send_other_messages: boolean; // True, if the user is allowed to send animations, games, stickers and use inline bots
	can_add_web_page_previews: boolean; // True, if the user is allowed to add web page previews to their messages
	can_change_info: boolean; // True, if the user is allowed to change the chat title, photo and other settings
	can_invite_users: boolean; // True, if the user is allowed to invite new users to the chat
	can_pin_messages: boolean; // True, if the user is allowed to pin messages
	can_manage_topics: boolean; // True, if the user is allowed to create forum topics
	until_date: number; // Date when restrictions will be lifted for this user; Unix time.If 0, then the user is restricted forever
}

// Represents a chat member that isn't currently a member of the chat, but may join it themselves.
export interface ChatMemberLeft {
	status: 'left'; // The member's status in the chat, always “left”
	user: User; // Information about the user
}

// Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
export interface ChatMemberBanned {
	status: 'kicked'; // The member's status in the chat, always “kicked”
	user: User; // Information about the user
	until_date: number; // Date when restrictions will be lifted for this user; Unix time.If 0, then the user is banned forever
}

// Represents a join request sent to a chat.
export interface ChatJoinRequest {
	chat: Chat; // Chat to which the request was sent
	from: User; // User that sent the join request
	user_chat_id: number; // number	Identifier of a private chat with the user who sent the join request.This number may have more than 32 significant bits and some programming languages may have difficulty / silent defects in interpreting it.But it has at most 52 significant bits, so a 64 - bit number or double - precision float type are safe for storing this identifier.The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
	date: number; // Date the request was sent in Unix time
	bio?: string; // Bio of the user.
	invite_link?: ChatInviteLink; // Chat invite link that was used by the user to send the join request
}

// Describes actions that a non-administrator user is allowed to take in a chat.
export interface ChatPermissions {
	can_send_messages?: boolean; // True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
	can_send_audios?: boolean; // True, if the user is allowed to send audios
	can_send_documents?: boolean; // True, if the user is allowed to send documents
	can_send_photos?: boolean; // True, if the user is allowed to send photos
	can_send_videos?: boolean; // True, if the user is allowed to send videos
	can_send_video_notes?: boolean; // True, if the user is allowed to send video notes
	can_send_voice_notes?: boolean; // True, if the user is allowed to send voice notes
	can_send_polls?: boolean; // True, if the user is allowed to send polls
	can_send_other_messages?: boolean; // True, if the user is allowed to send animations, games, stickers and use inline bots
	can_add_web_page_previews?: boolean; // True, if the user is allowed to add web page previews to their messages
	can_change_info?: boolean; // True, if the user is allowed to change the chat title, photo and other settings.Ignored in public supergroups
	can_invite_users?: boolean; // True, if the user is allowed to invite new users to the chat
	can_pin_messages?: boolean; // True, if the user is allowed to pin messages.Ignored in public supergroups
	can_manage_topics?: boolean; // True, if the user is allowed to create forum topics.If omitted defaults to the value of can_pin_messages
}

// Describes the birthdate of a user.
export interface Birthdate {
	day: number; // Day of the user's birth; 1-31
	month: number; // Month of the user's birth; 1-12
	year?: number; // Year of the user's birth
}

// Contains information about the start page settings of a Telegram Business account.
export interface BusinessIntro {
	title?: string; // Title text of the business intro
	message?: string; // Message text of the business intro
	sticker?: Sticker; // Sticker of the business intro
}

// Contains information about the location of a Telegram Business account.
export interface BusinessLocation {
	address: string; // Address of the business
	location?: Location; // Location of the business
}

// Describes an interval of time during which a business is open.
export interface BusinessOpeningHoursInterval {
	opening_minute: number; // The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
	closing_minute: number; // The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
}

// Describes the opening hours of a business.
export interface BusinessOpeningHours {
	time_zone_name: string; // Unique name of the time zone for which the opening hours are defined
	opening_hours: BusinessOpeningHoursInterval[]; // List of time intervals describing business opening hours
}

// Describes the position of a clickable area within a story.
export interface StoryAreaPosition {
	x_percentage: number; // The abscissa of the area's center, as a percentage of the media width
	y_percentage: number; // The ordinate of the area's center, as a percentage of the media height
	width_percentage: number; // The width of the area's rectangle, as a percentage of the media width
	height_percentage: number; // The height of the area's rectangle, as a percentage of the media height
	rotation_angle: number; // The clockwise rotation angle of the rectangle, in degrees; 0 - 360
	corner_radius_percentage: number; // The radius of the rectangle corner rounding, as a percentage of the media width
}

// Describes the physical address of a location.
export interface LocationAddress {
	country_code: string; // The two - letter ISO 3166 - 1 alpha - 2 country code of the country where the location is located
	state?: string; // State of the location
	city?: string; // City of the location
	street?: string; // Street address of the location
}

// Describes the type of a clickable area on a story. Currently, it can be one of
export type StoryAreaType =
	| StoryAreaTypeLocation
	| StoryAreaTypeSuggestedReaction
	| StoryAreaTypeLink
	| StoryAreaTypeWeather
	| StoryAreaTypeUniqueGift;

// Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.
export interface StoryAreaTypeLocation extends Coordinates {
	type: 'location'; // Type of the area, always “location”
	address?: LocationAddress; // Address of the location
}

// Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.
export interface StoryAreaTypeSuggestedReaction {
	type: 'suggested_reaction'; // Type of the area, always “suggested_reaction”
	reaction_type: ReactionType; // Type of the reaction
	is_dark?: boolean; // Pass True if the reaction area has a dark background
	is_flipped?: boolean; // Pass True if reaction area corner is flipped
}

// Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.
export interface StoryAreaTypeLink {
	type: 'link'; // Type of the area, always “link”
	url: string; // HTTP or tg:// URL to be opened when the area is clicked
}

// Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.
export interface StoryAreaTypeWeather {
	type: 'weather'; // Type of the area, always “weather”
	temperature: number; // Temperature, in degree Celsius
	emoji: string; // Emoji representing the weather
	background_color: number; // A color of the area background in the ARGB format
}

// Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.
export interface StoryAreaTypeUniqueGift {
	type: 'unique_gift'; // Type of the area, always “unique_gift”
	name: string; // Unique name of the gift
}

// Describes a clickable area on a story media.
export interface StoryArea {
	position: StoryAreaPosition; // Position of the area
	type: StoryAreaType; // Type of the area
}

// Represents a location to which a chat is connected.
export interface ChatLocation {
	location: Location; // The location to which the supergroup is connected.Can't be a live location.
	address: string; // Location address; 1 - 64 characters, as defined by the chat owner
}

// This object describes the type of a reaction. Currently, it can be one of
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;

// The reaction is based on an emoji.
export interface ReactionTypeEmoji {
	type: 'emoji'; // Type of the reaction, always “emoji”
	emoji: string; // Reaction emoji.Currently, it can be one of "👍", "👎", "❤", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "🤬", "😢", "🎉", "🤩", "🤮", "💩", "🙏", "👌", "🕊", "🤡", "🥱", "🥴", "😍", "🐳", "❤‍🔥", "🌚", "🌭", "💯", "🤣", "⚡", "🍌", "🏆", "💔", "🤨", "😐", "🍓", "🍾", "💋", "🖕", "😈", "😴", "😭", "🤓", "👻", "👨‍💻", "👀", "🎃", "🙈", "😇", "😨", "🤝", "✍", "🤗", "🫡", "🎅", "🎄", "☃", "💅", "🤪", "🗿", "🆒", "💘", "🙉", "🦄", "😘", "💊", "🙊", "😎", "👾", "🤷‍♂", "🤷", "🤷‍♀", "😡"
}

// The reaction is based on a custom emoji.
export interface ReactionTypeCustomEmoji {
	type: 'custom_emoji'; // Type of the reaction, always “custom_emoji”
	custom_emoji_id: string; // Custom emoji identifier
}

// The reaction is paid.
export interface ReactionTypePaid {
	type: 'paid'; // Type of the reaction, always “paid”
}

// Represents a reaction added to a message along with the number of times it was added.
export interface ReactionCount {
	type: ReactionType; // Type of the reaction
	total_count: number; // Number of times the reaction was added
}

// This object represents a change of a reaction on a message performed by a user.
export interface MessageReactionUpdated extends MessageId {
	chat: Chat; // The chat containing the message the user reacted to
	user?: User; // The user that changed the reaction, if the user isn't anonymous
	actor_chat?: Chat; // The chat on behalf of which the reaction was changed, if the user is anonymous
	date: number; // Date of the change in Unix time
	old_reaction: ReactionType[]; // Previous list of reaction types that were set by the user
	new_reaction: ReactionType[]; // New list of reaction types that have been set by the user
}

// This object represents reaction changes on a message with anonymous reactions.
export interface MessageReactionCountUpdated extends MessageId {
	chat: Chat; // The chat containing the message
	date: number; // Date of the change in Unix time
	reactions: ReactionCount[]; // List of reactions that are present on the message
}

// This object represents a forum topic.
export interface ForumTopic {
	message_thread_id: number; // Unique identifier of the forum topic
	name: string; // Name of the topic
	icon_color: number; // Color of the topic icon in RGB format
	icon_custom_emoji_id?: string; // Unique identifier of the custom emoji shown as the topic icon
}

// This object represents a gift that can be sent by the bot.
export interface Gift {
	id: string; // Unique identifier of the gift
	sticker: Sticker; // The sticker that represents the gift
	star_count: number; // The number of Telegram Stars that must be paid to send the sticker
	upgrade_star_count?: number; // The number of Telegram Stars that must be paid to upgrade the gift to a unique one
	total_count?: number; // The total number of the gifts of this type that can be sent; for limited gifts only
	remaining_count?: number; // The number of remaining gifts of this type that can be sent; for limited gifts only
}

// This object represent a list of gifts.
export interface Gifts {
	gifts: Gift[]; // The list of gifts
}

// This object describes the model of a unique gift.
export interface UniqueGiftModel {
	name: string; // Name of the model
	sticker: Sticker; // The sticker that represents the unique gift
	rarity_per_mille: number; // The number of unique gifts that receive this model for every 1000 gifts upgraded
}

// This object describes the symbol shown on the pattern of a unique gift.
export interface UniqueGiftSymbol {
	name: string; // Name of the symbol
	sticker: Sticker; // The sticker that represents the unique gift
	rarity_per_mille: number; // The number of unique gifts that receive this model for every 1000 gifts upgraded
}

// This object describes the colors of the backdrop of a unique gift.
export interface UniqueGiftBackdropColors {
	center_color: number; // The color in the center of the backdrop in RGB format
	edge_color: number; // The color on the edges of the backdrop in RGB format
	symbol_color: number; // The color to be applied to the symbol in RGB format
	text_color: number; // The color for the text on the backdrop in RGB format
}

// This object describes the backdrop of a unique gift.
export interface UniqueGiftBackdrop {
	name: string; // Name of the backdrop
	colors: UniqueGiftBackdropColors; // Colors of the backdrop
	rarity_per_mille: number; // The number of unique gifts that receive this backdrop for every 1000 gifts upgraded
}

// This object describes a unique gift that was upgraded from a regular gift.
export interface UniqueGift {
	base_name: string; // Human - readable name of the regular gift from which this unique gift was upgraded
	name: string; // Unique name of the gift.This name can be used in https://t.me/nft/... links and story areas
	number: number; // Unique number of the upgraded gift among gifts upgraded from the same regular gift
	model: UniqueGiftModel; // Model of the gift
	symbol: UniqueGiftSymbol; // Symbol of the gift
	backdrop: UniqueGiftBackdrop; // Backdrop of the gift
}

// Describes a service message about a regular gift that was sent or received.
export interface GiftInfo {
	gift: Gift; // Information about the gift
	owned_gift_id?: string; // Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
	convert_star_count?: number; // Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible
	prepaid_upgrade_star_count?: number; // Number of Telegram Stars that were prepaid by the sender for the ability to upgrade the gift
	can_be_upgraded?: boolean; // True, if the gift can be upgraded to a unique gift
	text?: string; // Text of the message that was added to the gift
	entities?: MessageEntity[]; // Special entities that appear in the text
	is_private?: boolean; // True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
}

// Describes a service message about a unique gift that was sent or received.
export interface UniqueGiftInfo {
	gift: UniqueGift; // Information about the gift
	origin: string; // Origin of the gift.Currently, either “upgrade” or “transfer”
	owned_gift_id?: string; // Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
	transfer_star_count?: number; // Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
}

// This object describes a gift received and owned by a user or a chat. Currently, it can be one of
export type OwnedGift = OwnedGiftRegular | OwnedGiftUnique;

// Describes a regular gift owned by a user or a chat.
export interface OwnedGiftRegular {
	type: 'regular'; // Type of the gift, always “regular”
	gift: Gift; // Information about the regular gift
	owned_gift_id?: string; // Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
	sender_user?: User; // Sender of the gift if it is a known user
	send_date: number; // Date the gift was sent in Unix time
	text?: string; // Text of the message that was added to the gift
	entities?: MessageEntity[]; // Special entities that appear in the text
	is_private?: boolean; // True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
	is_saved?: boolean; // True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
	can_be_upgraded?: boolean; // True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only
	was_refunded?: boolean; // True, if the gift was refunded and isn't available anymore
	convert_star_count?: number; // Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars
	prepaid_upgrade_star_count?: number; // Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
}

// Describes a unique gift received and owned by a user or a chat.
export interface OwnedGiftUnique {
	type: 'unique'; // Type of the gift, always “unique”
	gift: UniqueGift; // Information about the unique gift
	owned_gift_id?: string; // Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only
	sender_user?: User; // Sender of the gift if it is a known user
	send_date: number; // Date the gift was sent in Unix time
	is_saved?: boolean; // True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
	can_be_transferred?: boolean; // True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only
	transfer_star_count?: number; // Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
}

// Contains the list of gifts received and owned by a user or a chat.
export interface OwnedGifts {
	total_count: number; // The total number of gifts owned by the user or the chat
	gifts: OwnedGift[]; // The list of gifts
	next_offset?: string; // Offset for the next request.If empty, then there are no more results
}

// This object describes the types of gifts that can be gifted to a user or a chat.
export interface AcceptedGiftTypes {
	unlimited_gifts: boolean; // True, if unlimited regular gifts are accepted
	limited_gifts: boolean; // True, if limited regular gifts are accepted
	unique_gifts: boolean; // True, if unique gifts or gifts that can be upgraded to unique for free are accepted
	premium_subscription: boolean; // True, if a Telegram Premium subscription is accepted
}

// Describes an amount of Telegram Stars.
export interface StarAmount {
	amount: number; // number amount of Telegram Stars, rounded to 0; can be negative
	nanostar_amount?: number; // The number of 1 / 1000000000 shares of Telegram Stars; from - 999999999 to 999999999; can be negative if and only if amount is non - positive
}

// This object represents a bot command.
export interface BotCommand {
	command: string; // Text of the command; 1 - 32 characters.Can contain only lowercase English letters, digits and underscores.
	description: string; // Description of the command; 1 - 256 characters.
}

// This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
export type BotCommandScope =
	| BotCommandScopeDefault
	| BotCommandScopeAllPrivateChats
	| BotCommandScopeAllGroupChats
	| BotCommandScopeAllChatAdministrators
	| BotCommandScopeChat
	| BotCommandScopeChatAdministrators
	| BotCommandScopeChatMember;

// Determining list of commands
// The following algorithm is used to determine the list of commands for a particular user viewing the bot menu. The first list of commands which is set is returned:
//     Commands in the chat with the bot
//     -   botCommandScopeChat + language_code
//     -   botCommandScopeChat
//     -   botCommandScopeAllPrivateChats + language_code
//     -   botCommandScopeAllPrivateChats
//     -   botCommandScopeDefault + language_code
//     -   botCommandScopeDefault
//     Commands in group and supergroup chats
//     -   botCommandScopeChatMember + language_code
//     -   botCommandScopeChatMember
//     -   botCommandScopeChatAdministrators + language_code (administrators only)
//     -   botCommandScopeChatAdministrators (administrators only)
//     -   botCommandScopeChat + language_code
//     -   botCommandScopeChat
//     -   botCommandScopeAllChatAdministrators + language_code (administrators only)
//     -   botCommandScopeAllChatAdministrators (administrators only)
//     -   botCommandScopeAllGroupChats + language_code
//     -   botCommandScopeAllGroupChats
//     -   botCommandScopeDefault + language_code
//     -   botCommandScopeDefault

// Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
export interface BotCommandScopeDefault {
	type: 'default'; // Scope type, must be default
}

// Represents the scope of bot commands, covering all private chats.
export interface BotCommandScopeAllPrivateChats {
	type: 'all_private_chats'; // Scope type, must be all_private_chats
}

// Represents the scope of bot commands, covering all group and supergroup chats.
export interface BotCommandScopeAllGroupChats {
	type: 'all_group_chats'; // Scope type, must be all_group_chats
}

// Represents the scope of bot commands, covering all group and supergroup chat administrators.
export interface BotCommandScopeAllChatAdministrators {
	type: 'all_chat_administrators'; // Scope type, must be all_chat_administrators
}

// Represents the scope of bot commands, covering a specific chat.
export interface BotCommandScopeChat {
	type: 'chat'; // Scope type, must be chat
	chat_id: number | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}

// Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
export interface BotCommandScopeChatAdministrators {
	type: 'chat_administrators'; // Scope type, must be chat_administrators
	chat_id: number | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}

// Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
export interface BotCommandScopeChatMember {
	type: 'chat_member'; // Scope type, must be chat_member
	chat_id: number | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
	user_id: number; // Unique identifier of the target user
}

// This object represents the bot's name.
export interface BotName {
	name: string; // The bot's name
}

// This object represents the bot's description.
export interface BotDescription {
	description: string; // The bot's description
}

// This object represents the bot's short description.
export interface BotShortDescription {
	short_description: string; // The bot's short description
}

// This object describes the bot's menu button in a private chat. It should be one of
export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;
// If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.

// Represents a menu button, which opens the bot's list of commands.
export interface MenuButtonCommands {
	type: 'commands'; // Type of the button, must be commands
}

// Represents a menu button, which launches a Web App.
export interface MenuButtonWebApp {
	type: 'web_app'; // Type of the button, must be web_app
	text: string; // Text on the button
	web_app: WebAppInfo; // Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.
}

// Describes that no specific value for the menu button was set.
export interface MenuButtonDefault {
	type: 'default'; // Type of the button, must be default
}

// This object describes the source of a chat boost. It can be one of
export type ChatBoostSource =
	| ChatBoostSourcePremium
	| ChatBoostSourceGiftCode
	| ChatBoostSourceGiveaway;

// The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.
export interface ChatBoostSourcePremium {
	source: 'premium'; // Source of the boost, always “premium”
	user: User; // User that boosted the chat
}

// The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
export interface ChatBoostSourceGiftCode {
	source: 'gift_code'; // Source of the boost, always “gift_code”
	user: User; // User for which the gift code was created
}

// The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways.
export interface ChatBoostSourceGiveaway {
	source: 'giveaway'; // Source of the boost, always “giveaway”
	giveaway_message_id: number; // Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
	user?: User; // User that won the prize in the giveaway if any; for Telegram Premium giveaways only
	prize_star_count?: number; // The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
	is_unclaimed?: boolean; // True, if the giveaway was completed, but there was no user to win the prize
}

// This object contains information about a chat boost.
export interface ChatBoost {
	boost_id: string; // Unique identifier of the boost
	add_date: number; // Point in time (Unix timestamp) when the chat was boosted
	expiration_date: number; // Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
	source: ChatBoostSource; // Source of the added boost
}

// This object represents a boost added to a chat or changed.
export interface ChatBoostUpdated {
	chat: Chat; // Chat which was boosted
	boost: ChatBoost; // Information about the chat boost
}

// This object represents a boost removed from a chat.
export interface ChatBoostRemoved {
	chat: Chat; // Chat which was boosted
	boost_id: string; // Unique identifier of the boost
	remove_date: number; // Point in time (Unix timestamp) when the boost was removed
	source: ChatBoostSource; // Source of the removed boost
}

// This object represents a list of boosts added to a chat by a user.
export interface UserChatBoosts {
	boosts: ChatBoost[]; // The list of boosts added to the chat by the user
}

// Represents the rights of a business bot.
export interface BusinessBotRights {
	can_reply?: boolean; // True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours
	can_read_messages?: boolean; // True, if the bot can mark incoming private messages as read
	can_delete_outgoing_messages?: boolean; // True, if the bot can delete messages sent by the bot
	can_delete_all_messages?: boolean; // True, if the bot can delete all private messages in managed chats
	can_edit_name?: boolean; // True, if the bot can edit the first and last name of the business account
	can_edit_bio?: boolean; // True, if the bot can edit the bio of the business account
	can_edit_profile_photo?: boolean; // True, if the bot can edit the profile photo of the business account
	can_edit_username?: boolean; // True, if the bot can edit the username of the business account
	can_change_gift_settings?: boolean; // True, if the bot can change the privacy settings pertaining to gifts for the business account
	can_view_gifts_and_stars?: boolean; // True, if the bot can view gifts and the amount of Telegram Stars owned by the business account
	can_convert_gifts_to_stars?: boolean; // True, if the bot can convert regular gifts owned by the business account to Telegram Stars
	can_transfer_and_upgrade_gifts?: boolean; // True, if the bot can transfer and upgrade gifts owned by the business account
	can_transfer_stars?: boolean; // True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts
	can_manage_stories?: boolean; // True, if the bot can post, edit and delete stories on behalf of the business account
}

// Describes the connection of the bot with a business account.
export interface BusinessConnection {
	id: string; // Unique identifier of the business connection
	user: User; // Business account user that created the business connection
	user_chat_id: number; // Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
	date: number; // Date the connection was established in Unix time
	rights?: BusinessBotRights; // Rights of the business bot
	is_enabled: boolean; // True, if the connection is active
}

// This object is received when messages are deleted from a connected business account.
export interface BusinessMessagesDeleted {
	business_connection_id: string; // Unique identifier of the business connection
	chat: Chat; // Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
	message_ids: number[]; // The list of identifiers of deleted messages in the chat of the business account
}

// Describes why a request was unsuccessful.
export interface ResponseParameters {
	migrate_to_chat_id?: number; // The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
	retry_after?: number; // In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
}

// This object represents the content of a media message to be sent. It should be one of
export type InputMedia =
	| InputMediaAnimation
	| InputMediaDocument
	| InputMediaAudio
	| InputMediaPhoto
	| InputMediaVideo;

// Represents a photo to be sent.
export interface InputMediaPhoto {
	type: 'photo'; // Type of the result, must be photo
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	caption?: string; // Caption of the photo to be sent, 0-1024 characters after entities parsing
	parse_mode?: ParseMode; // Mode for parsing entities in the photo caption. See formatting options for more details.
	caption_entities?: MessageEntity[]; // List of special entities that appear in the caption, which can be specified instead of parse_mode
	show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
	has_spoiler?: boolean; // Pass True if the photo needs to be covered with a spoiler animation
}

// Represents a video to be sent.
export interface InputMediaVideo extends Partial<Dimensions> {
	type: 'video'; // Type of the result, must be video
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	thumbnail?: string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	cover?: string; // Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	start_timestamp?: number; // Start timestamp for the video in the message
	caption?: string; // Caption of the video to be sent, 0-1024 characters after entities parsing
	parse_mode?: ParseMode; // Mode for parsing entities in the video caption. See formatting options for more details.
	caption_entities?: MessageEntity[]; // List of special entities that appear in the caption, which can be specified instead of parse_mode
	show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
	duration?: number; // Video duration in seconds
	supports_streaming?: boolean; // Pass True if the uploaded video is suitable for streaming
	has_spoiler?: boolean; // Pass True if the video needs to be covered with a spoiler animation
}

// Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
export interface InputMediaAnimation extends Partial<Dimensions> {
	type: 'animation'; // Type of the result, must be animation
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	thumbnail?: string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	caption?: string; // Caption of the animation to be sent, 0-1024 characters after entities parsing
	parse_mode?: ParseMode; // Mode for parsing entities in the animation caption. See formatting options for more details.
	caption_entities?: MessageEntity[]; // List of special entities that appear in the caption, which can be specified instead of parse_mode
	show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
	duration?: number; // Animation duration in seconds
	has_spoiler?: boolean; // Pass True if the animation needs to be covered with a spoiler animation
}

// Represents an audio file to be treated as music to be sent.
export interface InputMediaAudio {
	type: 'audio'; // Type of the result, must be audio
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	thumbnail?: string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	caption?: string; // Caption of the audio to be sent, 0-1024 characters after entities parsing
	parse_mode?: ParseMode; // Mode for parsing entities in the audio caption. See formatting options for more details.
	caption_entities?: MessageEntity[]; // List of special entities that appear in the caption, which can be specified instead of parse_mode
	duration?: number; // Duration of the audio in seconds
	performer?: string; // Performer of the audio
	title?: string; // Title of the audio
}

// Represents a general file to be sent.
export interface InputMediaDocument {
	type: 'document'; // Type of the result, must be document
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	thumbnail?: string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	caption?: string; // Caption of the document to be sent, 0-1024 characters after entities parsing
	parse_mode?: ParseMode; // Mode for parsing entities in the document caption. See formatting options for more details.
	caption_entities?: MessageEntity[]; // List of special entities that appear in the caption, which can be specified instead of parse_mode
	disable_content_type_detection?: boolean; // Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
}

// This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
export interface InputFile {}

// This object describes the paid media to be sent. Currently, it can be one of
export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;

// The paid media to send is a photo.
export interface InputPaidMediaPhoto {
	type: 'photo'; // Type of the media, must be photo
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
}

// The paid media to send is a video.
export interface InputPaidMediaVideo extends Partial<Dimensions> {
	type: 'video'; // Type of the media, must be video
	media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	thumbnail?: string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	cover?: string; // Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
	start_timestamp?: number; // Start timestamp for the video in the message
	duration?: number; // Video duration in seconds
	supports_streaming?: boolean; // Pass True if the uploaded video is suitable for streaming
}

// This object describes a profile photo to set. Currently, it can be one of
export type InputProfilePhoto = InputProfilePhotoStatic | InputProfilePhotoAnimated;

// A static profile photo in the .JPG format.
export interface InputProfilePhotoStatic {
	type: 'static'; // Type of the profile photo, must be static
	photo: string; // The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
}

// An animated profile photo in the MPEG4 format.
export interface InputProfilePhotoAnimated {
	type: 'animated'; // Type of the profile photo, must be animated
	animation: string; // The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	main_frame_timestamp?: number; // Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.
}

// This object describes the content of a story to post. Currently, it can be one of
export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;

// Describes a photo to post as a story.
export interface InputStoryContentPhoto {
	type: 'photo'; // Type of the content, must be photo
	photo: string; // The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
}

// Describes a video to post as a story.
export interface InputStoryContentVideo {
	type: 'video'; // Type of the content, must be video
	video: string; // The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the video was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
	duration?: number; // Precise duration of the video in seconds; 0-60
	cover_frame_timestamp?: number; // Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.
	is_animation?: boolean; // Pass True if the video has no sound
}

// Sending files
//     There are three ways to send files (photos, stickers, audio, media, etc.):
//         1.  If the file is already stored somewhere on the Telegram servers, you don't need to reupload it: each file object has a file_id field, simply pass this file_id as a parameter instead of uploading. There are no limits for files sent this way.
//         2.  Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.
//         3.  Post the file using multipart/form-data in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.

//     Sending by file_id
//         -   It is not possible to change the file type when resending by file_id. I.e. a video can't be sent as a photo, a photo can't be sent as a document, etc.
//         -   It is not possible to resend thumbnails.
//         -   Resending a photo by file_id will send all of its sizes.
//         -   file_id is unique for each individual bot and can't be transferred from one bot to another.
//         -   file_id uniquely identifies a file, but a file can have different valid file_ids even for the same bot.

//     Sending by URL
//         -   When sending by URL the target file must have the correct MIME type (e.g., audio/mpeg for sendAudio, etc.).
//         -   In sendDocument, sending by URL will currently only work for .PDF and .ZIP files.
//         -   To use sendVoice, the file must have the type audio/ogg and be no more than 1MB in size. 1-20MB voice notes will be sent as files.
//         -   Other configurations may work but we can't guarantee that they will.

// Accent colors -
// Colors with identifiers 0 (red), 1 (orange), 2 (purple/violet), 3 (green), 4 (cyan), 5 (blue), 6 (pink) can be customized by app themes. Additionally, the following colors in RGB format are currently in use.
// Color identifier	Light colors	        Dark colors
// 7	                E15052 F9AE63	        FF9380 992F37
// 8	                E0802B FAC534	        ECB04E C35714
// 9	                A05FF3 F48FFF	        C697FF 5E31C8
// 10	                27A910 A7DC57	        A7EB6E 167E2D
// 11	                27ACCE 82E8D6	        40D8D0 045C7F
// 12	                3391D4 7DD3F0	        52BFFF 0B5494
// 13	                DD4371 FFBE9F	        FF86A6 8E366E
// 14	                247BED F04856 FFFFFF	3FA2FE E5424F FFFFFF
// 15	                D67722 1EA011 FFFFFF	FF905E 32A527 FFFFFF
// 16	                179E42 E84A3F FFFFFF	66D364 D5444F FFFFFF
// 17	                2894AF 6FC456 FFFFFF	22BCE2 3DA240 FFFFFF
// 18	                0C9AB3 FFAD95 FFE6B5	22BCE2 FF9778 FFDA6B
// 19	                7757D6 F79610 FFDE8E	9791FF F2731D FFDB59
// 20	                1585CF F2AB1D FFFFFF	3DA6EB EEA51D FFFFFF

// Profile accent colors -
// Currently, the following colors in RGB format are in use for profile backgrounds.
// Color identifier	Light colors	Dark colors
// 0	                BA5650	        9C4540
// 1	                C27C3E	        945E2C
// 2	                956AC8	        715099
// 3	                49A355	        33713B
// 4	                3E97AD	        387E87
// 5	                5A8FBB	        477194
// 6	                B85378	        944763
// 7	                7F8B95	        435261
// 8	                C9565D D97C57	994343 AC583E
// 9	                CF7244 CC9433	8F552F A17232
// 10	                9662D4 B966B6	634691 9250A2
// 11	                3D9755 89A650	296A43 5F8F44
// 12	                3D95BA 50AD98	306C7C 3E987E
// 13	                538BC2 4DA8BD	38618C 458BA1
// 14	                B04F74 D1666D	884160 A65259
// 15	                637482 7B8A97	53606E 384654

// Inline mode objects -
// Objects and methods used in the inline mode are described in the Inline mode section.
