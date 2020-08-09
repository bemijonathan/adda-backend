import mongoose, { Document } from "mongoose";
import { User } from "../users/users.model";

export interface iPost extends Document {
	title: string;
	media?: [{ link: string; type: string }];
	likeCount: number;
	userLike: [string];
	likedbyMe?: boolean;
	author: User;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		media: {
			type: [{ link: String, type: String }],
		},
		likeCount: { type: Number, default: 0 },
		userLike: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "user",
		},
		author: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "user",
		},
	},
	{
		timestamps: true,
	}
);

export const Post = mongoose.model<iPost>("post", postSchema);
