import { crudControllers } from "../../utils/crud";
import { CustomError } from "../../utils/error";
import { FormatResponse } from "../../utils/formatResponse";
import { User } from "./users.interface";
import Users from "./users.model";
import { Request, Response } from "express";

let response = new FormatResponse();
let errorResponse = new CustomError();

export class UserController {
	async createUser(req: Request, res: Response) {
		try {
			const user: User = await crudControllers(Users).createOne(req);
			response.sendResponse(res, 201, user);
		} catch (e) {
			errorResponse.unprocessedEntity(e);
		}
	}

	async getAll(req: Request, res: Response) {
		try {
			const user: User[] = await crudControllers(Users).getMany();
			response.sendResponse(res, 201, user);
		} catch (e) {
			errorResponse.clientError(res, e);
		}
	}
}
