import { Response, Request } from "express";
import { crudControllers } from "../../utils/crud";
import ChatModel from "./chat.model";
import { IChat } from "./chat.interface";
import { FormatResponse } from "../../utils/formatResponse";

const response = new FormatResponse();
export class ChatService {
	async getMany(req: Request, res: Response) {
		const docs: any = await crudControllers(ChatModel).getMany(req, res);
		response.sendResponse(res, docs, 200);
	}
}
