import { Response } from "express";

export class FormatResponse {
	constructor() {}
	sendResponse(res: Response, status: number, data: any) {
		res.status(status).send({
			status: true,
			data: data,
		});
	}
}
