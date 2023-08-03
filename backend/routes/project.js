const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");
// const multer = require("../middlewares/multer-config");

const projectCtrl = require("../controllers/project");

router.get("/", projectCtrl.getAllProjects);

router.post("/", auth, projectCtrl.createProject);

router.delete("/:id", auth, projectCtrl.deleteProject);

router.put("/:id", auth, projectCtrl.updateProject);

module.exports = router;
