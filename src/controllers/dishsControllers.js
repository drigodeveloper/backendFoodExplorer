const knex = require("../database/knex")


class DishsControllers {
    async create(request, response) {
        const { name, description, price } = request.body;
        
        await knex('dishes').insert({
            name, 
            description, 
            price
        });

        return response.send({ name, description, price }); 
    }

    async delete (request, response) {
        const { id } = request.params;
    
        await knex("dishes").where({ id }).delete();
    
        return response.json();
    }
        
};
    module.exports = DishsControllers;


     



        
