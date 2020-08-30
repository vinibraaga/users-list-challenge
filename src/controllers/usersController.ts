import { Request, Response } from "express";

import { Controller } from "../protocols";
import usersService from "../services/users";

export default class UsersController implements Controller {
	public async getUsers(req: Request, res: Response): Promise<Response> {
		try {
			return res.status(200).json(await usersService.getUsers());
		} catch (err) {
			throw new Error(err);
		}
	}

	public async getWebsites(req: Request, res: Response): Promise<Response> {
		try {
			return res.status(200).json(await usersService.getWebsites());
		} catch (err) {
			throw new Error(err);
		}
	}

	public async getAlphabeticalOrder(
		req: Request,
		res: Response,
	): Promise<Response> {
		try {
			return res.status(200).json(await usersService.getAlphabeticalOrder());
		} catch (err) {
			throw new Error(err);
		}
	}

	public async getUsersFilter(req: Request, res: Response): Promise<Response> {
		try {
			return res.status(200).json(await usersService.getUsersFilter());
		} catch (err) {
			throw new Error(err);
		}
	}
}
