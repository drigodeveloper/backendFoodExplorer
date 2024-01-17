const knex = require("../database/knex")


class FavoritesController {
    async create(request, response) {
        const { title } = request.body
        const { user_id, menu_id } = request.params;

        await knex("favorites").insert({
            title,
            user_id: user_id,
            menu_id: menu_id
        })

       
        
        return response.json({ title, user_id, menu_id });
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






