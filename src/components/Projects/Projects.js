import React from "react";
import ProjectCards from "./ProjectCards";
import  Footer from "../footer/Footer"
const Project = props => {
  return (
    <div>
    <div className="projects-container" id="project-container">
    <h2>Projects | Challenges</h2>
      <div className="row" id="project-container">
        {props.projects.map(cardsList => {
          return (
            <ProjectCards
              key={cardsList.title}
              title={cardsList.title}
              image={cardsList.image}
              description={cardsList.description}
              url={cardsList.URL}
            />
          );
        })}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Project;
