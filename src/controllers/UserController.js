const AppError = require('../utils/AppError')
const knex = require("../database/knex")
const sqlConnection = require("../database/sqlite")


class UserControllers {
    async create(request, response) {
        const { name, email, password, is_admin } = request.body;

        

        if(!name) {
            throw new AppError("O nome é obrigatório!")
        }

     


        const [userInsert] = await knex("users").insert({
            name, 
            email, 
            password,
            is_admin: false
        });

        

        response.status(201).json({ name, email, password })

    }

    async delete (request, response) {
        const { id } = request.params;

        await knex("users").where({id}).delete();

        return response.json();
    }
}

module.exports = UserControllers;