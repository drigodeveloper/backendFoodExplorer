const { Router } = require("express");

const DishsControllers = require('../controllers/DishsControllers');

const dishsControllers = new DishsControllers(); 

const dishesRoutes = Router();

dishesRoutes.post("/", dishsControllers.create);
dishesRoutes.delete("/:id", dishsControllers.delete);




module.exports = dishesRoutes;
