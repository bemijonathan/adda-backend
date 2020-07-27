import { Request, Response } from "express";
import { Model } from "mongoose";

export const getOne = <T>(model: T) => async (req: Request): Promise<T> => {
	try {
		const doc = await (model as any).find(req.params.id);
		return doc;
	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
};

export const getMany = <T>(model: T) => async (req?: Request): Promise<T[]> => {
	try {
		return await (model as any).find();
	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
};

export const createOne = <T>(model: T) => async (req: Request): Promise<T> => {
	try {
		let user = await (model as any).create({ ...req.body });
		return user;
	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
};

export const updateOne = <T>(model: T) => async (
	req: Request,
	res: Response
): Promise<T | void> => {
	try {
		const updatedDoc = await (model as any).findOneAndUpdate(
			{
				id: req.params.id,
			},
			req.body,
			{ new: true }
		);

		if (!updatedDoc) {
			throw new Error("unable to update document");
		} else {
			return updatedDoc;
		}
	} catch (e) {
		throw new Error(e);
	}
};

//  to be edited
export const removeOne = <T>(model: T) => async (
	req: Request,
	res: Response
) => {
	try {
		const removed = await (model as any).findOneAndRemove({
			id: req.params.id,
		});

		if (!removed) {
			return res.status(400).end();
		}

		return res.status(200).json({ data: removed });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};

export const crudControllers = (model: any) => ({
	removeOne: removeOne(model),
	updateOne: updateOne(model),
	getMany: getMany(model),
	getOne: getOne(model),
	createOne: createOne(model),
});

// let b: string | number = 10;
