const knex = require("../database/knex")


class FavoritesController {
    async create(request, response) {
        const { title } = request.body
        const { id } = request.params
        
        const user = await knex("users").where({ id }).first();
        const menu = await knex("menu").where({ id }).first();
        
        const menu_id = menu.id
        const user_id = user.id


        await knex("favorites").insert({
            title,
            user_id: user_id,
            menu_id: menu_id
        })




       
        
        return response.json({ title });
    }

    

    async show(request, response) {
        
    }

    async delete(request, response) {
        const { id } = request.params


       
    }

    async index(request, response) {
        
        }
        
}





module.exports = FavoritesController;






