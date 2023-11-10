const {body} = require("express-validator"); 
const {User: User} = require("../models/User");

const userUpdateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("The name must have at least 3 characters.")
            .isLength({min: 3})
            .withMessage("The name must have at least 3 characters."),

        body("email")
            .isString()
            .withMessage("The name must have at least 3 characters.")
            .isEmail()
            .withMessage("Please, Enter the administrator's email."),

        body("password")
            .isString()
            .withMessage("Password confirmation is necessary.")
            .isLength({min: 5})
            .withMessage("The password must have at least 5 characters."),
    ];
};

const userLoginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("E-mail é obrigatório")
            .isEmail()
            .withMessage("Please, Enter the administrator's email."),

        body("password")
            .isString()
            .withMessage("Password é obrigatório")
            .isLength({min: 5})
            .withMessage("The password must have at least 5 characters."),
    ];
}

module.exports = {
    userLoginValidation,
    userUpdateValidation
}