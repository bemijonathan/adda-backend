import { Conversation } from "../conversation/conversation.interface";
//
import { RootModel } from "../root.interface";

export interface IChat extends RootModel {
	message: String;
	conversationId: String;
	sender: String;
}

export interface Messages extends RootModel {
	messages: [IChat];
}
