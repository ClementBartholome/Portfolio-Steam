import React, { useContext } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Description from "../components/Description";
import Cta from "../components/Cta";
import Skills from "../components/Skills";
import Success from "../components/Success";
import Footer from "../components/Footer";
import ProjectsContext from "../contexts/ProjectsContext";

const fadeInUpAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function HomePage() {
  const projects = useContext(ProjectsContext);
  const images = projects.map((project) => project.image);
  return (
    <>
      <div className="main-container">
        <Header />
        <main>
          <div className="top-container">
            <motion.div
              className="carousel-container"
              initial="hidden"
              animate="visible"
              variants={fadeInUpAnimation}>
              <Carrousel images={images} />
            </motion.div>
            <motion.div
              className="description-container"
              initial="hidden"
              animate="visible"
              variants={fadeInUpAnimation}>
              <Description />
            </motion.div>
          </div>
          <div className="bot-container">
            <motion.div
              className="bot-container__left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpAnimation}>
              <Cta />
            </motion.div>
            <motion.div
              className="bot-container__right"
              initial="hidden"
              animate="visible"
              variants={fadeInUpAnimation}>
              <Skills />
              <Success />
            </motion.div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
