import { Router, IRouter } from "express";
import { ChatService } from "./chat.services";

const ChatRoute: IRouter = Router();

const controller = new ChatService();

ChatRoute.route("/chat").get((req, res) => controller.getMany(req, res));

export default ChatRoute;
