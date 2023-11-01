const {body} = require("express-validator"); 
const {User: User} = require("../models/User");

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("The name must have at least 3 characters."),

        body("email")
            .optional()
            .isEmail()
            .withMessage("Please, Enter the administrator's email."),

        body("password")
            .isString()
            .withMessage("Password confirmation is necessary.")
            .isLength({min: 5})
            .withMessage("The password must have at least 5 characters."),

        body("confirmpassword")
            .isString()
            .withMessage("Password confirmation is necessary.")
            .custom((value, { req }) => {
                if(value != req.body.password){
                throw new Error("As senhas não são iguais.");
            }
            return true;
        }),
    ];
};

const userLoginValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("The name must have at least 3 characters."),

        body("email")
            .optional()
            .isEmail()
            .withMessage("Please, Enter the administrator's email."),

        body("password")
            .optional()
            .isLength({min: 5})
            .withMessage("The password must have at least 5 characters."),

        body("confirmpassword")
        .optional()
        .isLength({min: 5})
        .withMessage("The password must have at least 5 characters."),
    ];
}

module.exports = {
    userLoginValidation,
    userUpdateValidation
}