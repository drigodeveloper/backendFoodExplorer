const knex = require("../database/knex")


class TagsController {

    async show(request, response) {
        const { menu_id } = request.params;
        
        const tags = await knex('tags').where({menu_id}).orderBy('name')

        return response.json({
            ...menu,
            menu,
            tags
        })
    }
    
}

module.exports = TagsController;

   







       
        
        
       

