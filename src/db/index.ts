import { Sequelize } from "sequelize";

const config = {
	username: "mixed_code",
	password: "mixed_code",
	database: "new",
	host: "127.0.0.1",
	port: 5432,
	dialect: "postgres",
};

export const sequelizeInstance = new Sequelize(
	config.database,
	config.username,
	config.password,
	{ dialect: "postgres" }
);
