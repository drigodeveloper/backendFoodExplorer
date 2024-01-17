const { Router } = require("express");
const multer = require('multer')
const upload_config = require("../config/upload")

const MenuController = require('../controllers/MenuController');
const ensuresAuthentication = require("../middleware/ensuresAuthentication")
const verifyUserAuthorization = require("../middleware/verifyUserAuthorization")


const menuControllers = new MenuController();

const menuRoutes = Router();
const upload = multer(upload_config.MULTER);

menuRoutes.use(ensuresAuthentication)


menuRoutes.get("/", menuControllers.index);
menuRoutes.post("/", verifyUserAuthorization(["admin"]), menuControllers.create);
menuRoutes.get("/:id", menuControllers.show);
menuRoutes.delete("/:id", verifyUserAuthorization(["admin"]), menuControllers.delete);
menuRoutes.patch("/avatar",  verifyUserAuthorization(["admin"]), upload.single("avatar"), (request, response) => {
    console.log(request.file.filename)
    const message = "Imagem salva com sucesso !!"
    response.json(message);
})




module.exports = menuRoutes;
