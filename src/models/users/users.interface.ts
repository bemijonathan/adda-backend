import { Post } from "../posts/post.interface";
import { RootModel } from "../root.interface";

export interface User extends RootModel {
	name: String;
	username: String;
	profile: String;
	email: String;
	readonly password: String;
	posts: [String];
	comments: [String];
	friends: [String];
	notifications: [String];
	admin: Boolean;
	photos: String;
	OfficeAddress: String;
	facebook: String;
	twitter: String;
	Google: String;
	pinterest: String;
}
