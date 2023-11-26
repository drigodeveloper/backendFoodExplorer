const { Router } = require("express");
const UserControllers =  require('../controllers/UserController');

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.post("/", userControllers.create);
userRoutes.put("/:id", userControllers.update);
userRoutes.delete("/:id", userControllers.delete);




module.exports = userRoutes;
