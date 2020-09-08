import { Response, Request } from "express";

import Users, { User } from "../models/users/users.model";
import { generateToken, validatepassword } from "./auth";
import { FormatResponse } from "./formatResponse";
import { CustomError } from "./error";
import { logger as logs } from "./logger";
import { signupValidator } from "./validator";

const f = new FormatResponse();
const e = new CustomError();

export const signUp = async (req: Request, res: Response): Promise<void> => {
	try {
		signupValidator.validate(req.body, { abortEarly: false });
		const user: User = await Users.create(req.body);
		const token = generateToken(user.id);
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

export const signIn = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;
	if (!email || !password) {
		e.clientError(res, "missing fields");
	} else
		try {
			const user: User | null = await Users.findOne({ email: req.body.email });
			if (user) {
				if (validatepassword(password, user.password)) {
					const token = generateToken(user.id);
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
