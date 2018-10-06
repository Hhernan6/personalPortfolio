 import React from 'react';

 const ProjectCards = (props) => {
    return (
        <div className="row__card">
            <img src= {props.image} />
            <div className="row__card__content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
 }


 export default ProjectCards 