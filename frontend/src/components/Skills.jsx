import checkmark from "../assets/checkmark.svg";
import React from "react";

export default function Skills() {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="categories">
        <span>Front-end</span>
        <span>Back-end</span>
      </div>
      <hr></hr>
      <div className="skill">
        <span>JavaScript</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-front"></img>
      </div>
      <hr />
      <div className="skill">
        <span>React</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-front"></img>
      </div>
      <hr />
      <div className="skill">
        <span>PHP / MySQL</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-back"></img>
      </div>
      <hr />
      <div className="skill">
        <span>MongoDB</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-back"></img>
      </div>
      <hr />
      <div className="skill">
        <span>Node.js / Express</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-back"></img>
      </div>
      <hr />
      <div className="skill">
        <span>SASS / SCSS</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-front"></img>
      </div>
      <hr />
      <div className="skill">
        <span>Firebase</span>
        <img src={checkmark} alt="Checkmark" className="checkmark-back"></img>
      </div>
    </section>
  );
}
