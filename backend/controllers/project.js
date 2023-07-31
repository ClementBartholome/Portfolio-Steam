const Project = require("../models/project");

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};

exports.getSingleProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(400).json({ error }));
};

exports.createProject = (req, res, next) => {
  const projectObject = JSON.parse(req.body.project);
  delete projectObject._id;
  delete projectObject._userId;
  const project = new Project({
    ...projectObject,
    id: req.auth.id,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  project
    .save()
    .then(() => {
      res.status(201).json({ message: "Projet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
