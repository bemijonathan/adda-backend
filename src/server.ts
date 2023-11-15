import express, { Response, Request } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import ChatRoute from "./models/chat/chat.route";
import UserRoute from "./models/users/users.route";
import { signIn, signUp } from "./utils/authRoutes";
// import * as morgan from 'morgan'

const app: express.Application = express();
// app.use(morgan())
const apiversion: string = "/api";
app.use(morgan("tiny"));
app.use(bodyParser.json());

const versionApi = (version:string, route:string) =>  version + route

app.post(versionApi("/signup"), signUp);
app.post(versionApi("/signin"), signIn);
app.use(versionApi("/chat"), ChatRoute);
app.use(versionApi("/user"), UserRoute);

// app.use(`${apiversion}/user`, )

export default app;
