// ============================== Inline mode ==============================
// The following methods and objects allow your bot to work in inline mode.
// Please see our Introduction to Inline bots for more details.
// To enable this option, send the /setinline command to @BotFather and provide the placeholder text that the user will see in the input field after typing your bot's name.

import { InlineKeyboardMarkup, LinkPreviewOptions, MessageEntity, User, WebAppInfo } from "./AvailableTypes";
import { LabeledPrice } from "./Payments";



// This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
export interface InlineQuery {
    id: string; //	Unique identifier for this query
    from: User;   //	Sender
    query: string; //	Text of the query (up to 256 characters)
    offset: string; //	Offset of the results to be returned, can be controlled by the bot
    chat_type?: string;	// Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
    location?: Location;	// Sender location, only for bots that request user location
}



// Use this method to send answers to an inline query. On success, True is returned.
// No more than 50 results per query are allowed.
export interface answerInlineQuery {
    inline_query_id: string;   //	Unique identifier for the answered query
    results: InlineQueryResult[];   //	A JSON-serialized array of results for the inline query
    cache_time?: number;   //	The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
    is_personal?: boolean;   //	Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
    next_offset?: string;   //	Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
    button?: InlineQueryResultsButton;   //	A JSON-serialized object describing a button to be shown above inline query results
}



// This object represents a button to be shown above inline query results.You must use exactly one of the optional fields.
export interface InlineQueryResultsButton {
    text: string;   //Label text on the button
    web_app?: WebAppInfo;   //Description of the Web App that will be launched when the user presses the button.The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
    start_parameter?: string;   //Deep-linking parameter for the / start message sent to the bot when a user presses the button. 1 - 64 characters, only A - Z, a - z, 0 - 9, _ and - are allowed.
    // Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
}




// This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:
export type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice
// Note: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public.






// Represents a link to an article or web page.
export interface InlineQueryResultArticle {
    type: string;   //	Type of the result, must be article
    id: string; //	Unique identifier for this result, 1 - 64 Bytes
    title: string;    //	Title of the result
    input_message_content: InputMessageContent;    //	Content of the message to be sent
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    url: string;   //URL of the result
    description: string;   //Short description of the result
    thumbnail_url: string;   //Url of the thumbnail for the result
    thumbnail_width: number;   //Thumbnail width
    thumbnail_height: number;   //Thumbnail height
}


// Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
export interface InlineQueryResultPhoto {
    type: string;   //Type of the result, must be photo
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    photo_url: string; //	A valid URL of the photo.Photo must be in JPEG format.Photo size must not exceed 5MB
    thumbnail_url: string; //	URL of the thumbnail for the photo
    photo_width: number;   //Width of the photo
    photo_height: number;   //Height of the photo
    title: string;   //Title for the result
    description: string;   //Short description of the result
    caption: string;   //Caption of the photo to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the photo caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the photo
}


// Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
export interface InlineQueryResultGif {
    type: string;   //	Type of the result, must be gif
    id: string; //	Unique identifier for this result, 1 - 64 bytes
    gif_url: string; //	A valid URL for the GIF file
    gif_width: number;   //Width of the GIF
    gif_height: number;   //Height of the GIF
    gif_duration: number;   //Duration of the GIF in seconds
    thumbnail_url: string; //	URL of the static(JPEG or GIF) or animated(MPEG4) thumbnail for the result
    thumbnail_mime_type: string;   //MIME type of the thumbnail, must be one of “image / jpeg”, “image / gif”, or “video / mp4”. Defaults to “image / jpeg”
    title: string;   //Title for the result
    caption: string;   //Caption of the GIF file to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the GIF animation
}


// Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
export interface InlineQueryResultMpeg4Gif {
    type: string;   //	Type of the result, must be mpeg4_gif
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    mpeg4_url: string; //	A valid URL for the MPEG4 file
    mpeg4_width: number;   //Video width
    mpeg4_height: number;   //Video height
    mpeg4_duration: number;   //Video duration in seconds
    thumbnail_url: string;   //URL of the static(JPEG or GIF) or animated(MPEG4) thumbnail for the result
    thumbnail_mime_type: string;   //MIME type of the thumbnail, must be one of “image / jpeg”, “image / gif”, or “video / mp4”. Defaults to “image / jpeg”
    title: string;   //Title for the result
    caption: string;   //Caption of the MPEG - 4 file to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the video animation
}


// Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
// If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace its content using input_message_content.
export interface InlineQueryResultVideo {
    type: string;   //	Type of the result, must be video
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    video_url: string; //	A valid URL for the embedded video player or video file
    mime_type: string;   //MIME type of the content of the video URL, “text / html” or “video / mp4”
    thumbnail_url: string;   //URL of the thumbnail(JPEG only) for the video
    title: string;   //Title for the result
    caption: string;   //Caption of the video to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the video caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    video_width: number;   //Video width
    video_height: number;   //Video height
    video_duration: number;   //Video duration in seconds
    description: string;   //Short description of the result
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the video.This field is required if InlineQueryResultVideo is used to send an HTML - page as a result(e.g., a YouTube video).
}


// Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
export interface InlineQueryResultAudio {
    type: string;   //	Type of the result, must be audio
    id: string; //	Unique identifier for this result, 1 - 64 bytes
    audio_url: string; //	A valid URL for the audio file
    title: string;   //Title
    caption: string;   //Caption, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the audio caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    performer: string;   //Performer
    audio_duration: number;   //Audio duration in seconds
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the audio
}


// Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
export interface InlineQueryResultVoice {
    type: string;   //	Type of the result, must be voice
    id: string; //	Unique identifier for this result, 1 - 64 bytes
    voice_url: string; //	A valid URL for the voice recording
    title: string;   //Recording title
    caption: string;   //Caption, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the voice message caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    voice_duration: number;   //Recording duration in seconds
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the voice recording
}


// Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
export interface InlineQueryResultDocument {
    type: string;   //Type of the result, must be document
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    title: string; //	Title for the result
    caption: string;   //Caption of the document to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the document caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    document_url: string;   //	A valid URL for the file
    mime_type: string;   //	MIME type of the content of the file, either “application / pdf” or “application / zip”
    description: string;   //Short description of the result
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the file
    thumbnail_url: string;   //URL of the thumbnail(JPEG only) for the file
    thumbnail_width: number;   //Thumbnail width
    thumbnail_height: number;   //Thumbnail height
}


// Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
export interface InlineQueryResultLocation {
    type: string;   //	Type of the result, must be location
    id: string;   //Unique identifier for this result, 1 - 64 Bytes
    latitude: number;  //	Location latitude in degrees
    longitude: number;   //Location longitude in degrees
    title: string;   //Location title
    horizontal_accuracy: number;   //The radius of uncertainty for the location, measured in meters; 0 - 1500
    live_period: number;   //Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
    heading: number;   //For live locations, a direction in which the user is moving, in degrees.Must be between 1 and 360 if specified.
    proximity_alert_radius: number;   //For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.Must be between 1 and 100000 if specified.
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the location
    thumbnail_url: string;   //Url of the thumbnail for the result
    thumbnail_width: number;   //Thumbnail width
    thumbnail_height: number;   //Thumbnail height
}


// Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
export interface InlineQueryResultVenue {
    type: string;   //Type of the result, must be venue
    id: string;   //Unique identifier for this result, 1 - 64 Bytes
    latitude: number;  //	Latitude of the venue location in degrees
    longitude: number;  //	Longitude of the venue location in degrees
    title: string;   //Title of the venue
    address: string;   //Address of the venue
    foursquare_id: string;   //Foursquare identifier of the venue if known
    foursquare_type: string;   //Foursquare type of the venue, if known. (For example, “arts_entertainment /default”, “arts_entertainment / aquarium” or “food / icecream”.)
    google_place_id: string;   //Google Places identifier of the venue
    google_place_type: string;   //Google Places type of the venue. (See supported types.)
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the venue
    thumbnail_url: string;   //Url of the thumbnail for the result
    thumbnail_width: number;   //Thumbnail width
    thumbnail_height: number;   //Thumbnail height
}


// Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
export interface InlineQueryResultContact {
    type: string;   //Type of the result, must be contact
    id: string;   //Unique identifier for this result, 1 - 64 Bytes
    phone_number: string; //	Contact's phone number
    first_name: string;   //Contact's first name
    last_name: string;   //Contact's last name
    vcard: string;   //Additional data about the contact in the form of a vCard, 0 - 2048 bytes
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the contact
    thumbnail_url: string;   //Url of the thumbnail for the result
    thumbnail_width: number;   //Thumbnail width
    thumbnail_height: number;   //Thumbnail height
}


// Represents a Game.
export interface InlineQueryResultGame {
    type: string;   //	Type of the result, must be game
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    game_short_name: string; //	Short name of the game
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
}


// Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
export interface InlineQueryResultCachedPhoto {
    type: string;   //Type of the result, must be photo
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    photo_file_id: string; //	A valid file identifier of the photo
    title: string;   //Title for the result
    description: string;   //Short description of the result
    caption: string;   //Caption of the photo to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the photo caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the photo
}


// Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
export interface InlineQueryResultCachedGif {
    type: string;   //Type of the result, must be gif
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    gif_file_id: string;   //	A valid file identifier for the GIF file
    title: string;   //Title for the result
    caption: string;   //Caption of the GIF file to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the GIF animation
}


// Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
export interface InlineQueryResultCachedMpeg4Gif {
    type: string;   //Type of the result, must be mpeg4_gif
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    mpeg4_file_id: string; //	A valid file identifier for the MPEG4 file
    title: string;   //Title for the result
    caption: string;   //Caption of the MPEG - 4 file to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the video animation
}


// Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
export interface InlineQueryResultCachedSticker {
    type: string;   //Type of the result, must be sticker
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    sticker_file_id: string; //	A valid file identifier of the sticker
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the sticker
}


// Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
export interface InlineQueryResultCachedDocument {
    type: string;   //Type of the result, must be document
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    title: string; //	Title for the result
    document_file_id: string; //	A valid file identifier for the file
    description: string;   //Short description of the result
    caption: string;   //Caption of the document to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the document caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the file
}


// Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
export interface InlineQueryResultCachedVideo {
    type: string;   //Type of the result, must be video
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    video_file_id: string; //	A valid file identifier for the video file
    title: string;   //Title for the result
    description: string;   //Short description of the result
    caption: string;   //Caption of the video to be sent, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the video caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media: boolean;   //Pass True, if the caption must be shown above the message media
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the video
}


// Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
export interface InlineQueryResultCachedVoice {
    type: string;   //Type of the result, must be voice
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    voice_file_id: string; //	A valid file identifier for the voice message
    title: string;   //Voice message title
    caption: string;   //Caption, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the voice message caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the voice message
}


// Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
export interface InlineQueryResultCachedAudio {
    type: string;   //Type of the result, must be audio
    id: string;   //Unique identifier for this result, 1 - 64 bytes
    audio_file_id: string; //	A valid file identifier for the audio file
    caption: string;   //Caption, 0 - 1024 characters after entities parsing
    parse_mode: string;   //Mode for parsing entities in the audio caption.See formatting options for more details.
    caption_entities: MessageEntity[];   //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup: InlineKeyboardMarkup;   //Inline keyboard attached to the message
    input_message_content: InputMessageContent;   //Content of the message to be sent instead of the audio
}



// This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:
export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent




// Represents the content of a text message to be sent as the result of an inline query.
export interface InputTextMessageContent {
    message_text: string; // Text of the message to be sent, 1 - 4096 characters
    parse_mode?: string;   // Mode for parsing entities in the message text.See formatting options for more details.
    entities?: MessageEntity[];   // List of special entities that appear in message text, which can be specified instead of parse_mode
    link_preview_options?: LinkPreviewOptions;   // Link preview generation options for the message
}


// Represents the content of a location message to be sent as the result of an inline query.
export interface InputLocationMessageContent {
    latitude: number;    // Latitude of the location in degrees
    longitude: number;   // Longitude of the location in degrees
    horizontal_accuracy?: number;   // The radius of uncertainty for the location, measured in meters; 0 - 1500
    live_period?: number;   // Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
    heading?: number;   // For live locations, a direction in which the user is moving, in degrees.Must be between 1 and 360 if specified.
    proximity_alert_radius?: number;   // For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.Must be between 1 and 100000 if specified.
}


// Represents the content of a venue message to be sent as the result of an inline query.
export interface InputVenueMessageContent {
    latitude: number;   // Latitude of the venue in degrees
    longitude: number;   // Longitude of the venue in degrees
    title: string;   // Name of the venue
    address: string;   // Address of the venue
    foursquare_id?: string;   // Foursquare identifier of the venue, if known
    foursquare_type?: string;   // Foursquare type of the venue, if known. (For example, “arts_entertainment /default”, “arts_entertainment / aquarium” or “food / icecream”.)
    google_place_id?: string;   // Google Places identifier of the venue
    google_place_type?: string;   // Google Places type of the venue. (See supported types.)
}


// Represents the content of a contact message to be sent as the result of an inline query.
export interface InputContactMessageContent {
    phone_number: string;   // Contact's phone number
    first_name: string;   // Contact's first name
    last_name?: string;   // Contact's last name
    vcard?: string;   // Additional data about the contact in the form of a vCard, 0 - 2048 bytes
}


// Represents the content of an invoice message to be sent as the result of an inline query.
export interface InputInvoiceMessageContent {
    title: string;   // Product name, 1 - 32 characters
    description: string;   // Product description, 1 - 255 characters
    payload: string;   // Bot - defined invoice payload, 1 - 128 bytes.This will not be displayed to the user, use it for your internal processes.
    provider_token?: string;   // Payment provider token, obtained via @BotFather.Pass an empty string for payments in Telegram Stars.
    currency: string;   // Three - letter ISO 4217 currency code, see more on currencies.Pass “XTR” for payments in Telegram Stars.
    prices: LabeledPrice[]; // Price breakdown, a JSON - serialized list of components(e.g.product price, tax, discount, delivery cost, delivery tax, bonus, etc.).Must contain exactly one item for payments in Telegram Stars.
    max_tip_amount?: number;   // The maximum accepted amount for tips in the smallest units of the currency(integer, not float / double).For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency(2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
    suggested_tip_amounts?: number[];   // A JSON - serialized array of suggested amounts of tip in the smallest units of the currency(integer, not float / double).At most 4 suggested tip amounts can be specified.The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
    provider_data?: string;   // A JSON - serialized object for data about the invoice, which will be shared with the payment provider.A detailed description of the required fields should be provided by the payment provider.
    photo_url?: string;   // URL of the product photo for the invoice.Can be a photo of the goods or a marketing image for a service.
    photo_size?: number;   // Photo size in bytes
    photo_width?: number;   // Photo width
    photo_height?: number;   // Photo height
    need_name?: boolean;   // Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
    need_phone_number?: boolean;   // Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
    need_email?: boolean;   // Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
    need_shipping_address?: boolean;   // Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
    send_phone_number_to_provider?: boolean;   // Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
    send_email_to_provider?: boolean;   // Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
    is_flexible?: boolean;   // Pass True if the final price depends on the shipping method.Ignored for payments in Telegram Stars.
}


// Represents a result of an inline query that was chosen by the user and sent to their chat partner.
export interface ChosenInlineResult {
    result_id: string;   // The unique identifier for the result that was chosen
    from: User;   // The user that chose the result
    location?: Location;   // Sender location, only for bots that require user location
    inline_message_id?: string;   // Identifier of the sent inline message.Available only if there is an inline keyboard attached to the message.Will be also received in callback queries and can be used to edit the message.
    query: string;   // The query that was used to obtain the result
}
// Note: It is necessary to enable inline feedback via @BotFather in order to receive these objects in updates.




// Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
export interface answerWebAppQuery {
    web_app_query_id: string;   // Unique identifier for the query to be answered
    result: InlineQueryResult;   // A JSON - serialized object describing the message to be sent
}





// Describes an inline message sent by a Web App on behalf of a user.
export interface SentWebAppMessage {
    inline_message_id?: string;   // Identifier of the sent inline message.Available only if there is an inline keyboard attached to the message.
}





// Stores a message that can be sent by a user of a Mini App.Returns a PreparedInlineMessage object.
export interface savePreparedInlineMessage {
    user_id: number;   // Unique identifier of the target user that can use the prepared message
    result: InlineQueryResult;   // A JSON - serialized object describing the message to be sent
    allow_user_chats?: boolean;   // Pass True if the message can be sent to private chats with users
    allow_bot_chats?: boolean;   // Pass True if the message can be sent to private chats with bots
    allow_group_chats?: boolean;   // Pass True if the message can be sent to group and supergroup chats
    allow_channel_chats?: boolean;   // Pass True if the message can be sent to channel chats
}






// Describes an inline message to be sent by a user of a Mini App.
export interface PreparedInlineMessage {
    id: string; // Unique identifier of the prepared message
    expiration_date: number;   // Expiration date of the prepared message, in Unix time.Expired prepared messages can no longer be used
}

