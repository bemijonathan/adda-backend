import { NextFunction } from "express";
import mongoose, { Document } from "mongoose";
import { hashedpassword, validatepassword } from "../../utils/auth";

export interface User extends Document {
	name: string;
	username: string;
	profile: string;
	email: string;
	password: string;
	posts: [string];
	comments: [string];
	friends: [string];
	notifications: [string];
	admin: Boolean;
	photos: string;
	OfficeAddress: string;
	facebook: string;
	twitter: string;
	Google: string;
	pinterest: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}

const UsersSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		profile: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		posts: {
			type: [mongoose.SchemaTypes.ObjectId],
			refs: "post",
		},
		comments: {
			type: [mongoose.SchemaTypes.ObjectId],
			refs: "comment",
		},
		friends: {
			type: [mongoose.SchemaTypes.ObjectId],
			refs: "user",
		},
		notifications: {
			type: [
				{
					link: String,
					text: String,
					time: {
						type: Date,
						default: Date.now(),
					},
				},
			],
			refs: "post",
		},
		admin: {
			type: Boolean,
			default: false,
		},
		photos: {
			type: String,
		},
		OfficeAddress: {
			type: String,
		},
		facebook: {
			type: String,
		},
		twitter: {
			type: String,
		},
		Google: {
			type: String,
		},
		pinterest: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

UsersSchema.pre("save", function (next) {
	const user: User = this as User;
	if (!user.isModified("password")) {
		return next();
	}
	let hash = hashedpassword(user.password);
	user.password = hash;
	next();
});

UsersSchema.methods.checkPassword = (
	password: string,
	hash: string
): boolean => {
	return validatepassword(password, hash);
};

const usermodel = mongoose.model<User>("user", UsersSchema);

export default usermodel;
