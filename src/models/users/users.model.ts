import { DataTypes, Model, ModelCtor } from "sequelize";
import { User } from "../users/users.interface";
import { sequelizeInstance as sequelize, sequelizeInstance } from "../../db";
import { hashedpassword } from "../../utils/auth";
import { UUIDV4 } from "sequelize";

class Users extends Model implements User {
	id!: string;
	name!: string;
	username!: string;
	profile!: string;
	email!: string;
	private _password!: string;
	posts!: [string];
	comments!: [string];
	friends!: [string];
	notifications!: [string];
	admin!: Boolean;
	photos!: string;
	OfficeAddress!: string;
	facebook!: string;
	twitter!: string;
	Google!: string;
	pinterest!: string;
	readonly createdAt!: Date;
	readonly updatedAt!: Date;
	get password() {
		return this._password;
	}
	set password(value: string) {
		this._password = value;
	}
}

Users.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		profile: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		posts: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		friends: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		notifications: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		admin: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		photos: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		OfficeAddress: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		facebook: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		twitter: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Google: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		pinterest: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		hooks: {
			beforeCreate(user: Users, options) {
				user.password = hashedpassword(user.password);
			},
		},
		sequelize,
		modelName: "User",
		timestamps: true,
	}
);

Users.sync();

export default Users;
