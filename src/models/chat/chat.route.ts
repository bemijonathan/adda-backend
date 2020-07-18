import { Router, IRouter } from "express";
import { ChatController } from "./chat.controller";

const ChatRoute: IRouter = Router();

const controller = new ChatController();

ChatRoute.route("/").get((req, res) => controller.getMany(req, res));

export default ChatRoute;
