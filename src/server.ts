import express, { Response, Request } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import ChatRoute from "./models/chat/chat.route";
import UserRoute from "./models/users/users.route";
// import * as morgan from 'morgan'

const app: express.Application = express();
// app.use(morgan())
const apiversion: string = "/api";
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use(`${apiversion}/chat`, ChatRoute);
app.use(`${apiversion}/user`, UserRoute);
// app.use(`${apiversion}/user`, )

export default app;
