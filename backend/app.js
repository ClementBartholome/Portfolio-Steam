/* eslint-disable */

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");

const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();

app.use(helmet());

app.use(express.json());
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/projects", projectRoutes);
app.use("/api/auth", userRoutes);

// Tells express to handle the images ressource statically (a sub-directory of our root directory, __dirname) whenever it gets a request to the /images route
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
