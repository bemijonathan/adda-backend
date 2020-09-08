import chalk from "chalk";
import { Response } from "express";

export class FormatResponse {
	sendResponse<T>(res: Response, status: number, data: T): Response {
		return res.status(status).send({
			status: true,
			data,
		});
	}
}
