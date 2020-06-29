import express, { Response, Request } from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
app.use(bodyParser.json());

const home = (req: Request, res: Response) => {
	console.log(req.body);
	res.status(400).json({
		done: "happy",
	});
};

app.get("/", (req, res) => home(req, res));

export default app;
