import { Router } from "express";

import userRoutes from "./usersRoutes";

const routes = Router();

routes.use("/", userRoutes);

export default routes;
