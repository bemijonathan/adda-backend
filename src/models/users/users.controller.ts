import { crudControllers } from "../../utils/crud";
import { CustomError } from "../../utils/error";
import { FormatResponse } from "../../utils/formatResponse";
import { User } from "./users.model";
import Users from "./users.model";
import { Request, Response } from "express";

let response = new FormatResponse();
let errorResponse = new CustomError();

export class UserController {
	async createUser(req: Request, res: Response) {
		try {
			const user: User = await await Users.create(req.body);
			const { email, username, id } = user;
			response.sendResponse(res, 201, { email, username, id });
		} catch (e) {
			errorResponse.unprocessedEntity(e);
		}
	}
	async getAll(req: Request, res: Response) {
		try {
			const user: User[] = await Users.find().select(
				" username email id  friends"
			);
			response.sendResponse(res, 200, user);
		} catch (e) {
			errorResponse.clientError(res, e);
		}
	}
	async removeOne(req: Request, res: Response) {
		try {
			const done = await crudControllers(Users).removeOne(req);
			response.sendResponse(res, 204, done);
		} catch (e) {
			console.log(e);
			errorResponse.unprocessedEntity(e);
		}
	}
	async getOne(req: Request, res: Response) {
		try {
			const user: User = await crudControllers(Users).getOne(req);
			response.sendResponse(res, 200, user);
		} catch (error) {}
	}
}
