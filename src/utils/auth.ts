import bcrypt from "bcrypt";
import chalk from "chalk";
import jwt from "jsonwebtoken";
import { logs } from "./logger";

export const hashedpassword = (password: string): string => {
	let hashed: string = bcrypt.hashSync(password, 10);
	logs.warning(hashed);
	return hashed;
};

export const validatepassword = (
	myPlaintextPassword: string,
	hash: string
): boolean => {
	return bcrypt.compareSync(myPlaintextPassword, hash);
};

export const generateToken = (id: string) => {
	try {
		return jwt.sign({ id }, "jona", {
			expiresIn: "24h",
		});
	} catch (error) {
		console.log(chalk.bgRedBright(error));
	}
};

export const verifyToken = (token: string): boolean => {
	try {
		if (jwt.verify(token, "jona")) {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
};
