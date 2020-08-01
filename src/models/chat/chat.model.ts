import mongoose from "mongoose";
import { IChat } from "./chat.interface";

const ChatModel = new mongoose.Schema<IChat>(
	{
		message: {
			type: String,
			trim: true,
		},
		conversationId: {
			type: String,
			required: true,
		},
		sender: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("chat", ChatModel);
