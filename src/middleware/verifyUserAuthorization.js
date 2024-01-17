const AppError = require("../utils/AppError");

function verifyUserAuthorization(roleToVerify) {
    return(request, response, next) => {
        const { role } = request.user

        if(!roleToVerify.includes(role)) {
            throw new AppError("Unauthorized", 401)
        }

        next();
    }
};

module.exports = verifyUserAuthorization;