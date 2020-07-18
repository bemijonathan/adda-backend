import { Request, Response } from "express";
import { Model } from "sequelize";

export const getOne = (model: any) => async (req: Request): Promise<Model> => {
	try {
		const doc = await model.findByPk(req.params.id);
		return doc;
	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
};

export const getMany = (model: any) => async () => {
	try {
		return await model.findAll();
	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
};

export const createOne = (model: any) => async (req: Request) => {
	try {
		return await model.create({ ...req.body });
	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
};

export const updateOne = (model: any) => async (
	req: Request,
	res: Response
) => {
	try {
		const updatedDoc = await model.findOneAndUpdate(
			{
				id: req.params.id,
			},
			req.body,
			{ new: true }
		);

		if (!updatedDoc) {
			return res.status(400).end();
		}

		res.status(200).json({ data: updatedDoc });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};

export const removeOne = (model: any) => async (
	req: Request,
	res: Response
) => {
	try {
		const removed = await model.findOneAndRemove({
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
