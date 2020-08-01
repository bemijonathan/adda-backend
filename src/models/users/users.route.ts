import { IRouter, Router } from "express";
import { UserController } from "./users.controller";

const UserRoute: IRouter = Router();
const controller = new UserController();

UserRoute.route("/").get(controller.getAll).post(controller.createUser);
UserRoute.route("/:id").delete(controller.removeOne);

export default UserRoute;
