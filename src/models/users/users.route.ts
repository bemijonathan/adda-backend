import { IRouter, Router } from "express";
import { UserController } from "./users.controller";

const UserRoute: IRouter = Router();
const controller = new UserController();

UserRoute.route("/").post(controller.createUser).get(controller.getAll);

export default UserRoute;
