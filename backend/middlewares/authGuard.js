const {User: User} = require("../models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

const authGuard = async  (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    //check if header has a token
    if(!token) return res.status(401).json({errors: ["Acesso negado!"]});

    //check if token is valid
    try {
        const verified = jwt.verify(token, jwtSecret);
        req.user = await User.findOne(verified.id).select("-password").select("-confirmpassword");

        next();
    } catch (error) {
        res.status(401).json({errors: ["Token inválido!"]});
    }

}

module.exports = authGuard;