const { Router } = require("express");

const FavoritesController = require('../controllers/FavoritesController');

const favoritesController = new FavoritesController();

const favoritesRoutes = Router();

favoritesRoutes.post("/:user_id/:menu_id", favoritesController.create);

module.exports = favoritesRoutes;



