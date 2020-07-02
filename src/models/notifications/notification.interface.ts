import { User } from "../users/users.interface";
import { RootModel } from "../root.interface";

export interface notification extends RootModel {
	title: String;
	user: User;
	actions: actions;
}

enum actions {
	"like",
	"comment",
	"message",
}
