const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");
// const multer = require("../middlewares/multer-config");

const projectCtrl = require("../controllers/project");

router.get("/", projectCtrl.getAllProjects);
router.get("/:id", projectCtrl.getSingleProject);

router.post("/", auth, projectCtrl.createProject);

module.exports = router;