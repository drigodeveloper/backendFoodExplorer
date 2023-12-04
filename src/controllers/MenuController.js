const knex = require("../database/knex")


class MenuController {
    async create(request, response) {
        const { title, description, category, price, tags } = request.body;
        // const { menu_id } = request.params;

        
        const [menu_id] = await knex('menu').insert({
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

    async show(request, response) {
        const { id } = request.params;

        const menu = await knex('menu').where({ id }).first();
        const tags = await knex('tags').where({menu_id: id}).orderBy('name')

        return response.json({
            ...menu,
            menu,
            tags
        })
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex('menu').where({id}).delete();

        return response.json();
    }

    async index(request, response) {
        const { title, id, tags } = request.query;

        let menuIndex;

        if(tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());

            menuIndex = knex('tags')
            .whereIn("name", filterTags)
        }else{
            menuIndex = await knex('menu')
            .where({id})
            .where("title", "like", `%${title}%`)

            // .whereLike("title", `%${title}%`)
            .orderBy('title');
        }
        return response.json({menuIndex});
    }
}





module.exports = MenuController;






