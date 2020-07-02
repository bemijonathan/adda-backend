import { Request, Response } from "express";
// import { Model } from "sequelize/types";

// export interfac extends Request {
// 	user: { id?: number };
// }

export const getOne = (model: any) => async (req: Request, res: Response) => {
	try {
		const doc = await model.findByPk(req.params.id);
		return doc;
	} catch (e) {
		console.error(e);
		throw new Error("not");
		res.status(400).end();
	}
};

export const getMany = (model: any) => async (req: Request, res: Response) => {
	try {
		const docs = await model.find({});

		res.status(200).json({ data: docs });
	} catch (e) {
		console.error(e);
		res.status(400).end();
	}
};

export const createOne = (model: any) => async (
	req: Request,
	res: Response
) => {
	try {
		const doc = await model.create({ ...req.body });
		res.status(201).json({ data: doc });
	} catch (e) {
		console.error(e);
		res.status(400).end();
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

let b: string | number = 10;
