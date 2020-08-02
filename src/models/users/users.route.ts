import { IRouter, Router } from "express";
import { crudControllers } from "../../utils/crud";
import { UserController } from "./users.controller";

const UserRoute: IRouter = Router();
const controller = new UserController();

UserRoute.route("/").get(controller.getAll).post(controller.createUser);
UserRoute.route("/:id")
	.delete(controller.deleteUser)
	.get(controller.getOne)
	.patch(controller.updateUser);

export default UserRoute;
