import { Response, Request } from "express";
import { User } from "../models/users/users.model";
import Users from "../models/users/users.model";
import { generateToken } from "./auth";
import { FormatResponse } from "./formatResponse";

let f = new FormatResponse();

export const signUp = async (req: Request, res: Response) => {
	let user = await Users.create(req.body);
	let token = generateToken(user.id);
	f.sendResponse(res, 201, { ...user, token });
};
