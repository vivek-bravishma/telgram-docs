// https://core.telegram.org/bots/api#update

import {
	BusinessConnection,
	BusinessMessagesDeleted,
	CallbackQuery,
	ChatBoostRemoved,
	ChatBoostUpdated,
	ChatJoinRequest,
	ChatMemberUpdated,
	InputFile,
	Message,
	MessageReactionCountUpdated,
	MessageReactionUpdated,
	Poll,
	PollAnswer,
} from './AvailableTypes';
import { ChosenInlineResult, InlineQuery } from './InlineMode';
import { PaidMediaPurchased, PreCheckoutQuery, ShippingQuery } from './Payments';

// ============================== Getting Updates ==============================
// There are two mutually exclusive ways of receiving updates for your bot - the getUpdates method on one hand and webhooks on the other. Incoming updates are stored on the server until the bot receives them either way, but they will not be kept longer than 24 hours.
// Regardless of which option you choose, you will receive JSON-serialized Update objects as a result.

// This object represents an incoming update.
// At most one of the optional parameters can be present in any given update.
export interface Update {
	update_id: number; // The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order.If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
	message?: Message; // New incoming message of any kind - text, photo, sticker, etc.
	edited_message?: Message; // New version of a message that is known to the bot and was edited.This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
	channel_post?: Message; // New incoming channel post of any kind - text, photo, sticker, etc.
	edited_channel_post?: Message; // New version of a channel post that is known to the bot and was edited.This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
	business_connection?: BusinessConnection; // The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
	business_message?: Message; // New message from a connected business account
	edited_business_message?: Message; // New version of a message from a connected business account
	deleted_business_messages?: BusinessMessagesDeleted; // Messages were deleted from a connected business account
	message_reaction?: MessageReactionUpdated; // A reaction to a message was changed by a user.The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates.The update isn't received for reactions set by bots.
	message_reaction_count?: MessageReactionCountUpdated; // Reactions to a message with anonymous reactions were changed.The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates.The updates are grouped and can be sent with delay up to a few minutes.
	inline_query?: InlineQuery; // New incoming inline query
	chosen_inline_result?: ChosenInlineResult; // The result of an inline query that was chosen by a user and sent to their chat partner.Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
	callback_query?: CallbackQuery; // New incoming callback query
	shipping_query?: ShippingQuery; // New incoming shipping query.Only for invoices with flexible price
	pre_checkout_query?: PreCheckoutQuery; // New incoming pre - checkout query.Contains full information about checkout
	purchased_paid_media?: PaidMediaPurchased; // A user purchased paid media with a non - empty payload sent by the bot in a non - channel chat
	poll?: Poll; // New poll state.Bots receive only updates about manually stopped polls and polls, which are sent by the bot
	poll_answer?: PollAnswer; // A user changed their answer in a non - anonymous poll.Bots receive new votes only in polls that were sent by the bot itself.
	my_chat_member?: ChatMemberUpdated; // The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
	chat_member?: ChatMemberUpdated; // A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
	chat_join_request?: ChatJoinRequest; // A request to join the chat has been sent.The bot must have the can_invite_users administrator right in the chat to receive these updates.
	chat_boost?: ChatBoostUpdated; // A chat boost was added or changed.The bot must be an administrator in the chat to receive these updates.
	removed_chat_boost?: ChatBoostRemoved; // A boost was removed from a chat.The bot must be an administrator in the chat to receive these updates.
}

// Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
export interface getUpdates {
	offset?: number; // Identifier of the first update to be returned.Must be greater by one than the highest among the identifiers of previously received updates.By default, updates starting with the earliest unconfirmed update are returned.An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id.The negative offset can be specified to retrieve updates starting from - offset update from the end of the updates queue.All previous updates will be forgotten.
	limit?: number; // Limits the number of updates to be retrieved.Values between 1 - 100 are accepted.Defaults to 100.
	timeout?: number; // Timeout in seconds for long polling.Defaults to 0, i.e.usual short polling.Should be positive, short polling should be used for testing purposes only.
	allowed_updates?: string[]; // A JSON - serialized list of the update types you want your bot to receive.For example, specify["message", "edited_channel_post", "callback_query"] to only receive updates of these types.See Update for a complete list of available update types.Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count(default ).If not specified, the previous setting will be used.
}
// Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.
// Notes
// 1. This method will not work if an outgoing webhook is set up.
// 2. In order to avoid getting duplicate updates, recalculate offset after each server response.

// Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request (a request with response HTTP status code different from 2XY), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.
// If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
export interface setWebhook {
	url: string; // HTTPS URL to send updates to.Use an empty string to remove webhook integration
	certificate?: InputFile; // Upload your public key certificate so that the root certificate in use can be checked.See our self - signed guide for details.
	ip_address?: string; // The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
	max_connections?: number; // The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1 - 100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
	allowed_updates?: string[]; // A JSON - serialized list of the update types you want your bot to receive.For example, specify["message", "edited_channel_post", "callback_query"] to only receive updates of these types.See Update for a complete list of available update types.Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count(default ).If not specified, the previous setting will be used.
	// Please: note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
	drop_pending_updates?: boolean; // Pass True to drop all pending updates
	secret_token?: string; // A secret token to be sent in a header “X - Telegram - Bot - Api - Secret - Token” in every webhook request, 1 - 256 characters.Only characters A - Z, a - z, 0 - 9, _ and - are allowed.The header is useful to ensure that the request comes from a webhook set by you.
}
// Notes
// 1. You will not be able to receive updates using getUpdates for as long as an outgoing webhook is set up.
// 2. To use a self - signed certificate, you need to upload your public key certificate using certificate parameter.Please upload as InputFile, sending a string will not work.
// 3. Ports currently supported for webhooks: 443, 80, 88, 8443.
// If you're having any trouble setting up webhooks, please check out this amazing guide to webhooks.

// Use this method to remove webhook integration if you decide to switch back to getUpdates.Returns True on success.
export interface deleteWebhook {
	drop_pending_updates?: boolean; // Pass True to drop all pending updates
}

// Use this method to get current webhook status.Requires no parameters.On success, returns a WebhookInfo object.If the bot is using getUpdates, will return an object with the url field empty.
export interface getWebhookInfo {}

// Describes the current status of a webhook.
export interface WebhookInfo {
	url: string; // Webhook URL, may be empty if webhook is not set up
	has_custom_certificate: boolean; // True, if a custom certificate was provided for webhook certificate checks
	pending_update_count: number; // Number of updates awaiting delivery
	ip_address?: string; // Currently used webhook IP address
	last_error_date?: number; // Unix time for the most recent error that happened when trying to deliver an update via webhook
	last_error_message?: string; // Error message in human - readable format for the most recent error that happened when trying to deliver an update via webhook
	last_synchronization_error_date?: number; // Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
	max_connections?: number; // The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
	allowed_updates?: string[]; // A list of update types the bot is subscribed to.Defaults to all update types except chat_member
}
