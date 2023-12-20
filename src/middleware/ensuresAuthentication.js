const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../config/auth");

function ensuresAuthentication(request, response, next) {
    
    const authHeader = request.headers.authorization;
    

    if(!authHeader) {
        throw new AppError("JWT token inválido", 401)
    }

    const [, token] = authHeader.split(" ");
    
    try {
       const { is_admin, sub: user_id } = verify(token, authConfig.jwt.secret);

       request.user = {
        id: Number(user_id),
        is_admin
       };
       return next();
    }catch {
        throw new AppError("JWT token não informado", 401)
    }
};

module.exports = ensuresAuthentication;