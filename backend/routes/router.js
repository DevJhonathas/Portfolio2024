const express = require("express");
const router = express();

//User router
router.use("/users", require("./userRoutes"));

//Project router
router.use("/projects", require("./projectsRoutes"));

module.exports = router;