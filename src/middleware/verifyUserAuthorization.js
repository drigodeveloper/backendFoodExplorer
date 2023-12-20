const AppError = require("../utils/AppError");

function verifyUserAuthorization(roleToVerify) {
    return(request, response, next) => {
        const { is_admin } = request.user

        if(!roleToVerify.includes(is_admin)) {
            throw new AppError("Unauthorized", 401)
        }

        next();
    }
};

module.exports = verifyUserAuthorization;