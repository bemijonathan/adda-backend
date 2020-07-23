import { Response, Request } from "express";
import { User } from "../models/users/users.interface";
import Users from "../models/users/users.model";
import { generateToken } from "./auth";
import { FormatResponse } from "./formatResponse";

let f = new FormatResponse();

export const signUp = async (req: Request, res: Response) => {
	try {
		let user: User = await Users.create(req.body);
		let token: string = generateToken(user.id);
		f.sendResponse(res, 201, { ...user, token });
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};
