import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

import routes from "./routes";

class App {
	public app: express.Application = express();

	public constructor() {
		config();
		this.middlewares();
	}

	private middlewares(): void {
		this.app.use(morgan("tiny"));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors());
		this.app.use(routes);
	}
}

export default new App().app;
