const { Router } = require("express");

const userRouter = require('./users.routes')
const menuRouter = require('./menu.routes')

const routes = Router();

routes.use("/users", userRouter);
routes.use("/menu", menuRouter);

module.exports = routes;