const { Router } = require("express");

const MenuController = require('../controllers/MenuController');

const menuControllers = new MenuController();

const menuRoutes = Router();

menuRoutes.post("/:menu_id", menuControllers.create);




module.exports = menuRoutes;
