import React from 'react';

const Education = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">COMSATS University Islamabad, Lahore campus</h3>
            <div className="subheading mb-3">Bachelor of Science</div>
            <div>Software Engineering</div>
            <p>Grade: A</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Feb 2022 - Feb 2026</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Punjab Group of Colleges</h3>
            <div className="subheading mb-3">FSC</div>
            <div>Pre-Engineering</div>
            <p>Grade: A+</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2019 - 2021</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Cadet College Chakwal</h3>
            <div className="subheading mb-3">Matric</div>
            <p>Grade: A+</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary"> 2017 - 2019</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Army Public School and College</h3>
            <div className="subheading mb-3">School</div>
            <p>Grade: A+</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2006 - 2017</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
