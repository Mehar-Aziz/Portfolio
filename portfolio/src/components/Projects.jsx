import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: "Database Website For Freelance Office in SQl",
    description: "Built a web platform for managing freelance tasks, clients, and finances using SQL for database management.",
    image: googleAnalyticsImage,
  },
  {
    title: "Virtual Mouse Control Using Hand Gestures",
    description: "Created a virtual mouse controlled by hand gestures using Python and MATLAB for computer vision and interaction.",
  },
  {
    title: "Movie Website",
    description: "Developed a dynamic movie database website using React and Redux Toolkit, featuring search and filtering capabilities.",
  },
  {
    title: "Wellness Wise and Fitness",
    description: "Designed a wellness platform using React, Node.js, MongoDB, and Express.js, offering personalized fitness plans and tracking.",
  },
  {
    title: "Job Finder",
    description: "Built a job portal using React, Node.js, MongoDB, and Express.js, featuring job listings, applications, and user profiles.",
  },
  {
    title: "Hangman Game",
    description: "Developed a classic Hangman game in Python with word guessing and scoring features.",
  },
  {
    title: "Rock-Paper-Scissors Game",
    description: "Created a Rock-paper-scissors game in Python with a simple, interactive user interface.",
  },
];

const Projects = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <div className="my-auto">
        <h2 className="mb-5">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4">
              <Card.Img variant="top" src={award.image} alt={award.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
