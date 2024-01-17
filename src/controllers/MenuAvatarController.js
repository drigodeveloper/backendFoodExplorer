const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const diskStorage = require("../providers/DiskStorage");
const { response } = require("express");

class MenuAvatarController {

    async update() {
        const menu_id = request.menu.id;
        const avatarFileName = request.file.filename;

        const menu = await knex("menu")
        .where({ id: menu_id }).first();

        if(menu.avatar) {
            await diskStorage.deletefile(menu.avatar)

        }

        const filename = await diskStorage.saveFile(menu.avatar)
        menu.avatar = filename

        await knex("menu").update(menu).where({ id: menu_id })

        return response.json(menu)

    }
}

module.exports = MenuAvatarController;