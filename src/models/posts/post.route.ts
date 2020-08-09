import { IRouter, Router } from "express";
import { PostController as controller } from "./post.controllers";

const PostRoute: IRouter = Router();

PostRoute.route("/").get(controller.getAll).post(controller.createOne);
PostRoute.route("/:id")
	.delete(controller.destroyOne)
	.get(controller.getone)
	.patch(controller.updateOne);

export default PostRoute;
