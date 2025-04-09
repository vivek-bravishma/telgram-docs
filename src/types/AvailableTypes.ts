// This object represents a Telegram user or bot.
export interface User {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    can_join_groups?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
    can_connect_to_business?: boolean;
    has_main_web_app?: boolean;
}

// This object represents a chat.
export interface Chat {
    id: number;
    type: string;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    is_forum?: boolean;
}

// This object contains full information about a chat.
export interface ChatFullInfo {
    id: number;
    type: string;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    is_forum?: boolean,
    accent_color_id: number,
    max_reaction_count: number,
    photo?: ChatPhoto,
    active_usernames?: string[],
    birthdate?: Birthdate,
    business_intro?: BusinessIntro,
    business_location?: BusinessLocation,
    business_opening_hours?: BusinessOpeningHours,
    personal_chat?: Chat,
    available_reactions?: ReactionType[],
    background_custom_emoji_id?: string,
    profile_accent_color_id?: number,
    profile_background_custom_emoji_id?: string,
    emoji_status_custom_emoji_id?: string,
    emoji_status_expiration_date?: number,
    bio?: string,
    has_private_forwards?: boolean,
    has_restricted_voice_and_video_messages?: boolean,
    join_to_send_messages?: boolean,
    join_by_request?: boolean,
    description?: string,
    invite_link?: string,
    pinned_message?: Message,
    permissions?: ChatPermissions,
    can_send_gift?: boolean,
    can_send_paid_media?: boolean,
    slow_mode_delay?: number,
    unrestrict_boost_count?: number,
    message_auto_delete_time?: number,
    has_aggressive_anti_spam_enabled?: boolean,
    has_hidden_members?: boolean,
    has_protected_content?: boolean,
    has_visible_history?: boolean,
    sticker_set_name?: string,
    can_set_sticker_set?: boolean,
    custom_emoji_sticker_set_name?: string,
    linked_chat_id?: number,
    location?: ChatLocation;

}



// This object represents a message.
export interface Message {
    message_id: number;
    message_thread_id?: number;
    from?: User;
    sender_chat?: Chat;
    sender_boost_count?: number;
    sender_business_bot?: User;
    date: number;
    business_connection_id?: string;
    chat: Chat;
    forward_origin?: MessageOrigin;
    is_topic_message?: boolean;
    is_automatic_forward?: boolean;
    reply_to_message?: Message;
    external_reply?: ExternalReplyInfo;
    quote?: TextQuote;
    reply_to_story?: Story;
    via_bot?: User;
    edit_date?: number;
    has_protected_content?: boolean;
    is_from_offline?: boolean;
    media_group_id?: string;
    author_signature?: string;
    text?: string;
    entities?: MessageEntity[];
    link_preview_options?: LinkPreviewOptions;
    effect_id?: string;
    animation?: Animation;
    audio?: Audio;
    document?: Document;
    paid_media?: PaidMediaInfo;
    photo?: PhotoSize[];
    sticker?: Sticker;
    story?: Story;
    video?: Video;
    video_note?: VideoNote;
    voice?: Voice;
    caption?: string;
    caption_entities?: MessageEntity[];
    show_caption_above_media?: boolean;
    has_media_spoiler?: boolean;
    contact?: Contact;
    dice?: Dice;
    game?: Game;
    poll?: Poll;
    venue?: Venue;
    location?: Location;
    new_chat_members?: User[];
    left_chat_member?: User;
    new_chat_title?: string;
    new_chat_photo?: PhotoSize[];
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: MaybeInaccessibleMessage;
    invoice?: Invoice;
    successful_payment?: SuccessfulPayment;
    refunded_payment?: RefundedPayment;
    users_shared?: UsersShared;
    chat_shared?: ChatShared;
    connected_website?: string;
    write_access_allowed?: WriteAccessAllowed;
    passport_data?: PassportData;
    proximity_alert_triggered?: ProximityAlertTriggered;
    boost_added?: ChatBoostAdded;
    chat_background_set?: ChatBackground;
    forum_topic_created?: ForumTopicCreated;
    forum_topic_edited?: ForumTopicEdited;
    forum_topic_closed?: ForumTopicClosed;
    forum_topic_reopened?: ForumTopicReopened;
    general_forum_topic_hidden?: GeneralForumTopicHidden;
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
    giveaway_created?: GiveawayCreated;
    giveaway?: Giveaway;
    giveaway_winners?: GiveawayWinners;
    giveaway_completed?: GiveawayCompleted;
    video_chat_scheduled?: VideoChatScheduled;
    video_chat_started?: VideoChatStarted;
    video_chat_ended?: VideoChatEnded;
    video_chat_participants_invited?: VideoChatParticipantsInvited;
    web_app_data?: WebAppData;
    reply_markup?: InlineKeyboardMarkup;
}


// This object represents a unique message identifier.
export interface MessageId {
    message_id: number;
}


// This object describes a message that was deleted or is otherwise inaccessible to the bot.
export interface InaccessibleMessage {
    chat: Chat;
    message_id: number;
    date: number;
}

// This object describes a message that can be inaccessible to the bot. It can be one of
export type MaybeInaccessibleMessage = InaccessibleMessage | Message;

// This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
export interface MessageEntity {
    type: string;
    offset: number;
    length: number;
    url?: string;
    user?: User;
    language?: string;
    custom_emoji_id?: string;
}

// This object contains information about the quoted part of a message that is replied to by the given message.
export interface TextQuote {
    text: string;
    entities?: MessageEntity[];
    position: number;
    is_manual?: boolean;
}


// This object contains information about a message that is being replied to, which may come from another chat or forum topic.
export interface ExternalReplyInfo {
    origin: MessageOrigin;
    chat?: Chat;
    message_id?: number;
    link_preview_options?: LinkPreviewOptions;
    animation?: Animation;
    audio?: Audio;
    document?: Document;
    paid_media?: PaidMediaInfo;
    photo?: PhotoSize[];
    sticker?: Sticker;
    story?: Story;
    video?: Video;
    video_note?: VideoNote;
    voice?: Voice;
    has_media_spoiler?: boolean;
    contact?: Contact;
    dice?: Dice;
    game?: Game;
    giveaway?: Giveaway;
    giveaway_winners?: GiveawayWinners;
    invoice?: Invoice;
    location?: Location;
    poll?: Poll;
    venue?: Venue;
}

// Describes reply parameters for the message that is being sent.
export interface ReplyParameters {
    message_id: number;
    chat_id?: number | string;
    allow_sending_without_reply?: boolean;
    quote?: string;
    quote_parse_mode?: string;
    quote_entities?: MessageEntity[];
    quote_position?: number;
}


// This object describes the origin of a message. It can be one of
export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel;


// The message was originally sent by a known user.
export interface MessageOriginUser {
    type: string;
    date: number;
    sender_user: User;
}

// The message was originally sent by an unknown user.
export interface MessageOriginHiddenUser {
    type: string;
    date: number;
    sender_user_name: string;
}


// The message was originally sent on behalf of a chat to a group chat.
export interface MessageOriginChat {
    type: string;
    date: number;
    sender_chat: Chat;
    author_signature?: string;
}



// The message was originally sent to a channel chat.
export interface MessageOriginChannel {
    type: string;
    date: number;
    chat: Chat;
    message_id: number;
    author_signature?: string;
}


// This object represents one size of a photo or a file / sticker thumbnail.
export interface PhotoSize {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size?: number;
}


// This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
export interface Animation {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumbnail?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}


// This object represents an audio file to be treated as music by the Telegram clients.
export interface Audio {
    file_id: string;
    file_unique_id: string;
    duration: number;
    performer?: string;
    title?: string;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    thumbnail?: PhotoSize;
}


// This object represents a general file (as opposed to photos, voice messages and audio files).
export interface Document {
    file_id: string;
    file_unique_id: string;
    thumbnail?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}


// This object represents a story.
export interface Story {
    chat: Chat;
    id: number;
}

// This object represents a video file.
export interface Video {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumbnail?: PhotoSize;
    cover?: PhotoSize[];
    start_timestamp?: number;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}


// This object represents a video message (available in Telegram apps as of v.4.0).
export interface VideoNote {
    file_id: string;
    file_unique_id: string;
    length: number;
    duration: number;
    thumbnail?: PhotoSize;
    file_size?: number;
}

// This object represents a voice note.
export interface Voice {
    file_id: string;
    file_unique_id: string;
    duration: number;
    mime_type?: string;
    file_size?: number;
}


// Describes the paid media added to a message.
export interface PaidMediaInfo {
    star_count: number;
    paid_media: PaidMedia[];
}

// This object describes paid media. Currently, it can be one of
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;


// The paid media isn't available before the payment.
export interface PaidMediaPreview {
    type: string;
    width?: number;
    height?: number;
    duration?: number;
}

// The paid media is a photo.
export interface PaidMediaPhoto {
    type: string;
    photo: PhotoSize;
}

// The paid media is a video.
export interface PaidMediaVideo {
    type: string;
    video: Video;
}




// This object represents a phone contact.
export interface Contact {
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
    vcard?: string;
}


// This object represents an animated emoji that displays a random value.
export interface Dice {
    emoji: string;
    value: number;
}

// This object contains information about one answer option in a poll.
export interface PollOption {
    text: string;
    text_entities: MessageEntity[];
    voter_count: number;
}

// This object contains information about one answer option in a poll to be sent.
export interface InputPollOption {
    text: string;
    text_parse_mode?: string;
    text_entities?: MessageEntity[];
}




// This object represents an answer of a user in a non-anonymous poll.
export interface PollAnswer {
    poll_id: string;
    voter_chat: Chat;
    user: User;
    option_ids: number[];
}


// This object contains information about a poll.
export interface Poll {
    id: string;
    question: string;
    question_entities?: MessageEntity[];
    options: PollOption[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: string;   //Poll type, currently can be “regular” or “quiz”
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
}


// This object represents a point on the map.
export interface Location {
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}


// This object represents a venue.
export interface Venue {
    location: Location;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
}


// Describes data sent from a Web App to the bot.
export interface WebAppData {
    data: string;
    button_text: string;
}

// This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
export interface ProximityAlertTriggered {
    traveler: User;
    watcher: User;
    distance: number;
}


// This object represents a service message about a change in auto-delete timer settings.
export interface MessageAutoDeleteTimerChanged {
    message_auto_delete_time: number;
}

// This object represents a service message about a user boosting a chat.
export interface ChatBoostAdded {
    boost_count: number;
}

// This object describes the way a background is filled based on the selected colors. Currently, it can be one of
export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;



// The background is filled using the selected color.
export interface BackgroundFillSolid {
    type: string;
    color: number;
}


// The background is a gradient fill.
export interface BackgroundFillGradient {
    type: string;
    top_color: number;
    bottom_color: number;
    rotation_angle: number;
}

// The background is a freeform gradient that rotates after every message in the chat.
export interface BackgroundFillFreeformGradient {
    type: string;
    colors: number[];
}

// This object describes the type of a background. Currently, it can be one of
export type BackgroundType = BackgroundTypeFill | BackgroundTypeWallpaper | BackgroundTypePattern | BackgroundTypeChatTheme;


// The background is automatically filled based on the selected colors.
export interface BackgroundTypeFill {
    type: string;
    fill: BackgroundFill;
    dark_theme_dimming: number;
}


// The background is a wallpaper in the JPEG format.
export interface BackgroundTypeWallpaper {
    type: string;
    document: Document;
    dark_theme_dimming: number;
    is_blurred?: boolean;
    is_moving?: boolean;
}

// The background is a .PNG or .TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.
export interface BackgroundTypePattern {
    type: string;
    document: Document;
    fill: BackgroundFill;
    intensity: number;
    is_inverted?: boolean;
    is_moving?: boolean;
}


// The background is taken directly from a built-in chat theme.
export interface BackgroundTypeChatTheme {
    type: string;
    theme_name: string;
}

// This object represents a chat background.
export interface ChatBackground {
    type: BackgroundType;
}


// This object represents a service message about a new forum topic created in the chat.
export interface ForumTopicCreated {
    name: string;
    icon_color: number;
    icon_custom_emoji_id?: string;
}

// This object represents a service message about a forum topic closed in the chat. Currently holds no information.
export interface ForumTopicClosed {
}

// This object represents a service message about an edited forum topic.
export interface ForumTopicEdited {
    name?: string;
    icon_custom_emoji_id?: string;
}


// This object represents a service message about a forum topic reopened in the chat. Currently holds no information.
export interface ForumTopicReopened {
}


// This object represents a service message about General forum topic hidden in the chat. Currently holds no information.
export interface GeneralForumTopicHidden {
}



// This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.
export interface GeneralForumTopicUnhidden {
}


// This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.
export interface SharedUser {
    user_id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo?: PhotoSize[];
}


// This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.
export interface UsersShared {
    request_id: number;
    users: SharedUser[];
}


// This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.
export interface ChatShared {
    request_id: number;
    chat_id: number;
    title?: string;
    username?: string;
    photo?: PhotoSize[];
}


// This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
export interface WriteAccessAllowed {
    from_request?: boolean;
    web_app_name?: string;
    from_attachment_menu?: boolean;
}


// This object represents a service message about a video chat scheduled in the chat.
export interface VideoChatScheduled {
    start_date: number;
}

// This object represents a service message about a video chat started in the chat. Currently holds no information.
export interface VideoChatStarted {
}

// This object represents a service message about a video chat ended in the chat.
export interface VideoChatEnded {
    duration: number;
}


// This object represents a service message about new members invited to a video chat.
export interface VideoChatParticipantsInvited {
    users: User[];
}


// This object represents a service message about the creation of a scheduled giveaway.
export interface GiveawayCreated {
    prize_star_count?: number;
}


// This object represents a message about a scheduled giveaway.
export interface Giveaway {
    chats: Chat[];
    winners_selection_date: number;
    winner_count: number;
    only_new_members?: boolean;
    has_public_winners?: boolean;
    prize_description?: string;
    country_codes?: string[];
    prize_star_count?: number;
    premium_subscription_month_count?: number;
}

// This object represents a message about the completion of a giveaway with public winners.
export interface GiveawayWinners {
    chat: Chat;
    giveaway_message_id: number;
    winners_selection_date: number;
    winner_count: number;
    winners: User[];
    additional_chat_count?: number;
    prize_star_count?: number;
    premium_subscription_month_count?: number;
    unclaimed_prize_count?: number;
    only_new_members?: boolean;
    was_refunded?: boolean;
    prize_description?: string;
}


// This object represents a service message about the completion of a giveaway without public winners.
export interface GiveawayCompleted {
    winner_count: number;
    unclaimed_prize_count?: number;
    giveaway_message?: Message;
    is_star_giveaway?: boolean;
}


// Describes the options used for link preview generation.
export interface LinkPreviewOptions {
    is_disabled?: boolean;
    url?: string;
    prefer_small_media?: boolean;
    prefer_large_media?: boolean;
    show_above_text?: boolean;
}

// This object represent a user's profile pictures.
export interface UserProfilePhotos {
    total_count: number;
    photos: PhotoSize[][];
}


// This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
// The maximum file size to download is 20 MB
export interface File {
    file_id: string;
    file_unique_id: string;
    file_size?: number;
    file_path?: string;
}


// Describes a Web App.
export interface WebAppInfo {
    url: string;
}

// This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
export interface ReplyKeyboardMarkup {
    keyboard: KeyboardButton[][];
    is_persistent?: boolean;
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    input_field_placeholder?: string;
    seleselectivective?: boolean;
}


// This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, String can be used instead of this object to specify the button text.
export interface KeyboardButton {
    text: string;
    request_users?: KeyboardButtonRequestUsers;
    request_chat?: KeyboardButtonRequestChat;
    request_contact?: boolean;
    request_location?: boolean;
    request_poll?: KeyboardButtonPollType;
    web_app?: WebAppInfo;
}





// This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »
export interface KeyboardButtonRequestUsers {
    request_id: number;
    user_is_bot?: boolean;
    user_is_premium?: boolean;
    max_quantity?: number;
    request_name?: boolean;
    request_username?: boolean;
    request_photo?: boolean;
}


// This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ».
export interface KeyboardButtonRequestChat {
    request_id: number;
    chat_is_channel: boolean;
    chat_is_forum?: boolean;
    chat_has_username?: boolean;
    chat_is_created?: boolean;
    user_administrator_rights?: ChatAdministratorRights;
    bot_administrator_rights?: ChatAdministratorRights;
    bot_is_member?: boolean;
    request_title?: boolean;
    request_username?: boolean
    ; request_photo?: boolean;
}



// This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
export interface KeyboardButtonPollType {
    type?: string;
}



// Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.
export interface ReplyKeyboardRemove {
    remove_keyboard: boolean;
    selective?: boolean;
}


// This object represents an inline keyboard that appears right next to the message it belongs to.
export interface InlineKeyboardMarkup {
    inline_keyboard: InlineKeyboardButton[][];
}


// This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
export interface InlineKeyboardButton {
    text: string;
    url?: string;
    callback_data?: string;
    web_app?: WebAppInfo;
    login_url?: LoginUrl;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
    copy_text?: CopyTextButton;
    callback_game?: CallbackGame;
    pay?: boolean;
}


// This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
export interface LoginUrl {
    url: string;
    forward_text?: string;
    bot_username?: string;
    request_write_access?: boolean;
}


// This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
export interface SwitchInlineQueryChosenChat {
    query?: string;
    allow_user_chats?: boolean;
    allow_bot_chats?: boolean;
    allow_group_chats?: boolean;
    allow_channel_chats?: boolean;
}


// This object represents an inline keyboard button that copies specified text to the clipboard.
export interface CopyTextButton {
    text: string;
}




// This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
// NOTE: After the user presses a callback button, Telegram clients will display a progress bar until you call answerCallbackQuery. It is, therefore, necessary to react by calling answerCallbackQuery even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
export interface CallbackQuery {
    id: string;
    from: User;
    message?: MaybeInaccessibleMessage;
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
}



// Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.
export interface ForceReply {
    force_reply: boolean;
    input_field_placeholder?: string;
    selective?: boolean;
}


// This object represents a chat photo.
export interface ChatPhoto {
    small_file_id: string;
    small_file_unique_id: string;
    big_file_id: string;
    big_file_unique_id: string;
}


// Represents an invite link for a chat.
export interface ChatInviteLink {
    invite_link: string;
    creator: User;
    creates_join_request: boolean;
    is_primary: boolean;
    is_revoked: boolean;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    pending_join_request_count?: number;
    subscription_period?: number;
    subscription_price?: number;
}


// Represents the rights of an administrator in a chat.
export interface ChatAdministratorRights {
    is_anonymous: boolean;
    can_manage_chat: boolean;
    can_delete_messages: boolean;
    can_manage_video_chats: boolean;
    can_restrict_members: boolean;
    can_promote_members: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_post_stories: boolean;
    can_edit_stories: boolean;
    can_delete_stories: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
}

// This object represents changes in the status of a chat member.
export interface ChatMemberUpdated {
    chat: Chat;
    from: User;
    date: number;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
    invite_link?: ChatInviteLink;
    via_join_request?: boolean;
    via_chat_folder_invite_link?: boolean;
}


// This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
export type ChatMember = ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned;


// Represents a chat member that owns the chat and has all administrator privileges.
export interface ChatMemberOwner {
    status: string;
    user: User;
    is_anonymous: boolean;
    custom_title?: string;
}


// Represents a chat member that has some additional privileges.
export interface ChatMemberAdministrator {
    status: string;
    user: User;
    can_be_edited: boolean;
    is_anonymous: boolean;
    can_manage_chat: boolean;
    can_delete_messages: boolean;
    can_manage_video_chats: boolean;
    can_restrict_members: boolean;
    can_promote_members: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_post_stories: boolean;
    can_edit_stories: boolean;
    can_delete_stories: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
    custom_title?: string;
}


// Represents a chat member that has no additional privileges or restrictions.
export interface ChatMemberMember {
    status: string;
    user: User;
    until_date?: number;
}



// Represents a chat member that is under certain restrictions in the chat. Supergroups only.
export interface ChatMemberRestricted {
    status: string;
    user: User;
    is_member: boolean;
    can_send_messages: boolean;
    can_send_audios: boolean;
    can_send_documents: boolean;
    can_send_photos: boolean;
    can_send_videos: boolean;
    can_send_video_notes: boolean;
    can_send_voice_notes: boolean;
    can_send_polls: boolean;
    can_send_other_messages: boolean;
    can_add_web_page_previews: boolean;
    can_change_info: boolean;
    can_invite_users: boolean;
    can_pin_messages: boolean;
    can_manage_topics: boolean;
    until_date: number;
}


// Represents a chat member that isn't currently a member of the chat, but may join it themselves.
export interface ChatMemberLeft {
    status: string;
    user: User;
}


// Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
export interface ChatMemberBanned {
    status: string;
    user: User;
    until_date: number;
}

// Represents a join request sent to a chat.
export interface ChatJoinRequest {
    chat: Chat;
    from: User;
    user_chat_id: number;
    date: number;
    bio?: string;
    invite_link?: ChatInviteLink;
}


// Describes actions that a non-administrator user is allowed to take in a chat.
export interface ChatPermissions {
    can_send_messages?: boolean;
    can_send_audios?: boolean;
    can_send_documents?: boolean;
    can_send_photos?: boolean;
    can_send_videos?: boolean;
    can_send_video_notes?: boolean;
    can_send_voice_notes?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
}


// Describes the birthdate of a user.
export interface Birthdate {
    day: number;    //  Day of the user's birth; 1-31
    month: number;  //  Month of the user's birth; 1-12
    year?: number;   //  Optional. Year of the user's birth
}

// Contains information about the start page settings of a Telegram Business account.
export interface BusinessIntro {
    title?: string;
    message?: string;
    sticker?: Sticker;
}

// Contains information about the location of a Telegram Business account.
export interface BusinessLocation {
    address: string;
    location?: Location;
}


// Describes an interval of time during which a business is open.
export interface BusinessOpeningHoursInterval {
    opening_minute: number; //The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
    closing_minute: number; //The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
}


// Describes the opening hours of a business.
export interface BusinessOpeningHours {
    time_zone_name: string;
    opening_hours: BusinessOpeningHoursInterval[];
}


// Represents a location to which a chat is connected.
export interface ChatLocation {
    location: Location;
    address: string;
}


// This object describes the type of a reaction. Currently, it can be one of
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;


// The reaction is based on an emoji.
export interface ReactionTypeEmoji {
    type: string;   //Type of the reaction, always “emoji”
    emoji: string;  //Reaction emoji. Currently, it can be one of "👍", "👎", "❤", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "🤬", "😢", "🎉", "🤩", "🤮", "💩", "🙏", "👌", "🕊", "🤡", "🥱", "🥴", "😍", "🐳", "❤‍🔥", "🌚", "🌭", "💯", "🤣", "⚡", "🍌", "🏆", "💔", "🤨", "😐", "🍓", "🍾", "💋", "🖕", "😈", "😴", "😭", "🤓", "👻", "👨‍💻", "👀", "🎃", "🙈", "😇", "😨", "🤝", "✍", "🤗", "🫡", "🎅", "🎄", "☃", "💅", "🤪", "🗿", "🆒", "💘", "🙉", "🦄", "😘", "💊", "🙊", "😎", "👾", "🤷‍♂", "🤷", "🤷‍♀", "😡"
}

// The reaction is based on a custom emoji.
export interface ReactionTypeCustomEmoji {
    type: string;   //Type of the reaction, always “custom_emoji”
    custom_emoji_id: string;    //Custom emoji identifier
}

// The reaction is paid.
export interface ReactionTypePaid {
    type: string;   //Type of the reaction, always “paid”
}

// Represents a reaction added to a message along with the number of times it was added.
export interface ReactionCount {
    type: ReactionType;
    total_count: number;
}


// This object represents a change of a reaction on a message performed by a user.
export interface MessageReactionUpdated {
    chat: Chat;
    message_id: number;
    user?: User;
    actor_chat?: Chat;
    date: number;
    old_reaction: ReactionType[];
    new_reaction: ReactionType[];
}


// This object represents reaction changes on a message with anonymous reactions.
export interface MessageReactionCountUpdated {
    chat: Chat;
    message_id: number;
    date: number;
    reactions: ReactionCount[];
}


// This object represents a forum topic.
export interface ForumTopic {
    message_thread_id: number;
    name: string;
    icon_color: number;
    icon_custom_emoji_id?: string;
}


// This object represents a bot command.
export interface BotCommand {
    command: string;    // Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
    description: string;
}


// This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;


// Determining list of commands -
// The following algorithm is used to determine the list of commands for a particular user viewing the bot menu. The first list of commands which is set is returned:

// Commands in the chat with the bot -

// botCommandScopeChat + language_code
// botCommandScopeChat
// botCommandScopeAllPrivateChats + language_code
// botCommandScopeAllPrivateChats
// botCommandScopeDefault + language_code
// botCommandScopeDefault


// Commands in group and supergroup chats

// botCommandScopeChatMember + language_code
// botCommandScopeChatMember
// botCommandScopeChatAdministrators + language_code (administrators only)
// botCommandScopeChatAdministrators (administrators only)
// botCommandScopeChat + language_code
// botCommandScopeChat
// botCommandScopeAllChatAdministrators + language_code (administrators only)
// botCommandScopeAllChatAdministrators (administrators only)
// botCommandScopeAllGroupChats + language_code
// botCommandScopeAllGroupChats
// botCommandScopeDefault + language_code
// botCommandScopeDefault





// Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.

export interface BotCommandScopeDefault {
    type: string;   //Scope type, must be default
}

// Represents the scope of bot commands, covering all private chats.
export interface BotCommandScopeAllPrivateChats {
    type: string;   //Scope type, must be all_private_chats
}



// Represents the scope of bot commands, covering all group and supergroup chats.
export interface BotCommandScopeAllGroupChats {
    type: string;   //Scope type, must be all_group_chats
}


// Represents the scope of bot commands, covering all group and supergroup chat administrators.
export interface BotCommandScopeAllChatAdministrators {
    type: string;   //Scope type, must be all_chat_administrators
}


// Represents the scope of bot commands, covering a specific chat.
export interface BotCommandScopeChat {
    type: string;   //Scope type, must be chat
    chat_id: number | string;   //Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
export interface BotCommandScopeChatAdministrators {
    type: string;   //Scope type, must be chat_administrators
    chat_id: number | string;   //Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
}


// Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
export interface BotCommandScopeChatMember {
    type: string;   //Scope type, must be chat_member
    chat_id: number | string;   //Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    user_id: number;    //Unique identifier of the target user
}


// This object represents the bot's name.
export interface BotName {
    name: string;
}

// This object represents the bot's description.
export interface BotDescription {
    description: string;
}


// This object represents the bot's short description.
export interface BotShortDescription {
    short_description: string;
}


// This object describes the bot's menu button in a private chat. It should be one of
// If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.
export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;


// Represents a menu button, which opens the bot's list of commands.
export interface MenuButtonCommands {
    type: string;   //Type of the button, must be commands
}


// Represents a menu button, which launches a Web App.
export interface MenuButtonWebApp {
    type: string;   //Type of the button, must be web_app
    text: string;   //Text on the button
    web_app: WebAppInfo;    //Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery.
}


// Describes that no specific value for the menu button was set.
export interface MenuButtonDefault {
    type: string;   //Type of the button, must be default
}


// This object describes the source of a chat boost. It can be one of
export type ChatBoostSource = ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway;


// The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.
export interface ChatBoostSourcePremium {
    source: string; //Source of the boost, always “premium”
    user: User; //User that boosted the chat
}

// The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
export interface ChatBoostSourceGiftCode {
    source: string; //Source of the boost, always “gift_code”
    user: User; //User for which the gift code was created
}





// The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways.
export interface ChatBoostSourceGiveaway {
    source: string; //	Source of the boost, always “giveaway”
    giveaway_message_id: number; //Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
    user?: User; //The user which first boosted this chat
    prize_star_count?: number;//Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
    is_unclaimed?: boolean;
}



// This object contains information about a chat boost.
export interface ChatBoost {
    boost_id: string;   //Unique identifier of the boost
    add_date: number;   //Point in time (Unix timestamp) when the chat was boosted
    expiration_date: number;   //Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
    source: ChatBoostSource;    //Source of the added boost
}

// This object represents a boost added to a chat or changed.
export interface ChatBoostUpdated {
    chat: Chat;
    boost: ChatBoost;
}

// This object represents a boost removed from a chat.
export interface ChatBoostRemoved {
    chat: Chat;
    boost_id: string;
    remove_date: number;
    source: ChatBoostSource;
}

// This object represents a list of boosts added to a chat by a user.
export interface UserChatBoosts {
    boosts: ChatBoost[];
}

// Describes the connection of the bot with a business account.
export interface BusinessConnection {
    id: string; //Unique identifier of the business connection
    user: User; //User identifier of the connection owner
    user_chat_id: number;   //	Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
    date: number;   //Date the connection was established in Unix time
    can_reply: boolean; //True, if the bot can act on behalf of the business account in chats that were active in the last 24 hours
    is_enabled: boolean;   //True, if the connection is active
}


// This object is received when messages are deleted from a connected business account.
export interface BusinessMessagesDeleted {
    business_connection_id: string; //Unique identifier of the business connection
    chat: Chat; //Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
    message_ids: number[];  //The list of identifiers of deleted messages in the chat of the business account
}


// Describes why a request was unsuccessful.
export interface ResponseParameters {
    migrate_to_chat_id?: number;    //Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
    retry_after?: number;  //Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
}


// This object represents the content of a media message to be sent. It should be one of
export type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;



// Represents a photo to be sent.
export interface InputMediaPhoto {
    type: string;   //Type of the media, must be photo
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    caption?: string;   //Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
    parse_mode?: string;    //Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;//Optional. Pass True, if the caption must be shown above the message media
    has_spoiler?: boolean; //Optional. Pass True if the photo needs to be covered with a spoiler animation
}


// Represents a video to be sent.
export interface InputMediaVideo {
    type: string;   //Type of the media, must be video
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    thumbnail?: string;    //Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
    cover?: string; //Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    start_timestamp?: number;//Optional. Start timestamp for the video in the message
    caption?: string;   //Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
    parse_mode?: string;    //Optional. Mode for parsing entities in the video caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
    width?: number; //Optional. Video width
    height?: number;    //Optional. Video height
    duration?: number;  //Optional. Video duration in seconds
    supports_streaming?: boolean;   //Optional. Pass True if the video needs to be streamed
    has_spoiler?: boolean;  //Optional. Pass True if the video needs to be covered with a spoiler animation
}


// Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
export interface InputMediaAnimation {
    type: string;   //Type of the media, must be animation
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    thumbnail?: string;    //Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
    caption?: string;   //Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
    parse_mode?: string;    //Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
    show_caption_above_media?: boolean;//Optional. Pass True, if the caption must be shown above the message media
    width?: number; //Optional. Animation width
    height?: number;    //Optional. Animation height
    duration?: number;  //Optional. Animation duration in seconds
    has_spoiler?: boolean;  //Optional. Pass True if the animation needs to be covered with a spoiler animation
}


// Represents an audio file to be treated as music to be sent.
export interface InputMediaAudio {
    type: string;   //Type of the media, must be audio
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    thumbnail?: string;    //Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
    caption?: string;   //Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
    parse_mode?: string;    //Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
    duration?: number;  //Optional. Duration of the audio in seconds
    performer?: string; //Optional. Performer of the audio
    title?: string; //Optional. Title of the audio
}


// Represents a general file to be sent.
export interface InputMediaDocument {
    type: string;   //Type of the media, must be document
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    thumbnail?: string;    //Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
    caption?: string;   //Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
    parse_mode?: string;    //Optional. Mode for parsing entities in the document caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
    disable_content_type_detection?: boolean;  //Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is not a local file.
}


// This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
export interface InputFile {
}


// This object describes the paid media to be sent. Currently, it can be one of
export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;


// The paid media to send is a photo.
export interface InputPaidMediaPhoto {
    type: string;   //Type of the media, must be photo
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
}

// The paid media to send is a video.
export interface InputPaidMediaVideo {
    type: string;   //Type of the media, must be video
    media: string;  //File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    thumbnail?: string;    //Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
    cover?: string; //Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
    start_timestamp?: number; //Optional. Start timestamp for the video in the message
    width?: number; //Optional. Video width
    height?: number;    //Optional. Video height
    duration?: number;  //Optional. Video duration in seconds
    supports_streaming?: boolean;   //Optional. Pass True if the video needs to be streamed
}


// Sending files -
//     There are three ways to send files (photos, stickers, audio, media, etc.):
//         1.  If the file is already stored somewhere on the Telegram servers, you don't need to reupload it: each file object has a file_id field, simply pass this file_id as a parameter instead of uploading. There are no limits for files sent this way.
//         2.  Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.
//         3.  Post the file using multipart/form-data in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.

// Sending by file_id -
//     - It is not possible to change the file type when resending by file_id. I.e. a video can't be sent as a photo, a photo can't be sent as a document, etc.
//     - It is not possible to resend thumbnails.
//     - Resending a photo by file_id will send all of its sizes.
//     - file_id is unique for each individual bot and can't be transferred from one bot to another.
//     - file_id uniquely identifies a file, but a file can have different valid file_ids even for the same bot.

// Sending by URL -
//     - When sending by URL the target file must have the correct MIME type (e.g., audio/mpeg for sendAudio, etc.).
//     - In sendDocument, sending by URL will currently only work for .PDF and .ZIP files.
//     - To use sendVoice, the file must have the type audio/ogg and be no more than 1MB in size. 1-20MB voice notes will be sent as files.
//     - Other configurations may work but we can't guarantee that they will.


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
























