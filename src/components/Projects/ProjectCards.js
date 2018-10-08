 import React from 'react';

 const ProjectCards = (props) => {
    return (
        <div className="row__card">
        
            <img src= {props.image} alt="project"/>
            <div className="row__card__content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">View Website</a>
            </div>
        </div>
    )
 }


 export default ProjectCards 