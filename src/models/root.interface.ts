import { Model } from "sequelize/types";

export interface RootModel extends Model {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}
