import { Sequelize } from "sequelize";

export const sequelizeInstance = new Sequelize(
	"postgres://mixed_code:mixed_code@localhost:3306/mydb"
);
