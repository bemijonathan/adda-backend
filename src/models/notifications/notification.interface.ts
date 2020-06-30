import { User } from "../users/users.interface";

export interface notification {
	title: String;
	user: User;
	actions: actions;
}

enum actions {
	"like",
	"comment",
	"message",
}
