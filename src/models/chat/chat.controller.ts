import { Response, Request } from "express";
import { crudControllers } from "../../utils/crud";
import ChatModel from "./chat.model";
import { FormatResponse } from "../../utils/formatResponse";
import { CustomError } from "../../utils/error";

const response = new FormatResponse();
const errorResponse = new CustomError();
export class ChatController {
	async getMany(req: Request, res: Response) {
		try {
			const docs: any = await crudControllers(ChatModel).getOne(req);
			response.sendResponse(res, 200, docs);
		} catch (error) {
			console.log(error);
			errorResponse.serverError(res);
		}
	}
}
