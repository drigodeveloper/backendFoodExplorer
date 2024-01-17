const { Router } = require("express");

const userRouter = require('./users.routes')
const menuRouter = require('./menu.routes')
const tagsRoutes = require('./tags.routes')
const sessionsRoutes = require('./sessions.routes')
const favoritesRoutes = require("./favorites.routes")

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRoutes);
routes.use("/menu", menuRouter);
routes.use("/tags", tagsRoutes);
routes.use("/favorites", favoritesRoutes)

module.exports = routes;