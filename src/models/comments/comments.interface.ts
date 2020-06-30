import { Post } from "../posts/post.interface";
import { User } from "../users/users.interface";

export interface comments {
	content: String;
	createdAt: Date;
	post: Post;
	user: User;
}
