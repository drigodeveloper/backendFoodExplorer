const { Router } = require("express");

const UserControllers = require('../controllers/UserController');
const ensuresAuthentication = require("../middleware/ensuresAuthentication")

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.post("/", userControllers.create);
userRoutes.put("/", ensuresAuthentication, userControllers.update);




module.exports = userRoutes;
