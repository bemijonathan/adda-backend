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
			for (let d of data as any[]) {
				delete d.password;
				delete d.email;
				d.id = d._id;
				delete d._id;
				console.log(d);
			}
			return data;
		} else {
			const d = JSON.parse(JSON.stringify(data));
			delete d.password;
			delete d.email;
			return d;
		}
	}
}
