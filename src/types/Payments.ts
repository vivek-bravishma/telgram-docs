// ============================== Payments ==============================
// Your bot can accept payments from Telegram users. Please see the introduction to payments for more details on the process and how to set up payments for your bot.

import { Chat, InlineKeyboardMarkup, PaidMedia, ReplyParameters, User } from './AvailableTypes';
import { Gift } from './Stickers';

// Use this method to send invoices. On success, the sent Message is returned.
export interface sendInvoice {
	chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
	message_thread_id?: number; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
	title: string; // Product name, 1-32 characters
	description: string; // Product description, 1-255 characters
	payload: string; // Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
	provider_token?: string; // Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
	currency: string; // Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
	prices: LabeledPrice[]; // Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
	max_tip_amount?: number; // The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
	suggested_tip_amounts?: number[]; // A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
	start_parameter?: string; // Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
	provider_data?: string; // JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
	photo_url?: string; // URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
	photo_size?: number; // Photo size in bytes
	photo_width?: number; // Photo width
	photo_height?: number; // Photo height
	need_name?: boolean; // Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
	need_phone_number?: boolean; // Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
	need_email?: boolean; // Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
	need_shipping_address?: boolean; // Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
	send_phone_number_to_provider?: boolean; // Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
	send_email_to_provider?: boolean; // Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
	is_flexible?: boolean; // Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
	disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
	protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
	allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
	message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
	reply_parameters?: ReplyParameters; // Description of the message to reply to
	reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
}

// Use this method to create a link for an invoice. Returns the created invoice link as string on success.
export interface createInvoiceLink {
	business_connection_id?: string; // Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only.
	title: string; // Product name, 1-32 characters
	description: string; // Product description, 1-255 characters
	payload: string; // Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
	provider_token?: string; // Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
	currency: string; // Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
	prices: LabeledPrice[]; // Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
	subscription_period?: number; // The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 2500 Telegram Stars.
	max_tip_amount?: number; // The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
	suggested_tip_amounts?: number[]; // A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
	provider_data?: string; // JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
	photo_url?: string; // URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
	photo_size?: number; // Photo size in bytes
	photo_width?: number; // Photo width
	photo_height?: number; // Photo height
	need_name?: boolean; // Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
	need_phone_number?: boolean; // Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
	need_email?: boolean; // Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
	need_shipping_address?: boolean; // Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
	send_phone_number_to_provider?: boolean; // Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
	send_email_to_provider?: boolean; // Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
	is_flexible?: boolean; // Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
}

// If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
export interface answerShippingQuery {
	shipping_query_id: string; // Unique identifier for the query to be answered
	ok: boolean; // Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
	shipping_options?: ShippingOption[]; // Required if ok is True. A JSON-serialized array of available shipping options.
	error_message?: string; // Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user.
}

// Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
export interface answerPreCheckoutQuery {
	pre_checkout_query_id: string; // Unique identifier for the query to be answered
	ok: boolean; // Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
	error_message?: string; // Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
}

// Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
export interface getStarTransactions {
	offset?: number; // Number of transactions to skip in the response
	limit?: number; // The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
}

// Refunds a successful payment in Telegram Stars. Returns True on success.
export interface refundStarPayment {
	user_id: number; // Identifier of the user whose payment will be refunded
	telegram_payment_charge_id: string; // Telegram payment identifier
}

// Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
export interface editUserStarSubscription {
	user_id: number; // Identifier of the user whose subscription will be edited
	telegram_payment_charge_id: string; // Telegram payment identifier for the subscription
	is_canceled: boolean; // Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.
}

// This object represents a portion of the price for goods or services.
export interface LabeledPrice {
	label: string; // Portion label
	amount: number; // Price of the product in the smallest units of the currency(integer, not float / double).For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency(2 for the majority of currencies).
}

// This object contains basic information about an invoice.
export interface Invoice {
	title: string; // Product name
	description: string; // Product description
	start_parameter: string; // Unique bot deep - linking parameter that can be used to generate this invoice
	currency: string; // Three - letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
	total_amount: number; // Total price in the smallest units of the currency(integer, not float / double).For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency(2 for the majority of currencies).
}

// This object represents a shipping address.
export interface ShippingAddress {
	country_code: string; // Two - letter ISO 3166 - 1 alpha - 2 country code
	state: string; // State, if applicable
	city: string; // City
	street_line1: string; // First line for the address
	street_line2: string; // Second line for the address
	post_code: string; // Address post code
}

// This object represents information about an order.
export interface OrderInfo {
	name?: string; // User name
	phone_number?: string; // User's phone number
	email?: string; // User email
	shipping_address?: ShippingAddress; // User shipping address
}

// This object represents one shipping option.
export interface ShippingOption {
	id: string; // Shipping option identifier
	title: string; // Option title
	prices: LabeledPrice[]; // List of price portions
}

// This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram's control.
export interface SuccessfulPayment {
	currency: string; // Three - letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
	total_amount: number; // Total price in the smallest units of the currency(integer, not float / double).For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency(2 for the majority of currencies).
	invoice_payload: string; // Bot - specified invoice payload
	subscription_expiration_date?: number; // Expiration date of the subscription, in Unix time; for recurring payments only
	is_recurring?: boolean; // True, if the payment is a recurring payment for a subscription
	is_first_recurring?: boolean; // True, if the payment is the first payment for a subscription
	shipping_option_id?: string; // Identifier of the shipping option chosen by the user
	order_info?: OrderInfo; // Order information provided by the user
	telegram_payment_charge_id: string; // Telegram payment identifier
	provider_payment_charge_id: string; // Provider payment identifier
}

// This object contains basic information about a refunded payment.
export interface RefundedPayment {
	currency: string; // Three - letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars.Currently, always “XTR”
	total_amount: number; // Total refunded price in the smallest units of the currency(integer, not float / double).For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency(2 for the majority of currencies).
	invoice_payload: string; // Bot - specified invoice payload
	telegram_payment_charge_id: string; // Telegram payment identifier
	provider_payment_charge_id?: string; // Provider payment identifier
}

// This object contains information about an incoming shipping query.
export interface ShippingQuery {
	id: string; // Unique query identifier
	from: User; // User who sent the query
	invoice_payload: string; // Bot - specified invoice payload
	shipping_address: ShippingAddress; // User specified shipping address
}

// This object contains information about an incoming pre-checkout query.
export interface PreCheckoutQuery {
	id: string; // Unique query identifier
	from: User; // User who sent the query
	currency: string; // Three - letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
	total_amount: number; // Total price in the smallest units of the currency(integer, not float / double).For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency(2 for the majority of currencies).
	invoice_payload: string; // Bot - specified invoice payload
	shipping_option_id?: string; // Identifier of the shipping option chosen by the user
	order_info?: OrderInfo; // Order information provided by the user
}

// This object contains information about a paid media purchase.
export interface PaidMediaPurchased {
	from: User; // User who purchased the media
	paid_media_payload: string; // Bot - specified paid media payload
}

// This object describes the state of a revenue withdrawal operation. Currently, it can be one of
export type RevenueWithdrawalState =
	| RevenueWithdrawalStatePending
	| RevenueWithdrawalStateSucceeded
	| RevenueWithdrawalStateFailed;

// The withdrawal is in progress.
export interface RevenueWithdrawalStatePending {
	type: string; // Type of the state, always “pending”
}

// The withdrawal succeeded.
export interface RevenueWithdrawalStateSucceeded {
	type: string; // Type of the state, always “succeeded”
	date: number; // Date the withdrawal was completed in Unix time
	url: string; // An HTTPS URL that can be used to see transaction details
}

// The withdrawal failed and the transaction was refunded.
export interface RevenueWithdrawalStateFailed {
	type: string; // Type of the state, always “failed”
}

// Contains information about the affiliate that received a commission via this transaction.
export interface AffiliateInfo {
	affiliate_user?: User; // The bot or the user that received an affiliate commission if it was received by a bot or a user
	affiliate_chat?: Chat; // The chat that received an affiliate commission if it was received by a chat
	commission_per_mille: number; // The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users
	amount: number; // number amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds
	nanostar_amount?: number; // The number of 1 / 1000000000 shares of Telegram Stars received by the affiliate; from - 999999999 to 999999999; can be negative for refunds
}

// This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
export type TransactionPartner =
	| TransactionPartnerUser
	| TransactionPartnerChat
	| TransactionPartnerAffiliateProgram
	| TransactionPartnerFragment
	| TransactionPartnerTelegramAds
	| TransactionPartnerTelegramApi
	| TransactionPartnerOther;

// Describes a transaction with a user.
export interface TransactionPartnerUser {
	type: string; // Type of the transaction partner, always “user”
	user: User; // Information about the user
	affiliate?: AffiliateInfo; // Information about the affiliate that received a commission via this transaction
	invoice_payload?: string; // Bot - specified invoice payload
	subscription_period?: number; // The duration of the paid subscription
	paid_media?: PaidMedia[]; // Information about the paid media bought by the user
	paid_media_payload?: string; // Bot - specified paid media payload
	gift?: Gift; // The gift sent to the user by the bot
}

// Describes a transaction with a chat.
export interface TransactionPartnerChat {
	type: string; // Type of the transaction partner, always “chat”
	chat: Chat; // Information about the chat
	gift?: Gift; // The gift sent to the chat by the bot
}

// Describes the affiliate program that issued the affiliate commission received via this transaction.
export interface TransactionPartnerAffiliateProgram {
	type: string; // Type of the transaction partner, always “affiliate_program”
	sponsor_user?: User; // Information about the bot that sponsored the affiliate program
	commission_per_mille: number; // The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users
}

// Describes a withdrawal transaction with Fragment.
export interface TransactionPartnerFragment {
	type: string; // Type of the transaction partner, always “fragment”
	withdrawal_state?: RevenueWithdrawalState; // State of the transaction if the transaction is outgoing
}

// Describes a withdrawal transaction to the Telegram Ads platform.
export interface TransactionPartnerTelegramAds {
	type: string; // Type of the transaction partner, always “telegram_ads”
}

// Describes a transaction with payment for paid broadcasting.
export interface TransactionPartnerTelegramApi {
	type: string; // Type of the transaction partner, always “telegram_api”
	request_count: number; // The number of successful requests that exceeded regular limits and were therefore billed
}

// Describes a transaction with an unknown source or recipient.
export interface TransactionPartnerOther {
	type: string; // Type of the transaction partner, always “other”
}

// Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot's balance. This is outside of Telegram's control.
export interface StarTransaction {
	id: string; // Unique identifier of the transaction.Coincides with the identifier of the original transaction for refund transactions.Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users.
	amount: number; // number amount of Telegram Stars transferred by the transaction
	nanostar_amount?: number; // The number of 1 / 1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999
	date: number; // Date the transaction was created in Unix time
	source?: TransactionPartner; // Source of an incoming transaction(e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal).Only for incoming transactions
	receiver?: TransactionPartner; // Receiver of an outgoing transaction(e.g., a user for a purchase refund, Fragment for a withdrawal).Only for outgoing transactions
}

// Contains a list of Telegram Star transactions.
export interface StarTransactions {
	transactions: StarTransaction[]; // The list of transactions
}
