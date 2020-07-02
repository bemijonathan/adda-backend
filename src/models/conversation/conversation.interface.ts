import { User } from "../users/users.interface";
import { RootModel } from "../root.interface";

export interface Conversation extends RootModel {
	recieverId: User;
	sender: User;
}
