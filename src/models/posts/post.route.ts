import { IRouter, Router } from "express";
import { authenticate } from "../../utils/auth";
import { PostController as controller } from "./post.controllers";

const PostRoute: IRouter = Router();

PostRoute.route("/")
	.get(controller.getAll)
	.post(authenticate, controller.createOne);
PostRoute.route("/:id")
	.delete(controller.destroyOne)
	.get(controller.getone)
	.patch(controller.updateOne);

export default PostRoute;
