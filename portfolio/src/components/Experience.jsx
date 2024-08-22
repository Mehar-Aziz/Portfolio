import React from 'react';

const Experience = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Full-Stack Website Development Intern</h3>
            <div className="subheading mb-3">Interncarft</div>
            <p>I contributed to developing full-stack web applications, gaining hands-on experience with both front-end and back-end technologies. My responsibilities included designing user interfaces, implementing server-side logic, and ensuring seamless integration between the two. I worked on various projects, applying modern frameworks and best practices to deliver functional and responsive web solutions. This role enhanced my skills in web development and provided valuable insights into industry-standard practices and workflows.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2024 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Softcom Participant</h3>
            <div className="subheading mb-3">GIKI Institute</div>
            <p>Took part in the Softcom coding competition hosted by GIKI Institute, showcasing skills in algorithmic problem-solving and software development. The competition featured challenging coding problems and required innovative solutions under time constraints. Engaged in collaborative teamwork, leveraged knowledge in various programming languages, and demonstrated proficiency in both individual and group tasks.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">September 2023 - September 2023</span>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;
