import { User } from "../users/users.interface";

export interface Conversation {
	recieverId: User;
	sender: User;
	id: String;
}
