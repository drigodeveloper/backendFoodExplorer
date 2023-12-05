const { Router } = require("express");

const MenuController = require('../controllers/MenuController');
const ensuresAuthentication = require("../middleware/ensuresAuthentication")


const menuControllers = new MenuController();

const menuRoutes = Router();

menuRoutes.use(ensuresAuthentication)


menuRoutes.get("/", menuControllers.index);
menuRoutes.post("/", menuControllers.create);
menuRoutes.get("/:id", menuControllers.show);
menuRoutes.delete("/:id", menuControllers.delete);




module.exports = menuRoutes;
