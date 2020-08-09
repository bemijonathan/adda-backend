import { iPost } from "../posts/post.model";
import { RootModel } from "../root.interface";

export interface comments extends RootModel {
	content: string;
	post: iPost;
}
