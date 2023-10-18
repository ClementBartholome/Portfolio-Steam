/* eslint-disable */

const Project = require("../models/project");

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .sort({ _id: 1 })
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
  if (!req.auth) {
    return res.status(401).json({ message: "Non autorisé" });
  } else {
    Project.findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "Projet supprimé !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
};

exports.updateProject = (req, res, next) => {
  const { id, title, image, description, tags, code, demo } = req.body;

  Project.findByIdAndUpdate(
    { _id: req.params.id }, // Find the project by ID and update it
    {
      id,
      title,
      image,
      description,
      tags,
      code,
      demo,
    },
    { new: true }
  )
    .then((updatedProject) => {
      if (!updatedProject) {
        return res.status(404).json({ message: "Projet non trouvé" });
      }
      res.status(200).json(updatedProject);
    })
    .catch((error) => res.status(500).json({ error }));
};
