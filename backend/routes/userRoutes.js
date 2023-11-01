const express = require("express");
const router = express.Router();

//Controller
const userController = require("../controllers/userController");

//Middlewares
const validate = require("../middlewares/handleValidation");
const {userUpdateValidation, userLoginValidation} = require("../middlewares/userValidations");

// Routes
router.route("/login")
.post(userLoginValidation(), validate, (req, res) => userController
.signLogin(req, res));

router.route("/login")
.get((req, res) => userController
.getAllLogin(req, res));

router.route("/login/:id")
.get((req, res) => userController
.getLogin(req, res));

router.route("/login/:id")
.put(userUpdateValidation(), validate, (req, res) => userController
.updateLogin(req, res));

module.exports = router;