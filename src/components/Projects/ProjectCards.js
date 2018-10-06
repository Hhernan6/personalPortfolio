 import React from 'react';

 const ProjectCards = (props) => {
    return (
        <div className="card">
            <img src= {props.image} />
            <div>
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
 }


 export default ProjectCards 