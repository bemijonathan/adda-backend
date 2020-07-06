import { Response } from "express";

export class CustomError {
	constructor() {}
	notfound(res: Response) {
		return res.status(404).send({
			status: false,
			error: "not found",
		});
	}
	serverError(res: Response) {
		res.status(400).send({
			status: false,
			error: "internal server error",
		});
	}
	unprocessedEntity(res: Response) {
		return res.status(422).send({
			status: false,
			error: "unprocessed entity",
		});
	}
	clientError(res: Response, data: any) {
		return res.status(400).send({
			status: false,
			error: data,
		});
	}
	unauthenticated(res: Response) {
		return res.status(401).send({
			status: false,
			error: "user is unauthenticated",
		});
	}
}
