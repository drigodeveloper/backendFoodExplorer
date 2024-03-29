const knex = require("../database/knex");
const AppError = require('../utils/AppError');
const { compare } = require('bcrypt');
const authConfig = require("../config/auth");
const { sign } = require("jsonwebtoken")



class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;
        
        const user = await knex("users").where({email}).first();
        

        if(!user) {
            throw new AppError("E-mail e/ou senha incorreto!", user)
        }

        const checkingPassword = await compare(password, user.password);

        if(!checkingPassword) {
            throw new AppError("E-mail e/ou senha incorreto!")
        }


        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({role: user.role}, secret, {
            subject: String(user.id),
            expiresIn
        })

        
        return response.json({user, token});
    }

    
}

module.exports = SessionsController;






