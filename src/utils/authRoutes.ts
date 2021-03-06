import { Response, Request } from "express";

import Users, { User } from "../models/users/users.model";
import { generateToken, validatepassword } from "./auth";
import { FormatResponse } from "./formatResponse";
import { CustomError } from "./error";
import { logs } from "./logger";

let f = new FormatResponse();
let e = new CustomError();

export const signUp = async (req: Request, res: Response) => {
	try {
		let user: User = await Users.create(req.body);
		let token = generateToken(user.id);
		console.log(user.password);
		f.sendResponse(res, 201, { user, token });
	} catch (error) {
		if (error.name === "MongoError" && error.code === 11000) {
			e.clientError(res, "user with credentials already exist");
		} else {
			e.clientError(res, error.message);
		}
	}
};

export const signIn = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return e.clientError(res, "missing fields");
	}
	try {
		let user: User | null = await Users.findOne({ email: req.body.email });
		if (user) {
			if (validatepassword(password, user.password)) {
				let token = generateToken(user.id);
				f.sendResponse(res, 201, token);
			} else {
				e.clientError(res, "incorrect username or password");
			}
		} else {
			e.notfound(res, "no  user associated with that account");
		}
	} catch (error) {
		logs.error(error);
		e.clientError(res, "");
	}
};
