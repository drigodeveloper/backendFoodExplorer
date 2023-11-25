const AppError = require('../utils/AppError')


class UserControllers {
        create(request, response) {
        const { name, email, password } = request.body;

        if(!name) {
            throw new AppError("O nome é obrigatório!")
        }

        response.status(201).json({ name, email, password })

    }
}

module.exports = UserControllers;