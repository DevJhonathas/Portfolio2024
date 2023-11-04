const router = require("express").Router();

//Controller
const projectController = require("../controllers/projectController");

//Middlewares
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const { imageUpload } = require("../middlewares/imageUploads");
const { photoInsertValidation, photoUpdtadeValidation } = require("../middlewares/projectsValidation");

router.route("/")
.post(authGuard, imageUpload.single("image"), photoInsertValidation(), validate,(req, res) => projectController
.insertProject(req, res));

router.route("/")
.get((req, res) => projectController
.getAllProjects(req, res));

router.route("/:id")
.get((req, res) => projectController
.getProject(req, res));  

router.route("/:id")
.delete((req, res) => projectController
.deleteProject(req, res));

router.route("/:id")
.put(authGuard, photoUpdtadeValidation(), validate, (req, res) => projectController
.updateProject(req, res));

module.exports = router;