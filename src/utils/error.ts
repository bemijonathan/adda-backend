import { Response } from "express";

export class CustomError {
	constructor(private res: Response) {}
	notfound() {
		return this.res.status(404).send({
			status: false,
			error: "not found",
		});
	}
	serverError() {
		return this.res.status(500).send({
			status: false,
			error: "internal server error",
		});
	}
	unprocessedEntity() {
		return this.res.status(422).send({
			status: false,
			error: "unprocessed entity",
		});
	}
	clientError(data: any) {
		return this.res.status(400).send({
			status: false,
			error: data,
		});
	}
	unauthenticated() {
		return this.res.status(401).send({
			status: false,
			error: "user is unauthenticated",
		});
	}
}
