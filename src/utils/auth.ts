import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashedpassword = (password: string): string => {
	let hashed: string = "";
	bcrypt.hash(password, 20, function (err, hash) {
		if (err) {
			throw new Error(err.message);
		} else {
			hashed = hash;
		}
	});
	return hashed;
};

export const validatepassword = (
	myPlaintextPassword: string,
	hash: string
): boolean => {
	return bcrypt.compareSync(myPlaintextPassword, hash);
};

export const generateToken = (id: string): string => {
	return jwt.sign(id, "jona", {
		expiresIn: "24h",
	});
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
