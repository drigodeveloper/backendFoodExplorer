const { Router } = require("express");
const UserControllers =  require('../controllers/UserController');

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.post("/", userControllers.create)




module.exports = userRoutes;
