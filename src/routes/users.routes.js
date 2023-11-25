const { Router } = require("express");

const userRoutes = Router();


userRoutes.get("/", (request, response) => {
    const { name, email, password } = request.body;
    
    response.json({ name, email, password })
});


module.exports = userRoutes;
