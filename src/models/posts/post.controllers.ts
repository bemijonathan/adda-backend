import { crudControllers } from "../../utils/crud";
import { CustomError } from "../../utils/error";
import { FormatResponse } from "../../utils/formatResponse";
import { Post } from "./post.model";
import { Request, Response } from "express";
import { logs } from "../../utils/logger";

const f = new FormatResponse();
const e = new CustomError();

class postController {
	async getone(req: Request, res: Response) {
		try {
			const post = await crudControllers(Post).getOne(req);
			f.sendResponse(res, 201, post);
		} catch (error) {
			e.unprocessedEntity(res);
		}
	}

	async destroyOne(req: Request, res: Response) {
		try {
			const status = await crudControllers(Post).removeOne(req);
			status
				? f.sendResponse(res, 203, { deleted: "" })
				: e.clientError(res, "failed to delete item");
		} catch (err) {
			logs.error(err);
			e.unprocessedEntity(res);
		}
	}

	async updateOne(req: Request, res: Response) {
		try {
			const update = await crudControllers(Post).updateOne(req);
			update ? f.sendResponse(res, 201, { update }) : e.notfound(res);
		} catch (error) {
			logs.error(error);
			e.unprocessedEntity(res);
		}
	}

	async getAll(req: Request, res: Response) {
		try {
			const data = await crudControllers(Post).getMany(req);
			f.sendResponse(res, 201, data);
		} catch (error) {
			logs.error(error);
			e.unprocessedEntity(res);
		}
	}

	async createOne() {
		// alot has to happen here
		// create the post and the picture if either fail delete both
	}
}

export const PostController = new postController();
