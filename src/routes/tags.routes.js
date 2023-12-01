const { Router } = require("express");

const TagsController = require('../controllers/TagsController');

const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.get("/:menu_id", tagsController.show);





module.exports = tagsRoutes;
