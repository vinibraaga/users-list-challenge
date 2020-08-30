import { Request, Response } from "express";

export interface Controller {
	getUsers(req: Request, res: Response): Promise<Response>;

	getWebsites(req: Request, res: Response): Promise<Response>;

	getAlphabeticalOrder(req: Request, res: Response): Promise<Response>;
}
