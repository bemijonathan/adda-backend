import { RootModel } from "../root.interface";
import { User } from "../users/users.model";

export interface Conversation extends RootModel {
	recieverId: User;
	sender: User;
}
