import { User } from "../users/users.interface";
import { RootModel } from "../root.interface";

export interface Post extends RootModel {
	title: String;
	media?: [{ link: String; type: String }];
	likes: Number;
	likedbyMe?: Boolean;
	author: User;
}
