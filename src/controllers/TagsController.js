const knex = require("../database/knex")


class TagsController {

    async show(request, response) {
        const { menu_id } = request.params;
        
        // const menu = await knex("tags").where('menu_id', menu_id).first();
        const tags = await knex('tags').where({menu_id}).orderBy('name')

        return response.json(tags)
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("tags").where({ id }).delete();

        const message = "Tag excluido com sucesso!!"

        return response.json(message);
    }
    
}

module.exports = TagsController;

   







       
        
        
       

