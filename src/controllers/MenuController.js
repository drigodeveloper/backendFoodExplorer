const knex = require("../database/knex")


class MenuController {
    async create(request, response) {
        const { title, description, category, price, tags } = request.body;
        const { menu_id } = request.params;

        await knex('menu').insert({
            title, 
            description, 
            category, 
            price
        });

        const tagsInsert = tags.map(name => {
            return {
                name,
                menu_id
            }
        });

        await knex('tags').insert(tagsInsert)
        return response.send({ title, description, category, price, tags });
    }

}

module.exports = MenuController;