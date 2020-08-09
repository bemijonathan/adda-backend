import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import ChatRoute from "./models/chat/chat.route";
import UserRoute from "./models/users/users.route";
import { signIn, signUp } from "./utils/authRoutes";
import PostRoute from "./models/posts/post.route";
// import * as morgan from 'morgan'

const app: express.Application = express();
// app.use(morgan())
const apiversion = "/api";
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.post(apiversion + "/signup", signUp);
app.post(apiversion + "/signin", signIn);
app.use(`${apiversion}/chat`, ChatRoute);
app.use(`${apiversion}/user`, UserRoute);
app.use(apiversion + "/post", PostRoute);

// app.use(`${apiversion}/user`, )

export default app;
