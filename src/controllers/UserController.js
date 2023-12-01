const AppError = require('../utils/AppError')
const knex = require("../database/knex")
const { hash, compare } = require('bcrypt');


class UserControllers {
    async create(request, response) {
        const { name, email, password, is_admin } = request.body;
        const checkEmailExists = await knex('users').where('email', email).first();

        if(!name) {
            throw new AppError("O nome é obrigatório!");
        }

        if(checkEmailExists) {
            throw new AppError("Este e-mail ja esta em uso");
            return
        }

        const criptPassword = await hash(password, 8);


        await knex("users").insert({
            name, 
            email, 
            password: criptPassword,
            is_admin
        });

        response.status(201).json({ name, email, password, is_admin });

    }
        
    
    async update (request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;
        
        const user = await knex('users').where('id', id)
        
        if(!user) {
            throw new AppError("Usuário não encontrado")
        }
        
        const checkEmailExists = await knex('users').where('email', email).first();
        
        if(checkEmailExists && checkEmailExists.id !== user.id) {
            throw new AppError("Este e-mail ja esta em uso");
        }
        
        user.name = name;
        user.email = email;
        
        if(password && !old_password) {
            throw new AppError("Você precisar informar a senha antiga para atualizar a senha");
        }
        
        if ( password && old_password ) {
            const checkOldPassword = await compare(old_password, user.password)
            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere")
            }
            user.password = await hash(password, 8)
        }
        
            await knex("users")
            .where('id', id)
            .update({
                name: user.name,
                email: user.email,
                password: user.password,
                updated_at: new Date()
        });
            
        response.status(201).json({ name, email, password });
    
    }
            
            
        
        async delete (request, response) {
            const { id } = request.params;
        
            await knex("users").where({ id }).delete();
        
            return response.json();
        }
        
}
    

module.exports = UserControllers;






        
