import React from 'react';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <p>Hello! My name is Maria, I'm 31 years old, and I'm from Russia. I have been living here for 5 years and actively studying web design. In addition to that, I have a passion for epoxy resin art and often do family photoshoots.
      In 3 years, I see myself working as a professional web designer, taking on exciting projects and collaborating with clients to bring their visions to life! </p>
      <img src={require("../images/project6.jpg")} alt="Myself" />
    </section>
  );
}

export default AboutMe;
