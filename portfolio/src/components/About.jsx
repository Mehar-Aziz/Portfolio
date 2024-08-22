import React from 'react';

const About = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          Mehar <span className="text-primary">Aziz</span>
        </h1>
        <div className="subheading mb-5">
          J Block Johar Town · Lahore, Punjab, Pakistan · (333) 252-5802 ·
          <a href="mailto:name@email.com">meharaziz.1614@gmail.com</a>
        </div>
        <p className="mb-5">
        I am a Full-Stack Developer with expertise in React.js, Node.js, and databases. As an AI/ML enthusiast, I explore cutting-edge technologies to create impactful solutions and drive innovation in software development.
        </p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
