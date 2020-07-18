import { Model, DataTypes } from "sequelize";
import { sequelizeInstance as sequelize } from "../../db";
import { IChat } from "./chat.interface";
// const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class ChatModel extends Model implements IChat {
	id!: number;
	message!: string;
	conversationId!: string;
	sender!: string;
	readonly createdAt!: Date;
	readonly updatedAt!: Date;
}

ChatModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		message: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		conversationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		sender: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
	},
	{
		tableName: "chatModel",
		sequelize,
	}
);

export default ChatModel;
