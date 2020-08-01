import chalk from "chalk";
import { Response } from "express";

export class FormatResponse {
	sendResponse(res: Response, status: number, data: any) {
		res.status(status).send({
			status: true,
			data: this.serialize(data),
		});
	}
	serialize(data: any) {
		if (Array.isArray(data)) {
			for (let d in data as any[]) {
				let x = JSON.parse(JSON.stringify(d));
				delete x.password;
				delete x.email;
			}
			return data;
		} else {
			const d = JSON.parse(JSON.stringify(data));
			delete d.password;
			delete d.email;
		}
	}
}
