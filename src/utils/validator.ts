import Joi from "joi";

export const signupValidator = Joi.object({
	email: Joi.string()
		.trim()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
		.required(),
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	gender: Joi.string().valid("Male", "Female").required(),
	age: Joi.number().required(),
	country: Joi.string().required(),
});

// signupValidator.validate({}, {abortEarly:false})
