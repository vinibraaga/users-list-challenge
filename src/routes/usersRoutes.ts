import { Router } from "express";

import UsersController from "../controllers/usersController";

const routes = Router();

const usersController = new UsersController();

routes
	.get("/", usersController.getUsers)
	.get("/websites", usersController.getWebsites)
	.get("/order", usersController.getAlphabeticalOrder)
	.get("/filter", usersController.getUsersFilter);

export default routes;
