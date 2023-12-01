const knex = require("../database/knex")


class TagsController {

    async show(request, response) {
        const { menu_id } = request.params;
        
        // const menu = await knex("tags").where('menu_id', menu_id).first();
        const tags = await knex('tags').where({menu_id}).orderBy('name')

        return response.json(tags)
    }
    
}

module.exports = TagsController;

   







       
        
        
       

