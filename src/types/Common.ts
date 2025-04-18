export type ChatTypes = 'private' | 'group' | 'supergroup' | 'channel';

export interface MessageId {
	message_id: number; // Unique message identifier.In specific instances(e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately.In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
}

export interface BaseMessageOrigin {
	type: string;
	date: number;
}

export enum MessageOriginType {
	User = 'user',
	HiddenUser = 'hidden_user',
	Chat = 'chat',
	Channel = 'channel',
}

export interface Dimensions {
	width: number;
	height: number;
}

export interface TelegramFile {
	file_id: string;
	file_unique_id: string;
	file_size?: number;
	file_path?: string;
	file_name?: string;
	mime_type?: string;
}
