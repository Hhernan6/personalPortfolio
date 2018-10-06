import React from "react";
import ProjectCards from "./ProjectCards";
const Project = props => {
  return (
    <div className="row">
      {props.project.map(cardsList => {
        return (
          <ProjectCards
          key={cardsList.title}
            title={cardsList.title}
            image={cardsList.image}
            description={cardsList.description}
          />
        );
      })}
    </div>
  );
};

export default Project;
