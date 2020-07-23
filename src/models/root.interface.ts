import { Model } from "sequelize/types";

export interface RootModel extends Model {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}
