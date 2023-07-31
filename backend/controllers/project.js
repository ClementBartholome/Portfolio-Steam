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
  const project = new Project({
    id: req.body.id,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    tags: req.body.tags,
    code: req.body.code,
    demo: req.body.demo,
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
