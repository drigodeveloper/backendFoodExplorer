const knex = require("../database/knex");
const AppError = require('../utils/AppError')
const { compare } = require('bcrypt');



class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;
        
        const user = await knex("users").where({email}).first();

        if(!user) {
            throw new AppError("E-mail e/ou senha incorreto!")
        }

        const checkingPassword = await compare(password, user.password);

        if(!checkingPassword) {
            throw new AppError("E-mail e/ou senha incorreto!")
        }

        

        
        return response.json(user);
    }

    
}

module.exports = SessionsController;






