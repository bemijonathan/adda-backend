//
import { RootModel } from "../root.interface";
import { User } from "../users/users.model";

export interface Post extends RootModel {
	title: String;
	media?: [{ link: String; type: String }];
	likes: Number;
	likedbyMe?: Boolean;
	author: User;
}
