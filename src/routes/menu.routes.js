const { Router } = require("express");

const MenuController = require('../controllers/MenuController');

const menuControllers = new MenuController();

const menuRoutes = Router();

menuRoutes.get("/", menuControllers.index);
menuRoutes.post("/", menuControllers.create);
menuRoutes.get("/:id", menuControllers.show);
menuRoutes.delete("/:id", menuControllers.delete);




module.exports = menuRoutes;
