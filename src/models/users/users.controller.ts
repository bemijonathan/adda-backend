import { crudControllers } from "../../utils/crud";
import { CustomError } from "../../utils/error";
import { FormatResponse } from "../../utils/formatResponse";
import { User } from "./users.model";
import Users from "./users.model";
import { Request, Response } from "express";
import chalk from "chalk";
import { logger as logs } from "../../utils/logger";

const response = new FormatResponse();
const errorResponse = new CustomError();

export class UserController {
	async createUser(req: Request, res: Response): Promise<void> {
		try {
			const user: User = await Users.create(req.body);
			const { email, username, id } = user;
			response.sendResponse(res, 201, { email, username, id });
		} catch (e) {
			errorResponse.unprocessedEntity(e);
		}
	}
	async deleteUser(req: Request, res: Response): Promise<void> {
		try {
			const status = await crudControllers(Users).removeOne(req);
			if (status) {
				response.sendResponse(res, 200, status);
			} else {
				errorResponse.clientError(res, "delete resource failed");
			}
		} catch (error) {
			logs.error(error);
			errorResponse.serverError(res, error);
		}
	}
	async getAll(req: Request, res: Response): Promise<void> {
		try {
			const user: User[] = await Users.find().select(
				" username email id  friends"
			);
			response.sendResponse(res, 200, user);
		} catch (e) {
			console.log(chalk.redBright(e));
			errorResponse.clientError(res, e);
		}
	}
	async removeOne(req: Request, res: Response): Promise<void> {
		try {
			const done = await crudControllers(Users).removeOne(req);
			if (done.deletedCount) {
				response.sendResponse(res, 204, "deleted");
			} else {
				response.sendResponse(res, 404, "record not found");
			}
		} catch (e) {
			console.log(e);
			errorResponse.unprocessedEntity(e);
		}
	}
	async getOne(req: Request, res: Response): Promise<void> {
		try {
			const user: User = await crudControllers(Users).getOne(req);
			logs.warning(user);
			if (user) {
				response.sendResponse(res, 200, user);
			} else {
				errorResponse.notfound(res);
			}
		} catch (error) {
			logs.error(error);
			errorResponse.notfound(res);
		}
	}
	async updateUser(req: Request, res: Response): Promise<void> {
		try {
			const user: User = await crudControllers(Users).updateOne(req);
			if (user) {
				response.sendResponse(res, 201, "updated");
			} else {
				errorResponse.notfound(res);
			}
		} catch (error) {
			logs.error(error);
			errorResponse.clientError(res, error);
		}
	}
}
