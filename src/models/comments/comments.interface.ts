import { Post } from "../posts/post.interface";
import { User } from "../users/users.interface";
import { RootModel } from "../root.interface";

export interface comments extends RootModel {
	content: String;
	post: Post;
	user: User;
}
