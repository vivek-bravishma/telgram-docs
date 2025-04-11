// https://core.telegram.org/bots/api#update
// This object represents an incoming update.

import { BusinessConnection, BusinessMessagesDeleted, CallbackQuery, ChatBoostRemoved, ChatBoostUpdated, ChatJoinRequest, ChatMemberUpdated, InputFile, Message, MessageReactionCountUpdated, MessageReactionUpdated, Poll, PollAnswer } from "./AvailableTypes";
import { ChosenInlineResult, InlineQuery } from "./InlineMode";
import { PaidMediaPurchased, PreCheckoutQuery, ShippingQuery } from "./Payments";

// At most one of the optional parameters can be present in any given update.
export interface Update {
    update_id: number;
    message?: Message;
    edited_message?: Message;
    channel_post?: Message;
    edited_channel_post?: Message;
    business_connection?: BusinessConnection;
    business_message?: Message;
    edited_business_message?: Message;
    deleted_business_messages?: BusinessMessagesDeleted;
    message_reaction?: MessageReactionUpdated;
    message_reaction_count?: MessageReactionCountUpdated;
    inline_query?: InlineQuery;
    chosen_inline_result?: ChosenInlineResult;
    callback_query?: CallbackQuery;
    shipping_query?: ShippingQuery;
    pre_checkout_query?: PreCheckoutQuery;
    purchased_paid_media?: PaidMediaPurchased;
    poll?: Poll;
    poll_answer?: PollAnswer;
    my_chat_member?: ChatMemberUpdated;
    chat_member?: ChatMemberUpdated;
    chat_join_request?: ChatJoinRequest;
    chat_boost?: ChatBoostUpdated;
    removed_chat_boost?: ChatBoostRemoved;
}

// Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
export interface getUpdates {
    offset?: number;
    limit?: number;
    timeout?: number;
    allowed_updates?: string[];
}

// Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request (a request with response HTTP status code different from 2XY), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.

// If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
export interface setWebhook {
    url: string;
    certificate?: InputFile;
    ip_address?: string;
    max_connections?: number;
    allowed_updates?: string[];
    drop_pending_updates?: boolean;
    secret_token?: string;

}

// Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
export interface deleteWebhook {
    drop_pending_updates?: boolean;
}

// Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
export interface getWebhookInfo {
}

// Describes the current status of a webhook.
export interface WebhookInfo {
    url: string;
    has_custom_certificate: boolean;
    pending_update_count: number;
    ip_address?: string;
    last_error_date?: number;
    last_error_message?: string;
    last_synchronization_error_date?: number;
    max_connections?: number;
    allowed_updates?: string[];
}

