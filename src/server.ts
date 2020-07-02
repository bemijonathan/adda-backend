import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import ChatRoute from "./models/chat/chat.route";

const app: express.Application = express();
app.use(bodyParser.json());

app.use("/api/chat", ChatRoute);

export default app;
