/* eslint-disable */

const Project = require("../models/project");

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
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

exports.deleteProject = (req, res, next) => {
  Project.findByIdAndDelete({ _id: req.params.id })
    .then((deletedProject) => {
      if (!deletedProject) {
        return res.status(404).json({ message: "Projet non trouvé" });
      }
      res.status(200).json({ message: "Projet supprimé avec succès" });
    })
    .catch((error) => res.status(500).json({ error }));
};

