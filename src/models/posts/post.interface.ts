import { User } from "../users/users.interface";

export interface Post {
	title: String;
	media?: [{ link: String; type: String }];
	likes: Number;
	likedbyMe?: Boolean;
	author: User;
	createdAt: Date;
}
