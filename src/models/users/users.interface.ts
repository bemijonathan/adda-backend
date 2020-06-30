import { Post } from "../posts/post.interface";

export interface User {
	name: String;
	username: String;
	profile: String;
	email: String;
	readonly password: String;
	createdAt: Date;
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
