import React from 'react';

const About = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          I am <section className="animation">
    <div className="first"><div>Mehar Aziz</div></div>
    <div className="second"><div>Web Developer</div></div>
    <div className="third"><div>Software Engineer</div></div>
  </section>
        </h1>
        <br />
        <div className="subheading mb-5">
          J Block Johar Town · Lahore, Punjab, Pakistan · (333) 252-5802 ·
          <a href="mailto:meharaziz.1614@gmail.com">meharaziz.1614@gmail.com</a>
        </div>
        <p className="mb-5">
        I am a Full-Stack Developer with expertise in React.js, Node.js, and databases. As an AI/ML enthusiast, I explore cutting-edge technologies to create impactful solutions and drive innovation in software development.
        </p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-facebook-f fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-linkedin-in fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
        <br />
        <a href="/MeharAzizResume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default About;
