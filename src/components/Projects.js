import React from 'react';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-images">
        <img src={require('../images/project1.png')} alt="Project 1" />
        <img src={require('../images/project2.png')} alt="Project 2" />
        <img src={require('../images/project3.png')} alt="Project 3" />
        <img src={require('../images/project4.jpg')} alt="Project 3" />
        <img src={require('../images/project5.png')} alt="Project 3" />
      </div>
    </section>
  );
}

export default Projects;
