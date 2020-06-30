import { Conversation } from "../conversation/conversation.interface";
import { User } from "../users/users.interface";

interface Chat {
	message: String;
	conversationId: Conversation;
	sender: User;
}

export interface Messages {
	messages: [Chat];
}
