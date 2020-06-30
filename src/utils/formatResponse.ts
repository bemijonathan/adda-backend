import { Response } from "express";

export class FormatResponse {
	constructor(
		private res: Response,
		private status: number,
		private data: any
	) {}
	sendResponse() {
		this.res.status(this.status).send({
			status: true,
			data: this.data,
		});
	}
}
