import { Post } from "../posts/post.interface";
import { RootModel } from "../root.interface";

export interface User extends RootModel {
	name: String;
	username: String;
	profile: String;
	email: String;
	readonly password: String;
	posts?: [Post];
	comments?: [String];
	friends?: [User];
	notifications?: [];
	admin: Boolean;
	photos?: String;
	about?: {
		OfficeAddress?: String;
	};
	socialMedia?: {
		facebook?: String;
		twitter?: String;
		Google?: String;
		pinterest?: String;
	};
}
